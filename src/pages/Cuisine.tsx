import { useState, useEffect } from 'react';
import { ChefHat, LogOut, Clock, Flame, BellRing, CheckCircle, RotateCcw, AlertCircle } from 'lucide-react';
import styles from './Cuisine.module.css';
import { getOrders, saveOrders, updateOrderStatus, CUISINE_PASSWORD } from '../lib/data';
import type { Order } from '../lib/data';

function playOrderBeep() {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.setValueAtTime(1100, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
    osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.4);
  } catch {}
}

export default function Cuisine() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem("cuisineAuth") === "true");
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [orders, setOrders] = useState<Order[]>(getOrders());
  const [currentTime, setCurrentTime] = useState(new Date());

  // Polling for orders
  useEffect(() => {
    if (!isAuthenticated) return;
    
    let knownIds = getOrders().map(o => o.id);
    
    const checkOrders = () => {
      const current = getOrders();
      setOrders(current);
      
      const newOnes = current.filter(o => !knownIds.includes(o.id));
      if (newOnes.length > 0) {
        playOrderBeep();
        setTimeout(playOrderBeep, 250);
        // Toast could be added here
        knownIds = current.map(o => o.id);
      }
    };
    
    checkOrders(); // initial
    const interval = setInterval(checkOrders, 3000);
    window.addEventListener("storage", checkOrders);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", checkOrders);
    };
  }, [isAuthenticated]);

  // Clock
  useEffect(() => {
    if (!isAuthenticated) return;
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CUISINE_PASSWORD) {
      localStorage.setItem("cuisineAuth", "true");
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Mot de passe incorrect');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("cuisineAuth");
    setIsAuthenticated(false);
  };

  const archiveServed = () => {
    if (window.confirm("Archiver les commandes servies depuis plus de 2h ?")) {
      const cutoff = Date.now() - 2 * 60 * 60 * 1000;
      const filtered = orders.filter(
        o => !(o.status === "served" && o.statusUpdatedAt < cutoff)
      );
      saveOrders(filtered);
      setOrders(filtered);
    }
  };

  const handleAction = (orderId: string, currentStatus: Order['status']) => {
    let newStatus: Order['status'] = 'pending';
    if (currentStatus === 'pending') newStatus = 'preparing';
    else if (currentStatus === 'preparing') newStatus = 'ready';
    else if (currentStatus === 'ready') newStatus = 'served';
    else return;

    updateOrderStatus(orderId, newStatus);
    setOrders(getOrders()); // refresh locally
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.loginPage}>
        <div className={styles.loginCard}>
          <ChefHat size={56} color="#FF6B00" className={styles.loginIcon} />
          <h1 className={styles.loginTitle}>Accès Cuisine</h1>
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <input 
              type="password" 
              placeholder="Mot de passe" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.loginInput}
            />
            {error && <div className={styles.loginError}>{error}</div>}
            <button type="submit" className={styles.loginBtn}>Entrer en cuisine</button>
          </form>
        </div>
      </div>
    );
  }

  const activeCount = orders.filter(o => o.status === 'pending' || o.status === 'preparing').length;

  const renderColumn = (status: Order['status'], title: string, Icon: any, headerColor: string) => {
    let colOrders = orders.filter(o => o.status === status);
    if (status === 'served') {
      // Show only last 10
      colOrders = colOrders.sort((a, b) => b.statusUpdatedAt - a.statusUpdatedAt).slice(0, 10);
    }

    return (
      <div className={styles.kanbanCol}>
        <div className={styles.kanbanHeader} style={{ borderBottomColor: headerColor }}>
          <div className={styles.headerLeft}>
            <Icon size={18} color={headerColor} />
            <span style={{ color: headerColor }}>{title}</span>
          </div>
          <div className={styles.kanbanBadge}>{colOrders.length}</div>
        </div>
        <div className={styles.kanbanBody}>
          {colOrders.map(order => {
            const elapsedMins = Math.floor((Date.now() - order.timestamp) / 60000);
            
            let btnLabel = '';
            let btnClass = '';
            if (status === 'pending') { btnLabel = 'Prendre en charge'; btnClass = styles.btnOrange; }
            if (status === 'preparing') { btnLabel = 'Commande prête'; btnClass = styles.btnGreen; }
            if (status === 'ready') { btnLabel = 'Marquer servie'; btnClass = styles.btnDark; }

            return (
              <div key={order.id} className={`${styles.orderCard} ${status === 'served' ? styles.orderServed : ''}`} style={{ borderLeftColor: headerColor }}>
                <div className={styles.orderHeader}>
                  <span className={styles.tableNum}>Table {order.tableNumber}</span>
                  <span className={styles.timeElapsed}>il y a {elapsedMins}min</span>
                </div>

                {status !== 'served' && elapsedMins >= 10 && (
                  <div className={styles.timeIndicator} style={{ color: elapsedMins >= 20 ? '#FF4444' : '#F4A261' }}>
                    {elapsedMins >= 20 ? 'URGENT' : 'Attention'}
                  </div>
                )}

                <ul className={styles.orderItems}>
                  {order.items.map((item, idx) => (
                    <li key={idx}>{item.qty}× {item.name}</li>
                  ))}
                </ul>

                {order.note && (
                  <div className={styles.orderNote}>
                    <AlertCircle size={14} color="#F4A261" />
                    <span>{order.note}</span>
                  </div>
                )}

                {status !== 'served' && (
                  <button className={`${styles.actionBtn} ${btnClass}`} onClick={() => handleAction(order.id, status)}>
                    {btnLabel}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.cuisineDashboard}>
      {/* Topbar */}
      <div className={styles.topbar}>
        <div className={styles.topbarLeft}>
          <ChefHat size={20} color="#FF6B00" />
          <span>CUISINE</span>
        </div>
        <div className={styles.topbarCenter}>
          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </div>
        <div className={styles.topbarRight}>
          <div className={styles.activeBadge}>{activeCount}</div>
          <button className={styles.iconBtn} onClick={archiveServed} title="Archiver">
            <RotateCcw size={18} />
          </button>
          <button className={styles.iconBtn} onClick={handleLogout} title="Déconnexion">
            <LogOut size={18} />
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className={styles.kanbanBoard}>
        {renderColumn('pending', 'EN ATTENTE', Clock, '#C9A84C')}
        {renderColumn('preparing', 'EN PRÉPARATION', Flame, '#E8883A')}
        {renderColumn('ready', 'PRÊT', BellRing, '#25D366')}
        {renderColumn('served', 'SERVI', CheckCircle, '#666666')}
      </div>
    </div>
  );
}
