import { NavLink } from 'react-router-dom';
import { Home, UtensilsCrossed, Info, MapPin } from 'lucide-react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/menu', label: 'Menu', icon: UtensilsCrossed },
    { path: '/about', label: 'À propos', icon: Info },
    { path: '/contact', label: 'Contact', icon: MapPin },
  ];

  return (
    <>
      <nav className={styles.desktopNav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>LES 2A</div>
          <div className={styles.centerLinks}>
            {navItems.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path}
                className={({ isActive }) => isActive ? styles.activeLink : styles.link}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <NavLink to="/menu" className={styles.ctaButton}>Commander</NavLink>
        </div>
      </nav>

      <nav className={styles.mobileNav}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => isActive ? `${styles.mobileTab} ${styles.mobileTabActive}` : styles.mobileTab}
            >
              <Icon size={20} strokeWidth={2} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </>
  );
}
