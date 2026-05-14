import { MapPin, Clock, MessageCircle } from 'lucide-react';
import styles from './Contact.module.css';
import { getRestaurantData } from '../lib/data';

const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Contact() {
  const data = getRestaurantData();

  // Simple open/closed logic based on local time
  const currentHour = new Date().getHours();
  // Store hours: 10:30 to 23:00
  const isOpen = currentHour >= 10 && currentHour < 23;

  return (
    <div className={styles.contactPage}>
      <div className={`container ${styles.contactContainer}`}>
        
        {/* Left Column */}
        <div className={styles.infoCol}>
          <h1 className={styles.title}>Venez nous voir</h1>
          
          <div className={styles.cards}>
            <div className={styles.addressCard}>
              <div className={styles.cardHeader}>
                <MapPin size={24} color="#FF6B00" />
                <h2>Nukafu</h2>
              </div>
              <p className={styles.addressText}>{data.restaurant.address1}</p>
              <div className={styles.hours}>
                <Clock size={16} />
                <span>{data.restaurant.hours}</span>
              </div>
            </div>

            <div className={styles.addressCard}>
              <div className={styles.cardHeader}>
                <MapPin size={24} color="#2E8B57" />
                <h2>Avepozo</h2>
              </div>
              <p className={styles.addressText}>{data.restaurant.address2}</p>
              <div className={styles.hours}>
                <Clock size={16} />
                <span>{data.restaurant.hours}</span>
              </div>
            </div>
          </div>

          <div className={styles.statusBadge}>
            <div className={`${styles.statusDot} ${isOpen ? styles.open : styles.closed}`}></div>
            <span>Actuellement {isOpen ? 'Ouvert' : 'Fermé'}</span>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.actionsCol}>
          <div className={styles.actionsCard}>
            <h2>Nous Contacter</h2>
            
            <div className={styles.buttons}>
              <a href={`https://wa.me/${data.restaurant.whatsapp.replace('+', '')}`} target="_blank" rel="noreferrer" className={styles.whatsappBtn}>
                <MessageCircle size={20} />
                Passer une commande
              </a>
              <a href={`https://wa.me/${data.restaurant.whatsapp.replace('+', '')}?text=Bonjour, je souhaite réserver pour un événement.`} target="_blank" rel="noreferrer" className={styles.whatsappBtnSecondary}>
                <MessageCircle size={20} />
                Réserver pour un événement
              </a>
            </div>

            <div className={styles.socials}>
              <a href={data.restaurant.instagram} target="_blank" rel="noreferrer" className={styles.socialLink}>
                <Instagram size={24} />
                <span>@le_restaurant_les2a</span>
              </a>
              <a href={data.restaurant.tiktok} target="_blank" rel="noreferrer" className={styles.socialLinkTiktok}>
                <span>TikTok</span>
                <span className={styles.tiktokText}>@resto_les_2a · 61K+ followers</span>
              </a>
            </div>
            
            <div className={styles.phoneText}>
              Numéro WhatsApp : <span className={styles.phoneNumber}>{data.restaurant.whatsapp}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
