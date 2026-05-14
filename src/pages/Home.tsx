import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, UtensilsCrossed, MapPin, CalendarDays, Bike, MessageCircle } from 'lucide-react';
import styles from './Home.module.css';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // CountUp logic for the Ambiance section
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate);
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll(`.${styles.reveal}`);
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={`${styles.heroLabel} fade-in`}>RESTAURANT À LOMÉ</div>
          <h1 className={`${styles.heroTitle} fade-in`} style={{ animationDelay: '150ms' }}>LES 2A</h1>
          <p className={`${styles.heroSubtitle} fade-in`} style={{ animationDelay: '300ms' }}>
            Le vrai goût, le vrai plaisir
          </p>
          <div className="fade-in" style={{ animationDelay: '450ms' }}>
            <Link to="/menu" className={styles.ctaButton}>VOIR LE MENU</Link>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <ChevronDown size={32} color="rgba(250, 247, 240, 0.6)" />
        </div>
      </section>

      {/* Pourquoi Les 2A */}
      <section className={styles.whySection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Ce qui nous rend différents</h2>
          <div className={styles.cardsGrid}>
            <div className={`${styles.card} ${styles.reveal}`}>
              <UtensilsCrossed size={40} color="#FF6B00" />
              <h3>Cuisine Authentique</h3>
              <p>Plats togolais, africains et européens préparés avec les vraies épices, les vraies recettes.</p>
            </div>
            <div className={`${styles.card} ${styles.reveal}`} style={{ transitionDelay: '150ms' }}>
              <MapPin size={40} color="#2E8B57" />
              <h3>Deux Adresses</h3>
              <p>Nukafu face à LBS et Avepozo près de la pharmacie — toujours près de vous.</p>
            </div>
            <div className={`${styles.card} ${styles.reveal}`} style={{ transitionDelay: '300ms' }}>
              <CalendarDays size={40} color="#F4A261" />
              <h3>Traiteur & Événements</h3>
              <p>Mariages, anniversaires, cérémonies — nous gérons tout avec soin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ambiance */}
      <section className={styles.ambianceSection}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} ${styles.textLight}`}>L'ambiance des 2A</h2>
          <div className={styles.ambianceGrid}>
            <div className={styles.imageCol}>
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" alt="Restaurant convivial" className={styles.ambianceImg} />
              <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" alt="Chef en cuisine" className={styles.ambianceImg} />
            </div>
            <div className={styles.imageColLarge}>
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" alt="Plats généreux" className={styles.ambianceImgLarge} />
            </div>
          </div>
          
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>2</div>
              <div className={styles.statLabel}>Adresses</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>7j/7</div>
              <div className={styles.statLabel}>Ouvert</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>61K+</div>
              <div className={styles.statLabel}>Fans TikTok</div>
            </div>
          </div>
        </div>
      </section>

      {/* Livraison & Traiteur */}
      <section className={styles.deliverySection}>
        <div className="container">
          <div className={styles.deliveryGrid}>
            <div className={styles.deliveryCol}>
              <Bike size={40} color="#FF6B00" className={styles.deliveryIcon} />
              <h3 className={styles.deliveryTitle}>Commandez où vous êtes</h3>
              <p className={styles.deliveryText}>Faites-vous livrer vos plats préférés directement chez vous ou au bureau en un clic.</p>
              <a href="https://wa.me/22800000000" target="_blank" rel="noreferrer" className={styles.whatsappBtn}>
                <MessageCircle size={20} />
                Commander sur WhatsApp
              </a>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.deliveryCol}>
              <CalendarDays size={40} color="#2E8B57" className={styles.deliveryIcon} />
              <h3 className={styles.deliveryTitle}>Événements & Traiteur</h3>
              <p className={styles.deliveryText}>Nous accompagnons vos moments spéciaux avec un service traiteur sur mesure de qualité.</p>
              <Link to="/contact" className={styles.contactBtn}>
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Signature */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          SAUCE GRAINE · FUFU · ATTIÉKÉ · RIZ SAUTÉ · POULET MAYO · SPAGHETTIS · FRITE POULET · LOMÉ TOGO · 
          SAUCE GRAINE · FUFU · ATTIÉKÉ · RIZ SAUTÉ · POULET MAYO · SPAGHETTIS · FRITE POULET · LOMÉ TOGO ·
        </div>
      </div>
    </div>
  );
}
