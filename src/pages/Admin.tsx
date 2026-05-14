import { useState, useEffect } from 'react';
import { LogOut, Save, Pencil, Trash2, Copy, Plus } from 'lucide-react';
import styles from './Admin.module.css';
import { getRestaurantData, saveRestaurantData, ADMIN_PASSWORD } from '../lib/data';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem("adminAuth") === "true");
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('menu');
  const [data, setData] = useState(() => getRestaurantData());

  useEffect(() => {
    saveRestaurantData(data);
  }, [data]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("adminAuth", "true");
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Mot de passe incorrect');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    setIsAuthenticated(false);
  };

  const copyConfig = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    alert("Configuration copiée dans le presse-papier !");
  };

  const toggleItemAvailability = (id: string) => {
    setData((prev: any) => ({
      ...prev,
      items: prev.items.map((i: any) => i.id === id ? { ...i, available: !i.available } : i)
    }));
  };

  const deleteItem = (id: string) => {
    if (window.confirm("Supprimer ce plat ?")) {
      setData((prev: any) => ({
        ...prev,
        items: prev.items.filter((i: any) => i.id !== id)
      }));
    }
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.loginPage}>
        <div className={styles.loginCard}>
          <h1 className={styles.loginTitle}>LES 2A</h1>
          <p className={styles.loginSubtitle}>Administration</p>
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <input 
              type="password" 
              placeholder="Mot de passe" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.loginInput}
            />
            {error && <div className={styles.loginError}>{error}</div>}
            <button type="submit" className={styles.loginBtn}>Connexion</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.adminDashboard}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2>Admin</h2>
        </div>
        <div className={styles.sidebarNav}>
          <button className={`${styles.navBtn} ${activeTab === 'menu' ? styles.active : ''}`} onClick={() => setActiveTab('menu')}>Menu</button>
          <button className={`${styles.navBtn} ${activeTab === 'categories' ? styles.active : ''}`} onClick={() => setActiveTab('categories')}>Catégories</button>
          <button className={`${styles.navBtn} ${activeTab === 'settings' ? styles.active : ''}`} onClick={() => setActiveTab('settings')}>Paramètres</button>
          <button className={`${styles.navBtn} ${activeTab === 'export' ? styles.active : ''}`} onClick={() => setActiveTab('export')}>Export / Config</button>
        </div>
        <div className={styles.sidebarFooter}>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            <LogOut size={16} /> Déconnexion
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {activeTab === 'menu' && (
          <div>
            <div className={styles.headerRow}>
              <h1>Gestion du Menu</h1>
              <button className={styles.primaryBtn}><Plus size={16}/> Ajouter un plat</button>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Plat</th>
                    <th>Catégorie</th>
                    <th>Prix</th>
                    <th>Dispo</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.items.map((item: any) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{data.categories.find((c: any) => c.id === item.categoryId)?.name}</td>
                      <td>{item.price} FCFA</td>
                      <td>
                        <button 
                          className={`${styles.toggleBtn} ${item.available ? styles.toggleOn : styles.toggleOff}`}
                          onClick={() => toggleItemAvailability(item.id)}
                        >
                          {item.available ? 'OUI' : 'NON'}
                        </button>
                      </td>
                      <td>
                        <div className={styles.actionBtns}>
                          <button className={styles.iconBtn}><Pencil size={16}/></button>
                          <button className={`${styles.iconBtn} ${styles.danger}`} onClick={() => deleteItem(item.id)}><Trash2 size={16}/></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'categories' && (
          <div>
            <h1>Catégories</h1>
            <p>Ici on gère les catégories (Ajout, suppression, réordonner).</p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h1>Paramètres du Restaurant</h1>
            <p>Nom, adresses, horaires, numéro WhatsApp, liens sociaux...</p>
            <button className={styles.primaryBtn}><Save size={16}/> Sauvegarder</button>
          </div>
        )}

        {activeTab === 'export' && (
          <div>
            <h1>Export / Config</h1>
            <div className={styles.exportBox}>
              <p>Partagez ce JSON avec votre développeur pour mettre à jour les données par défaut dans le code.</p>
              <button className={styles.primaryBtn} onClick={copyConfig}><Copy size={16}/> Copier la config JSON</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
