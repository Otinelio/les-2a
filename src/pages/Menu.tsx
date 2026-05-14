import { useState, useEffect } from 'react';
import { Plus, Minus, Trash2, ShoppingCart, Hash, MessageCircle, Clock, Flame, BellRing, CheckCircle, X } from 'lucide-react';
import styles from './Menu.module.css';
import { getRestaurantData, getOrders, saveOrders } from '../lib/data';
import { useCart } from '../lib/useCart';

// --- TableModal Component ---
function TableModal({ onConfirm }: { onConfirm: (table: string) => void }) {
  const [table, setTable] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (table.trim()) {
      onConfirm(table.trim());
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.tableModal}>
        <div className={styles.modalIconWrapper}>
          <Hash size={40} color="#FF6B00" />
        </div>
        <h2 className={styles.modalTitle}>Votre numéro de table ?</h2>
        <p className={styles.modalSubtitle}>Entrez le numéro de votre table pour accéder au menu</p>
        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <input
            type="text"
            value={table}
            onChange={(e) => setTable(e.target.value)}
            className={styles.tableInput}
            autoFocus
            placeholder="Ex: 4"
          />
          <button type="submit" className={styles.confirmBtn} disabled={!table.trim()}>
            CONFIRMER
          </button>
        </form>
      </div>
    </div>
  );
}

// --- Order Tracking Component ---
function OrderTracking({ onNewOrder }: { onNewOrder: () => void }) {
  const [status, setStatus] = useState<'pending' | 'preparing' | 'ready' | 'served' | null>(null);
  
  useEffect(() => {
    const poll = () => {
      const orderId = localStorage.getItem("legrm_last_order_id");
      if (!orderId) {
        setStatus(null);
        return;
      }
      const order = getOrders().find(o => o.id === orderId);
      if (order) {
        setStatus(order.status);
      }
    };
    poll();
    const interval = setInterval(poll, 3000);
    window.addEventListener("storage", poll);
    return () => { clearInterval(interval); window.removeEventListener("storage", poll); };
  }, []);

  if (!status) return null;

  const handleNewOrder = () => {
    localStorage.removeItem("legrm_last_order_id");
    setStatus(null);
    onNewOrder();
  };

  const renderStatus = () => {
    switch (status) {
      case 'pending':
        return <div className={`${styles.trackBox} ${styles.trackPending}`}><Clock size={20} /><span>En attente de la cuisine...</span></div>;
      case 'preparing':
        return <div className={`${styles.trackBox} ${styles.trackPreparing}`}><Flame size={20} /><span>En préparation...</span></div>;
      case 'ready':
        return <div className={`${styles.trackBox} ${styles.trackReady}`}><BellRing size={20} /><span>Votre commande est prête !</span></div>;
      case 'served':
        return (
          <div className={`${styles.trackBox} ${styles.trackServed}`}>
            <CheckCircle size={20} /><span>Commande servie · Bon appétit !</span>
            <button onClick={handleNewOrder} className={styles.newOrderBtn}>NOUVELLE COMMANDE</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.trackingContainer}>
      {renderStatus()}
    </div>
  );
}

// --- Main Menu Page ---
export default function Menu({ scanMode = false }: { scanMode?: boolean }) {
  const data = getRestaurantData();
  const { cart, addToCart, removeFromCart, deleteFromCart, clearCart, getItemCount, totalItems, totalPrice } = useCart();
  const [activeCategory, setActiveCategory] = useState(data.categories[0]?.id);
  const [cartOpen, setCartOpen] = useState(false);
  const [tableNumber, setTableNumber] = useState<string | null>(scanMode ? localStorage.getItem('tableNumber') : null);
  const [note, setNote] = useState('');

  const handleTableConfirm = (table: string) => {
    localStorage.setItem('tableNumber', table);
    setTableNumber(table);
  };

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const el = document.getElementById(`cat-${id}`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 130; // offset for sticky navs
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCheckout = () => {
    const itemsText = cart.map(i => `${i.qty}x ${i.name} - ${i.price * i.qty} FCFA`).join('\n');
    let message = '';
    
    if (scanMode) {
      // Create local order for tracking
      const order = {
        id: "order_" + Date.now(),
        tableNumber: tableNumber || "?",
        items: cart.map(i => ({ name: i.name, qty: i.qty, unitPrice: i.price, price: i.price * i.qty })),
        note: note || "",
        total: totalPrice,
        status: "pending" as const,
        timestamp: Date.now(),
        statusUpdatedAt: Date.now()
      };
      const orders = getOrders();
      orders.push(order);
      saveOrders(orders);
      localStorage.setItem("legrm_last_order_id", order.id);

      message = `Commande — Table ${tableNumber} :\n${itemsText}\n\nNote: ${note}\n\nTotal : ${totalPrice} FCFA`;
    } else {
      message = `Commande :\n${itemsText}\n\nNote: ${note}\n\nTotal : ${totalPrice} FCFA`;
    }
    
    const phone = data.restaurant.whatsapp.replace('+', '');
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    clearCart();
    setCartOpen(false);
    setNote('');
  };

  if (scanMode && !tableNumber) {
    return <TableModal onConfirm={handleTableConfirm} />;
  }

  return (
    <div className={styles.menuPage}>
      {/* Category Navigation */}
      <div className={styles.categoryNav}>
        <div className={styles.catScroll}>
          {data.categories.map((cat: any) => (
            <button 
              key={cat.id} 
              className={`${styles.catPill} ${activeCategory === cat.id ? styles.catPillActive : ''}`}
              onClick={() => scrollToCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {scanMode && <OrderTracking onNewOrder={() => clearCart()} />}

      {/* Menu Items */}
      <div className={`container ${styles.menuContainer}`}>
        {data.categories.map((cat: any) => {
          const catItems = data.items.filter((i: any) => i.categoryId === cat.id && i.available);
          if (catItems.length === 0) return null;

          return (
            <div key={cat.id} id={`cat-${cat.id}`} className={styles.categorySection}>
              <h2 className={styles.categoryTitle}>{cat.name}</h2>
              <div className={styles.itemsGrid}>
                {catItems.map((item: any) => {
                  const count = getItemCount(item.id);
                  return (
                    <div key={item.id} className={styles.itemCard}>
                      <div className={styles.itemImageWrapper}>
                        <img 
                          src={item.imageUrl || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"} 
                          alt={item.name} 
                          className={styles.itemImage} 
                        />
                      </div>
                      <div className={styles.itemInfo}>
                        <h3 className={styles.itemName}>{item.name}</h3>
                        <p className={styles.itemDesc}>{item.description}</p>
                        <div className={styles.itemBottom}>
                          <span className={styles.itemPrice}>{item.price} FCFA</span>
                          {count === 0 ? (
                            <button className={styles.addBtn} onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, imageUrl: item.imageUrl })}>
                              <Plus size={16} />
                            </button>
                          ) : (
                            <div className={styles.qtyControl}>
                              <button className={styles.qtyBtn} onClick={() => removeFromCart(item.id)}><Minus size={16} /></button>
                              <span className={styles.qtyCount}>{count}</span>
                              <button className={styles.qtyBtn} onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, imageUrl: item.imageUrl })}><Plus size={16} /></button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart Fab */}
      {totalItems > 0 && (
        <button className={styles.cartFab} onClick={() => setCartOpen(true)}>
          <ShoppingCart size={24} />
          <div className={styles.cartBadge}>{totalItems}</div>
        </button>
      )}

      {/* Cart Drawer */}
      {cartOpen && (
        <div className={styles.drawerOverlay} onClick={() => setCartOpen(false)}>
          <div className={styles.drawer} onClick={e => e.stopPropagation()}>
            <div className={styles.drawerHeader}>
              <h2>Votre commande</h2>
              <button className={styles.closeDrawerBtn} onClick={() => setCartOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className={styles.drawerBody}>
              {cart.length === 0 ? (
                <div className={styles.emptyCart}>
                  <ShoppingCart size={48} color="#EDE0D4" />
                  <p>Votre panier est vide</p>
                </div>
              ) : (
                <div className={styles.cartList}>
                  {cart.map(item => (
                    <div key={item.id} className={styles.cartItem}>
                      <img src={item.imageUrl || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=100&q=80"} alt={item.name} className={styles.cartItemImg} />
                      <div className={styles.cartItemInfo}>
                        <div className={styles.cartItemName}>{item.name}</div>
                        <div className={styles.cartItemPrice}>{item.price * item.qty} FCFA</div>
                        <div className={styles.cartItemControls}>
                          <div className={styles.qtyControlSmall}>
                            <button onClick={() => removeFromCart(item.id)}><Minus size={14} /></button>
                            <span>{item.qty}</span>
                            <button onClick={() => addToCart(item)}><Plus size={14} /></button>
                          </div>
                          <button className={styles.trashBtn} onClick={() => deleteFromCart(item.id)}>
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className={styles.noteSection}>
                    <input 
                      type="text" 
                      placeholder="Note pour la cuisine (allergies, sans sauce...)" 
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      className={styles.noteInput}
                    />
                  </div>
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className={styles.drawerFooter}>
                <div className={styles.totalRow}>
                  <span>Total :</span>
                  <span>{totalPrice} FCFA</span>
                </div>
                <button className={styles.checkoutBtn} onClick={handleCheckout}>
                  <MessageCircle size={20} />
                  {scanMode ? `COMMANDER (TABLE ${tableNumber})` : "COMMANDER SUR WHATSAPP"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
