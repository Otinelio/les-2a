import { useEffect } from 'react';
import { MapPin, Star, Heart, Users } from 'lucide-react';
import styles from './About.module.css';
import { getRestaurantData } from '../lib/data';

export default function About() {
  const data = getRestaurantData();

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
    <div className={styles.about}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <h1 className={`${styles.heroTitle} fade-in`}>Notre Histoire</h1>
      </section>

      {/* History Section */}
      <section className={styles.historySection}>
        <div className={`container ${styles.historyContainer}`}>
          <div className={`${styles.historyText} ${styles.reveal}`}>
            <p>
              Nés de la passion pour la cuisine togolaise authentique, les restaurants LES 2A sont devenus un repère incontournable à Lomé. Depuis nos deux adresses — Nukafu face à la LBS et Avepozo —, nous servons chaque jour des plats généreux, savoureux et abordables, préparés avec les vraies épices et le vrai savoir-faire togolais.
            </p>
          </div>
          <div className={`${styles.historyImageWrapper} ${styles.reveal}`} style={{ transitionDelay: '200ms' }}>
            <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" alt="Préparation en cuisine" className={styles.historyImage} />
          </div>
        </div>
      </section>

      {/* Signature Citation */}
      <section className={styles.citationSection}>
        <div className={`container ${styles.citationContainer}`}>
          <div className={`${styles.citation} ${styles.reveal}`}>
            "Le vrai goût, c'est celui qu'on partage."
          </div>
          <div className={`${styles.decorativeLine} ${styles.reveal}`} style={{ transitionDelay: '200ms' }}></div>
        </div>
      </section>

      {/* Locations */}
      <section className={styles.locationsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Nos Adresses</h2>
          <div className={styles.locationsGrid}>
            <div className={`${styles.locationCard} ${styles.reveal}`}>
              <MapPin size={32} color="#FF6B00" className={styles.locationIcon} />
              <h3>Nukafu</h3>
              <p>{data.restaurant.address1}</p>
            </div>
            <div className={`${styles.locationCard} ${styles.reveal}`} style={{ transitionDelay: '200ms' }}>
              <MapPin size={32} color="#2E8B57" className={styles.locationIcon} />
              <h3>Avepozo</h3>
              <p>{data.restaurant.address2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.valuesGrid}>
            <div className={`${styles.valueItem} ${styles.reveal}`}>
              <Star size={32} color="#F4A261" className={styles.valueIcon} />
              <h3>Authenticité</h3>
            </div>
            <div className={`${styles.valueItem} ${styles.reveal}`} style={{ transitionDelay: '150ms' }}>
              <Heart size={32} color="#F4A261" className={styles.valueIcon} />
              <h3>Générosité</h3>
            </div>
            <div className={`${styles.valueItem} ${styles.reveal}`} style={{ transitionDelay: '300ms' }}>
              <Users size={32} color="#F4A261" className={styles.valueIcon} />
              <h3>Convivialité</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
