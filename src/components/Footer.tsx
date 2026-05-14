import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';
import { getRestaurantData } from '../lib/data';

const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  const data = getRestaurantData();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Brand */}
          <div className={styles.column}>
            <div className={styles.logo}>{data.restaurant.name}</div>
            <div className={styles.tagline}>{data.restaurant.tagline}</div>
          </div>

          {/* Column 2: Navigation */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Navigation</h3>
            <ul className={styles.navLinks}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Nous suivre</h3>
            <div className={styles.socialLinks}>
              <a href={data.restaurant.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={data.restaurant.tiktok} target="_blank" rel="noreferrer" className={styles.tiktokLink}>
                TikTok
              </a>
              <a 
                href={`https://wa.me/${data.restaurant.whatsapp.replace('+', '')}`} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="WhatsApp"
                className={styles.whatsapp}
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.legal}>
          © 2025 Restaurant {data.restaurant.name} · Lomé, Togo · Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
