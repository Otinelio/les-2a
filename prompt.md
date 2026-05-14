━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROMPT LOVABLE — RESTAURANT LES 2A
Chaleur togolaise, appétit moderne, vrai goût · Lomé, Togo
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


─── VISION GLOBALE ───────────────────────────────────────

Le visiteur arrive et il sent presque la vapeur du fufu qui monte. La page s'ouvre sur une photo plein écran d'un plat togolais — sauce graine brillante, riz sauté doré, portions généreuses — et l'orange vif du logo claque comme une enseigne à Nukafu un vendredi soir. Pas de froideur, pas de minimalisme clinique : ici, tout vibre. Les couleurs sont chaudes comme la terre cuite du marché, les typographies sont rondes et affirmées comme l'accueil du staff, et chaque scroll révèle un peu plus de ce qui fait les 2A — un restaurant vrai, populaire, ancré dans Lomé, avec ses deux adresses, sa communauté TikTok, ses plats qu'on reconnaît au premier regard. L'interface doit donner faim. Immédiatement. Irrémédiablement.


─── ARCHITECTURE GLOBALE — UN SEUL PROJET REACT, UNE SEULE CODEBASE ─────

PAGES DE L'APPLICATION

━ PUBLIC (navigation principale) ━
  /           → Home     : hero plat signature, ambiance, CTA "Voir le menu"
  /about      → À propos : histoire, deux adresses, traiteur & événements
  /contact    → Contact  : adresses Nukafu + Avepozo, horaires, WhatsApp, carte
  /menu       → Menu     : catalogue interactif, panier, commande WhatsApp (sans numéro de table)

━ ACCÈS RESTREINT (aucun lien dans la navigation) ━
  /admin      → Dashboard admin     : protégé par mot de passe — gestion menu & infos
  /menu/scan  → Menu sur place      : identique à /menu + modal numéro de table bloquant + suivi commande
  /cuisine    → Interface brigade   : KDS Kanban — protégé par mot de passe cuisine

NAVIGATION PUBLIQUE :
  Mobile  : bottom navigation bar fixe (Home | Menu | À propos | Contact) — 4 onglets, icônes lucide-react
  Desktop : top navbar horizontale — logo gauche, liens centrés ou droite, CTA "Commander" accent
  → NE PAS créer de lien vers /admin, /menu/scan, /cuisine dans la navigation
  → Ces pages sont accessibles uniquement en tapant l'URL directement


─── DIRECTION ESTHÉTIQUE ─────────────────────────────────

Nom de la direction : "Convivial African Modern — Chaud, Gourmand, Authentique"

CE QUE LE SITE N'EST PAS :
  1. Un site de restaurant gastronomique parisien (froid, noir, épuré, distancié)
  2. Un site fast-food générique américain (rouge/jaune criard, fonts compressées, aucune âme)
  3. Un portfolio créatif minimaliste avec beaucoup d'espace vide et peu de contenu

CE QUE LE SITE EST :
  - Un marché togolais digitalisé : chaleureux, dense, vivant, généreux dans l'espace visuel
  - Un feed TikTok mis en page : énergie courte, visuelle, directe — comme les vidéos virales @resto_les_2a
  - Un lieu de partage familial et festif : les gens commandent ensemble, les tables sont animées

Grille : modulaire et légèrement asymétrique — cartes plats en grille 2 colonnes mobile / 3-4 desktop
Fond global : beige/crème #FAF7F0 avec sections en fond sombre #1F1F1F pour contraster et rythmer
Densité : riche, bien rempli — chaque section communique quelque chose


─── PALETTE ──────────────────────────────────────────────

PRIMARY ACCENT   | Orange Appétit / Safran vif      | #FF6B00 | Uniquement sur CTA, prix, badges, boutons principaux — max 20% de l'interface
SECONDARY ACCENT | Vert Émeraude Basilic             | #2E8B57 | Statut "disponible", bannières fraîcheur, accents catégories plats africains
WARMTH           | Jaune Doré / Curry                | #F4A261 | Highlights, hover state sur cards, éléments de chaleur — jamais dominant
BACKGROUND LIGHT | Beige Terre Cuite                 | #FAF7F0 | Fond principal des sections claires — jamais blanc pur
BACKGROUND DARK  | Anthracite Profond                | #1F1F1F | Sections alternées, footer, fond /cuisine — contraste fort
TEXT             | Noir Doux                         | #1A1A1A | Corps de texte, descriptions, labels — jamais pur #000000

Règle de contraste : fond clair #FAF7F0 + texte #1A1A1A + accent #FF6B00. Fond sombre #1F1F1F + texte #FAF7F0 + accent #FF6B00.


─── TYPOGRAPHIE ──────────────────────────────────────────

FONT 1 — Títulos et Logo : "Playfair Display" (Google Fonts)
Justification : ronde, bold, légèrement serif — évoque la générosité et le caractère sans perdre la modernité. Lisible sur fond sombre comme clair.
  Hero titre          : 56px mobile / 80px desktop · weight 900 · tracking -0.02em · MAJUSCULES
  Section titres      : 36px · weight 700 · tracking 0 · casse normale
  Noms des plats      : 18px · weight 700 · tracking 0
  Citation /about     : 28px · weight 400 · italic · tracking 0.01em

FONT 2 — Corps et UI : "Poppins" (Google Fonts)
Justification : excellente lisibilité, conviviale, ronde — parfaite pour prix, descriptions, boutons.
  Descriptions plats  : 13px · weight 400 · line-height 1.6 · letter-spacing 0 (max 2 lignes tronquées)
  Prix                : 18px · weight 700 · color #FF6B00
  Labels catégories   : 12px · weight 600 · MAJUSCULES · tracking 0.08em
  Boutons CTA         : 14px · weight 600 · MAJUSCULES · tracking 0.05em
  Corps de page       : 15px · weight 400 · line-height 1.7
  Nav liens           : 14px · weight 500 · tracking 0.02em


─── ICÔNES ───────────────────────────────────────────────

RÈGLE ABSOLUE : ZÉRO EMOJI DANS TOUTE L'INTERFACE. Partout, jamais, aucun.
Toute représentation visuelle passe par des icônes vectorielles lucide-react.

Stroke width global : 2 (lisible et énergique — cohérent avec l'ambiance du restaurant)

Mapping obligatoire :
  Nav Home            → Home
  Nav Menu            → UtensilsCrossed
  Nav À propos        → Info
  Nav Contact         → MapPin
  CartFab             → ShoppingCart
  Ajouter au panier   → Plus
  Enlever du panier   → Minus
  Supprimer du panier → Trash2
  WhatsApp CTA        → MessageCircle (couleur fixe #25D366 — jamais overridée)
  Numéro de table     → Hash
  Adresse             → MapPin
  Horaires            → Clock
  Traiteur            → CalendarDays
  Livraison           → Bike
  Téléphone           → Phone
  Instagram           → Instagram
  Admin logout        → LogOut
  Admin sauvegarder   → Save
  Admin modifier      → Pencil
  Admin supprimer     → Trash2
  Admin exporter      → Copy
  Cuisine statut wait → Clock
  Cuisine statut prep → Flame
  Cuisine statut prêt → BellRing
  Cuisine statut servi→ CheckCircle
  Cuisine topbar      → ChefHat


─── ÉCRAN DE CHARGEMENT ──────────────────────────────────

Durée totale : 2.0 à 2.2 secondes maximum.
Fond : #1F1F1F (anthracite profond)
Centre : logo "LES 2A" en Playfair Display 900 · 48px · couleur #FF6B00 — fade in 0 → 1 sur 400ms ease-out
Sous le logo : tagline "Le vrai goût, le vrai plaisir" · Poppins 13px · #FAF7F0 · fade in 300ms delay 400ms
Barre de progression : ligne 2px · #FF6B00 · width 0 → 100% · 1400ms ease-in-out · en bas du viewport
Disparition : fade out global opacity 1 → 0 · 300ms ease-in · delay 1700ms
Aucun spinner générique.


─── NAVIGATION ───────────────────────────────────────────

DESKTOP (≥ 768px) :
  Position : fixed top · hauteur 64px · fond #FAF7F0/90 backdrop-blur(12px) · border-bottom 1px #EDE0D4
  Gauche   : "LES 2A" · Playfair Display 700 · 22px · #1A1A1A
  Centre   : liens Home, Menu, À propos, Contact · Poppins 14px/500 · hover underline #FF6B00 2px · transition 200ms ease
  Droite   : bouton "Commander" · fond #FF6B00 · texte #FAF7F0 · border-radius 8px · padding 10px 20px · hover fond #E05A00

MOBILE (< 768px) :
  Bottom nav fixe · hauteur 60px · fond #FAF7F0 · border-top 1px #EDE0D4 · shadow-up
  4 onglets : Home | Menu | À propos | Contact
  Icône 20px + label 10px/600 en dessous · tab actif couleur #FF6B00 · tab inactif #999
  Transition tab actif : scale 1 → 1.1 · 150ms spring
  Pas de hamburger. Pas de drawer. Navigation directe et rapide.


─── VOLET 1 : SITE VITRINE + COMMANDE ───────────────────

/// PAGE HOME (/)

HERO (100vh) :
  Image Unsplash : "togolese fufu peanut sauce traditional dish close up bowl" ou "west african rice chicken plate appetizing warm"
  Overlay : gradient directionnel 135deg · #1F1F1F 0% → transparent 50% → #1F1F1F 100%
  Contenu centré-gauche mobile, centré desktop :
    - Petit label POPPINS 11px/600 MAJUSCULES tracking 0.12em · #FF6B00 · "RESTAURANT À LOMÉ"
    - Titre "LES 2A" · Playfair Display 900 · 72px mobile / 96px desktop · #FAF7F0
    - Sous-titre "Le vrai goût, le vrai plaisir" · Poppins 18px/400 italic · #F4A261
    - CTA "Voir le menu" · bouton pleine largeur mobile / 200px desktop · fond #FF6B00 · Poppins 14px/600 CAPS · padding 16px · border-radius 10px · hover scale 1.02 · transition 200ms
  Scroll indicator : chevron-down lucide-react · #FAF7F0/60 · bounce 1s infinite · bas du hero

SECTION "POURQUOI LES 2A" (fond #FAF7F0) :
  Titre section : "Ce qui nous rend différents" · Playfair Display 700 · 36px · centré
  3 cards en ligne (flex wrap mobile) :
    Card 1 : UtensilsCrossed 40px #FF6B00 · "Cuisine Authentique" · "Plats togolais, africains et européens préparés avec les vraies épices, les vraies recettes."
    Card 2 : MapPin 40px #2E8B57 · "Deux Adresses" · "Nukafu face à LBS et Avepozo près de la pharmacie — toujours près de vous."
    Card 3 : CalendarDays 40px #F4A261 · "Traiteur & Événements" · "Mariages, anniversaires, cérémonies — nous gérons tout avec soin."
  Entrée scroll reveal : translateY(30px) → 0 · opacity 0 → 1 · stagger 150ms · 500ms ease-out

SECTION AMBIANCE (fond #1F1F1F) :
  Titre : "L'ambiance des 2A" · Playfair Display 700 · 36px · #FAF7F0 · centré
  Grille 3 images CSS : 1×2 + 1 grande (desktop) / scroll horizontal (mobile)
  Queries Unsplash :
    Image 1 : "african restaurant lively convivial table friends lomé togo"
    Image 2 : "west african chef cooking traditional sauce hot kitchen"
    Image 3 : "generous portions rice chicken sauce african plate"
  Traitement CSS : filter saturate(1.15) contrast(1.05) · border-radius 16px · overflow hidden
  Sous la grille : compteur animé en 3 chiffres (scroll-triggered countUp) :
    "2 Adresses" · "7j/7 Ouvert" · "61K+ Fans TikTok"
    Poppins 36px/700 #FF6B00 · labels 13px/500 #FAF7F0/70

SECTION LIVRAISON + TRAITEUR (fond #FAF7F0, 2 colonnes desktop / stack mobile) :
  Col gauche : "Commandez où vous êtes" · Bike 40px #FF6B00 · texte explicatif · bouton WhatsApp "Commander sur WhatsApp" MessageCircle #25D366
  Col droite : "Événements & Traiteur" · CalendarDays 40px #2E8B57 · texte · bouton "Nous contacter" → /contact
  Séparateur 1px #EDE0D4 entre colonnes sur desktop

SIGNATURE HOME — ÉLÉMENT UNIQUE :
  Bandeau défilant horizontal (marquee CSS · 30s linear infinite) sur fond #FF6B00 :
  "SAUCE GRAINE · FUFU · ATTIÉKÉ · RIZ SAUTÉ · POULET MAYO · SPAGHETTIS · FRITE POULET · LOMÉ TOGO ·"
  Poppins 13px/600 MAJUSCULES · #FAF7F0 · espacement entre items : 60px
  Séparé du reste par padding 16px · aucun emoji


/// PAGE ABOUT (/about)

Hero demi-écran (50vh) :
  Image : "african restaurant warm interior lomé togo cheerful atmosphere"
  Overlay gradient sombre · Titre "Notre Histoire" · Playfair Display 900 · 48px · #FAF7F0 · centré

Section Histoire (fond #FAF7F0) :
  Layout : texte à gauche / image à droite (desktop) · texte dessus image dessous (mobile)
  Texte : "Nés de la passion pour la cuisine togolaise authentique, les restaurants LES 2A sont devenus un repère incontournable à Lomé. Depuis nos deux adresses — Nukafu face à la LBS et Avepozo —, nous servons chaque jour des plats généreux, savoureux et abordables, préparés avec les vraies épices et le vrai savoir-faire togolais."
  Image : cuisine warm food preparation — border-radius 24px

CITATION SIGNATURE (fond #1F1F1F) :
  Playfair Display 400 · italic · 32px mobile / 40px desktop · #FAF7F0 · centré · max-width 700px
  Texte : "Le vrai goût, c'est celui qu'on partage."
  Ligne décorative 2px · #FF6B00 · 60px · centré · sous la citation
  Scroll reveal : fade in + translateY(20px) · 600ms ease-out

Section Points de Vente (fond #FAF7F0, 2 cards) :
  Card Nukafu : MapPin #FF6B00 · "Nukafu" · "En face de la Lomé Business School (LBS)" · horaires [À CONFIRMER]
  Card Avepozo : MapPin #2E8B57 · "Avepozo" · "Près de la pharmacie" · horaires [À CONFIRMER]
  Cards : fond blanc · shadow légère · border-radius 16px · hover shadow plus forte · 200ms ease

Section Valeurs (3 colonnes) :
  "Authenticité" · "Générosité" · "Convivialité"
  Icônes lucide-react (Star, Heart, Users) · 32px #F4A261 · scroll reveal stagger


/// PAGE CONTACT (/contact)

Layout 2 colonnes desktop / stack mobile

Colonne gauche — Infos et Carte :
  Titre "Venez nous voir" · Playfair Display 700 · 36px
  Card adresse Nukafu : MapPin #FF6B00 · adresse complète · horaires (Clock) · [À CONFIRMER]
  Card adresse Avepozo : MapPin #2E8B57 · adresse complète · horaires (Clock) · [À CONFIRMER]
  Indicateur ouvert/fermé en temps réel : si horaires confirmés → calcul JS basé sur l'heure locale
  Embed Google Maps si adresses confirmées

Colonne droite — Actions de contact :
  Bouton WhatsApp CTA (pleine largeur) : MessageCircle #25D366 · "Passer une commande" · Poppins 14px/600
  Bouton WhatsApp traiteur : "Réserver pour un événement" · même style
  Instagram : "@le_restaurant_les2a" · Instagram lucide-react · hover #FF6B00
  TikTok : "@resto_les_2a · 61K+ followers" · (pas d'icône TikTok dans lucide — texte seul, typographie accent)
  Numéro WhatsApp restaurant : [À CONFIRMER]


/// PAGE MENU (/menu) — composant partagé MenuPage

(Voir section COMPOSANTS MENU PARTAGÉS ci-dessous)

Message WhatsApp mode classique (/menu) :
```javascript
const message = `Commande :\n${items}\n\nTotal : ${total} FCFA`
window.open(`https://wa.me/[NUMÉRO_À_CONFIRMER]?text=${encodeURIComponent(message)}`, '_blank')
```


─── VOLET 2 : DASHBOARD ADMIN (/admin) ───────────────────

ARCHITECTURE DONNÉES :
Toutes les données (menu, catégories, infos restaurant) sont stockées dans
localStorage["restaurantData"] par l'admin.
Les pages /menu et /menu/scan LISENT depuis localStorage["restaurantData"]
avec fallback sur DEFAULT_DATA hardcodé dans le code.
LIMITATION : localStorage est propre à chaque navigateur — les modifications via /admin
ne se synchronisent PAS automatiquement sur les téléphones des clients.
Usage recommandé : l'admin construit le menu, clique "Exporter la config", transmet le JSON
au développeur qui met à jour DEFAULT_DATA dans le code source.

```javascript
// Constante hardcodée — À CHANGER IMPÉRATIVEMENT AVANT DÉPLOIEMENT
const ADMIN_PASSWORD = "les2a2025"

function handleLogin(input) {
  if (input === ADMIN_PASSWORD) {
    localStorage.setItem("adminAuth", "true")
  } else {
    // Afficher erreur "Mot de passe incorrect"
  }
}
// Guard /admin : si adminAuth !== "true" → écran de login
// Logout : localStorage.removeItem("adminAuth")
```

DEFAULT_DATA hardcodé dans le code :
```javascript
const DEFAULT_DATA = {
  restaurant: {
    name: "LES 2A",
    tagline: "Le vrai goût, le vrai plaisir",
    whatsapp: "[À CONFIRMER]",
    address1: "Nukafu, en face de la Lomé Business School",
    address2: "Avepozo, près de la pharmacie",
    hours: "10h30 – 23h00 · Ouvert tous les jours",
    instagram: "https://www.instagram.com/le_restaurant_les2a",
    tiktok: "https://www.tiktok.com/@resto_les_2a"
  },
  categories: [
    { id: "cat_1", name: "Plats Togolais", order: 0 },
    { id: "cat_2", name: "Spécialités", order: 1 },
    { id: "cat_3", name: "Européens", order: 2 },
    { id: "cat_4", name: "Accompagnements", order: 3 },
    { id: "cat_5", name: "Boissons", order: 4 }
  ],
  items: [
    { id: "item_1", categoryId: "cat_1", name: "Fufu sauce graine", description: "Fufu maison avec sauce graine onctueuse et viande mijotée", price: 2500, imageUrl: "", available: true, order: 0 },
    { id: "item_2", categoryId: "cat_1", name: "Attiéké poulet", description: "Attiéké frais servi avec poulet braisé et sauce pimentée", price: 2000, imageUrl: "", available: true, order: 1 },
    { id: "item_3", categoryId: "cat_1", name: "Riz sauté", description: "Riz sauté aux légumes, œufs et épices maison", price: 1500, imageUrl: "", available: true, order: 2 },
    { id: "item_4", categoryId: "cat_2", name: "Poulet mayo", description: "Poulet grillé nappé de sauce mayo maison, servi avec frites", price: 3000, imageUrl: "", available: true, order: 0 },
    { id: "item_5", categoryId: "cat_2", name: "Frite poulet", description: "Frites croustillantes et poulet frit assaisonné", price: 2000, imageUrl: "", available: true, order: 1 },
    { id: "item_6", categoryId: "cat_3", name: "Spaghettis bolognaise", description: "Spaghettis maison à la sauce bolognaise épicée", price: 2500, imageUrl: "", available: true, order: 0 }
  ]
}

function getRestaurantData() {
  try {
    const stored = localStorage.getItem("restaurantData")
    return stored ? JSON.parse(stored) : DEFAULT_DATA
  } catch { return DEFAULT_DATA }
}

function saveRestaurantData(data) {
  localStorage.setItem("restaurantData", JSON.stringify(data))
}
```

ÉCRAN DE LOGIN /admin : fond clair #F8F9FA · champ password centré · logo "LES 2A" sobrement · bouton "Connexion" fond #1F1F1F · erreur rouge si mot de passe incorrect

DASHBOARD — 4 SECTIONS (tabs ou sidebar) :

1. MENU (section par défaut)
   - Liste de tous les plats groupés par catégorie
   - Toggle disponible/indisponible par plat (vert #2E8B57 / gris)
   - Bouton "Ajouter un plat" → formulaire : nom, description, prix (FCFA), catégorie, image URL
   - Bouton Pencil (lucide-react) par plat → formulaire pré-rempli
   - Bouton Trash2 (lucide-react) par plat avec confirmation modale
   - Aucun style restaurant ici — look outil professionnel neutre

2. CATÉGORIES
   - Liste des catégories avec nombre de plats
   - Ajouter / renommer / supprimer une catégorie
   - Réordonner (boutons ChevronUp/ChevronDown lucide-react)

3. PARAMÈTRES DU RESTAURANT
   - Nom, tagline, numéro WhatsApp, adresse 1, adresse 2, horaires
   - URL Instagram, URL TikTok
   - Bouton Save (lucide-react) "Sauvegarder"

4. EXPORT / CONFIG
   - Bouton Copy (lucide-react) "Copier la config JSON" → presse-papier
   - Note : "Partagez ce JSON avec votre développeur pour mettre à jour les données par défaut"
   - Bouton "Réinitialiser aux données par défaut" avec confirmation
   - Bouton LogOut (lucide-react) en haut du dashboard "Déconnexion"

DESIGN DASHBOARD :
  Fond #F8F9FA · accents bleu-gris #334155 · typographie Poppins
  Mobile-first : le restaurateur gère depuis son téléphone
  Distinct visuellement du site public — look outil neutre et professionnel


─── VOLET 3 : MENU SUR PLACE (/menu/scan) ────────────────

COMPOSANT PARTAGÉ : MenuPage(scanMode: boolean)
  /menu       → <MenuPage scanMode={false} />
  /menu/scan  → <MenuPage scanMode={true}  />

TABLEMODAL (mode scanMode=true) — RÈGLES STRICTES :
  1. Au chargement : lire localStorage["tableNumber"]
  2. Si vide → afficher TableModal bloquant
  3. Le client saisit son numéro de table → valide → stocker localStorage["tableNumber"]
  4. Aucune interaction avec le menu avant validation du numéro de table

TABLEMODAL — DESIGN :
  Non-dismissable : pas de croix, overlay non-cliquable, pas d'Escape
  Saisie TOUJOURS manuelle — NE PAS lire de paramètre ?table= dans l'URL
  Fond : #1F1F1F · backdrop-blur overlay
  Icône Hash 40px #FF6B00 · centré
  Titre : "Votre numéro de table ?" · Playfair Display 700 · 28px · #FAF7F0
  Sous-titre : "Entrez le numéro de votre table pour accéder au menu" · Poppins 14px · #FAF7F0/70
  Input 52px height · border-radius 12px · border 2px #FF6B00 · text-align center · Poppins 24px/700
  Bouton "Confirmer" : pleine largeur · fond #FF6B00 · 52px · Poppins 14px/600 CAPS · border-radius 12px
  Animation entrée : fade in + scale 0.95 → 1 · 300ms ease-out

Message WhatsApp mode scan (/menu/scan) :
```javascript
const tableNumber = localStorage.getItem("tableNumber") || "?"
const message = `Commande — Table ${tableNumber} :\n${items}\n\nTotal : ${total} FCFA`
window.open(`https://wa.me/[NUMÉRO_À_CONFIRMER]?text=${encodeURIComponent(message)}`, '_blank')
```

BLOC SUIVI COMMANDE (/menu/scan uniquement) :
Visible uniquement si localStorage.getItem("legrm_last_order_id") existe.
Affiché sous la CategoryNav, au-dessus des plats.

Polling : toutes les 3 secondes + window.addEventListener("storage")

```javascript
useEffect(() => {
  const orderId = localStorage.getItem("legrm_last_order_id")
  if (!orderId) return
  const poll = () => {
    const order = getOrders().find(o => o.id === orderId)
    if (order) setCurrentOrderStatus(order.status)
  }
  poll()
  const interval = setInterval(poll, 3000)
  window.addEventListener("storage", poll)
  return () => { clearInterval(interval); window.removeEventListener("storage", poll) }
}, [])
```

Rendu du bloc de suivi :
  Fond : card arrondie · border-radius 16px · padding 16px · fond #FAF7F0 · border-left 4px [couleur statut]

  pending    → Clock (lucide-react) · "En attente de la cuisine..." · fond #F5EDD6 · texte #8B7355
  preparing  → Flame (lucide-react) · "En préparation..." · fond #FFF3E0 · texte #E8883A
  ready      → BellRing (lucide-react) · "Votre commande est prête !" · fond #E8F5E9 · texte #2E8B57 · box-shadow 0 0 0 8px #25D36630 pulse 1.5s infinite
  served     → CheckCircle (lucide-react) · "Commande servie · Bon appétit !" · fond #E8F5E9 · texte #2E8B57

  Bouton "Nouvelle commande" (visible uniquement si status === "served") :
  → localStorage.removeItem("legrm_last_order_id") · réinitialise le bloc · fond #FF6B00


─── VOLET 4 : INTERFACE BRIGADE (/cuisine) ───────────────

PROTECTION MOT DE PASSE CUISINE :
```javascript
const CUISINE_PASSWORD = "cuisine2025" // ⚠️ À changer avant mise en ligne
// Guard : si localStorage["cuisineAuth"] !== "true" → login screen
// Login réussi : localStorage.setItem("cuisineAuth", "true")
// Logout : localStorage.removeItem("cuisineAuth")
```
Ne pas ajouter de lien vers /cuisine dans la navigation publique ni dans /admin.

DESIGN LOGIN CUISINE :
  Fond #1F1F1F · ChefHat 56px #FF6B00 centré · "Accès Cuisine" Playfair Display 700 28px #FAF7F0
  Input password 52px · bouton "Entrer en cuisine" pleine largeur #FF6B00

COMMUNICATION /menu/scan → /cuisine (localStorage, no backend) :
```javascript
// Clé partagée
const ORDERS_KEY = "legrm_orders"

function getOrders() {
  try { return JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]") }
  catch { return [] }
}
function saveOrders(orders) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders))
}
function updateOrderStatus(orderId, newStatus) {
  const orders = getOrders()
  const idx = orders.findIndex(o => o.id === orderId)
  if (idx !== -1) {
    orders[idx].status = newStatus
    orders[idx].statusUpdatedAt = Date.now()
    saveOrders(orders)
  }
}
```

Enregistrement commande au clic WhatsApp (mode scanMode=true) :
```javascript
function handleScanOrder(cartItems, note, tableNumber) {
  const order = {
    id: "order_" + Date.now(),
    tableNumber: localStorage.getItem("tableNumber") || "?",
    items: cartItems.map(i => ({ name: i.name, qty: i.qty, unitPrice: i.price, price: i.price * i.qty })),
    note: note || "",
    total: cartItems.reduce((s, i) => s + i.price * i.qty, 0),
    status: "pending",
    timestamp: Date.now(),
    statusUpdatedAt: Date.now()
  }
  const orders = getOrders()
  orders.push(order)
  saveOrders(orders)
  localStorage.setItem("legrm_last_order_id", order.id)
  // → continuer avec l'envoi WhatsApp existant
}
```

NOTIFICATION SONORE — Web Audio API (nouvelle commande) :
```javascript
function playOrderBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain); gain.connect(ctx.destination)
    osc.type = "sine"
    osc.frequency.setValueAtTime(880, ctx.currentTime)
    osc.frequency.setValueAtTime(1100, ctx.currentTime + 0.1)
    gain.gain.setValueAtTime(0.3, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4)
    osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.4)
  } catch {}
}
// Double bip à l'arrivée : playOrderBeep(); setTimeout(playOrderBeep, 250)
```

DÉTECTION NOUVELLES COMMANDES :
```javascript
let knownIds = getOrders().map(o => o.id)
const checkNewOrders = () => {
  const current = getOrders()
  const newOnes = current.filter(o => !knownIds.includes(o.id))
  if (newOnes.length > 0) {
    playOrderBeep(); setTimeout(playOrderBeep, 250)
    newOnes.forEach(o => showToast(`Table ${o.tableNumber} · ${o.items.length} article(s)`))
    knownIds = current.map(o => o.id)
  }
}
// Polling : setInterval(checkNewOrders, 3000) + window.addEventListener("storage", checkNewOrders)
```

TOPBAR CUISINE (56px fixe en haut) :
  Fond #1A1A1A · border-bottom 1px #333
  Gauche  : ChefHat 20px #FF6B00 + "CUISINE" · Poppins 14px/700 CAPS · #FAF7F0
  Centre  : heure temps réel HH:MM · Poppins 24px/700 · #FAF7F0 (mise à jour chaque seconde)
  Droite  : badge nombre commandes actives (pending + preparing) · fond #FF6B00 · Poppins 12px/700
           bouton Archive (RotateCcw lucide-react) · bouton LogOut (LogOut lucide-react) · #FAF7F0/70

TOAST NOTIFICATIONS :
  Position : top-right · stack max 3 · z-index 9999
  Auto-dismiss : 5 secondes
  Contenu : "Nouvelle commande · Table {N} · {nb} article(s)"
  Fond #FF6B00 · texte #FAF7F0 · border-radius 12px · padding 12px 16px
  Entrée : translateX(100%) → 0 · 300ms ease-out

LAYOUT KANBAN — 4 COLONNES :
  Desktop  : 4 colonnes égales · séparateur 1px #333
  Tablet   : 2 colonnes visibles · PRÊT + SERVI en onglets ou scroll horizontal
  Fond général /cuisine : #111111

  EN ATTENTE    | icône Clock     | header #C9A84C | border-bottom 2px
  EN PRÉPARATION| icône Flame     | header #E8883A | border-bottom 2px
  PRÊT          | icône BellRing  | header #25D366 | border-bottom 2px
  SERVI         | icône CheckCircle| header #666  | border-bottom 2px · max 10 dernières commandes

  Badge nombre de cards dans chaque colonne header.

ORDERCARD — CARTE COMMANDE :
  Fond : #1A1A1A · border-radius 12px · border-left 3px solid [couleur statut] · padding 16px · margin-bottom 8px

  En-tête : "Table {N}" · Playfair Display 700 · 24px · #FAF7F0 + heure relative "il y a {X}min" · #FAF7F0/50

  Indicateur durée coloré :
    < 10 min  → neutre #FAF7F0/30
    10–20 min → #F4A261 · "Attention"
    > 20 min  → #FF4444 · "URGENT"

  Liste articles : "{qty}× {nom}" · Poppins 14px/400 · #FAF7F0/80 · sans les prix
  Note cuisine (si non vide) : fond #2A2A2A · border-radius 8px · padding 8px · AlertCircle 14px #F4A261 + texte italic #FAF7F0/70

  Bouton d'action unique (pleine largeur · 44px · border-radius 8px · Poppins 13px/600 CAPS) :
    pending    → "Prendre en charge"  · fond #FF6B00  · texte #FAF7F0
    preparing  → "Commande prête"     · fond #25D366  · texte #FAF7F0
    ready      → "Marquer servie"     · fond #333     · texte #FAF7F0
    served     → aucun bouton         · card opacity 0.5 · grisée

  Animation nouvelle card : entrée translateY(-20px) + opacity 0 → 1 · spring 400ms · flash fond #FF6B0020 → transparent 800ms

ARCHIVAGE :
```javascript
function archiveServed() {
  const cutoff = Date.now() - 2 * 60 * 60 * 1000
  saveOrders(getOrders().filter(
    o => !(o.status === "served" && o.statusUpdatedAt < cutoff)
  ))
}
// Appelé par bouton "Archiver" dans la topbar
```

CLÉS LOCALSTORAGE UTILISÉES (récapitulatif) :
  "restaurantData"        → menu, catégories, infos restaurant
  "adminAuth"             → "true" si admin connecté
  "tableNumber"           → numéro de table saisi par le client
  "cart"                  → panier persisté
  "legrm_orders"          → tableau JSON de toutes les commandes
  "legrm_last_order_id"   → ID de la dernière commande du client (pour le suivi)
  "cuisineAuth"           → "true" si brigade connectée

LIMITE ARCHITECTURE localStorage :
Ce système fonctionne entre onglets du MÊME navigateur sur le MÊME appareil.
Il ne synchronise PAS entre un téléphone client et une tablette en cuisine.
Pour une vraie synchronisation multi-appareil → recommander Supabase Realtime ou Firebase.

Prompt de migration suggéré pour Lovable si besoin :
"Le système fonctionne bien sur le même appareil. Pour synchroniser /cuisine (tablette en cuisine)
avec /menu/scan (téléphone du client), ajoute Supabase Realtime : remplace getOrders() et saveOrders()
par des subscriptions Supabase en conservant exactement la même structure ORDER."


─── COMPOSANTS MENU PARTAGÉS (/menu ET /menu/scan) ───────

CategoryNav (sticky sous la navbar) :
  Scroll horizontal · pills arrondies · fond #EDE0D4 · texte #1A1A1A
  Pill active : fond #FF6B00 · texte #FAF7F0 · scale 1.05 · transition 200ms
  Clic → scroll fluide vers la section · Poppins 12px/600 MAJUSCULES · tracking 0.06em
  Données : getRestaurantData().categories

MenuItemCard :
  Image 4:3 · border-radius 16px · overflow hidden · filter saturate(1.1)
  Nom : Poppins 16px/600 · #1A1A1A
  Description : Poppins 13px/400 · #666 · 2 lignes max · overflow ellipsis
  Prix : Poppins 18px/700 · #FF6B00
  Bouton "+" : 32×32px · rond · fond #FF6B00 · Plus 16px #FAF7F0 (lucide-react) · animation scale 1 → 1.2 → 1 · 300ms spring
  Si dans panier : row [Minus | count | Plus] · Minus/Plus 32×32 · count Poppins 16px/700 centré · transition smooth
  Données : getRestaurantData().items (filtrer par available: true)

CartFab :
  Fixed bottom-right · 56×56px · ShoppingCart 24px (lucide-react) · fond #FF6B00 · shadow-lg
  Positionné 16px au-dessus de la bottom nav mobile
  Badge count : cercle 18px · fond #1F1F1F · Poppins 11px/700 #FAF7F0 · top-right · scale 0 → 1 spring à chaque changement
  Visible uniquement si panier non vide
  Clic → ouvre CartDrawer

CartDrawer :
  Mobile : bottom sheet · translateY(100%) → translateY(0) · 380ms cubic-bezier(0.32,0.72,0,1)
  Desktop : drawer droit 400px · slide-in 350ms ease-out
  Fond #FAF7F0 · border-radius-top 24px
  Titre "Votre commande" · Playfair Display 700 · 24px · croix X (lucide-react) pour fermer
  Liste articles : image 48px + nom/qty + Minus/Plus/Trash2 (lucide-react) + sous-total ligne
  Champ note optionnelle : input Poppins 14px · placeholder "Note pour la cuisine (allergies, sans sauce...)"
  Total : Playfair Display 700 · 24px · #FF6B00 · "Total : {X} FCFA"
  Bouton WhatsApp CTA : MessageCircle #25D366 (lucide-react) · pleine largeur · 52px · Poppins 14px/600 CAPS
    Mode /menu       → "Commander sur WhatsApp"
    Mode /menu/scan  → "Commander (Table {tableNumber})"
  Panier persisté : localStorage["cart"]
  État vide : ShoppingCart 48px #EDE0D4 centré + "Votre panier est vide" Poppins 14px #999 — JAMAIS d'emoji


─── ANIMATIONS SYSTÈME ──────────────────────────────────

Scroll reveals (toutes sections) : translateY(24px) → 0 · opacity 0 → 1 · 500ms ease-out · stagger 120ms entre éléments
Transitions entre pages : fade opacity 0 → 1 · 250ms ease-in-out
Cartes plats hover : translateY(-4px) · shadow renforcée · 200ms ease
Bouton CTA hover : scale 1.02 · brightness 1.08 · 150ms ease
Liens nav hover : underline #FF6B00 grow left→right · 200ms ease
Bottom sheet entrée : translateY(100%) → 0 · 380ms cubic-bezier(0.32,0.72,0,1) · overlay #1F1F1F/60 fade in 200ms
Badge panier : scale 0 → 1.3 → 1 spring au changement de chiffre · 300ms
TableModal entrée : opacity 0 + scale 0.95 → 1 · 300ms ease-out
OrderCard cuisine entrée : translateY(-20px) + opacity 0 → 1 · spring 400ms
Flash nouvelle card cuisine : fond #FF6B00/20 → transparent · 800ms ease-out
Bandeau défilant home : animation marquee CSS · 30s linear infinite · pause on hover
Countup section home : IntersectionObserver → count 0 → valeur finale · 1500ms ease-out
INTERDIT : bounce excessif · élasticité excessive · effets "wow" génériques · transitions > 600ms sans raison


─── IMAGES UNSPLASH ─────────────────────────────────────

Traitement CSS global uniforme : filter saturate(1.12) contrast(1.03) · border-radius 16px
Overlays : gradients directionnels précisés par section (voir pages ci-dessus)

Queries Unsplash par section (6-8 mots, jamais génériques) :
  Hero home         : "togolese fufu sauce graine bowl close up"
  Ambiance 1        : "african restaurant convivial friends table lomé"
  Ambiance 2        : "west african chef cooking sauce kitchen hot"
  Ambiance 3        : "generous african food plate portions warm colors"
  About hero        : "african restaurant warm interior evening lomé togo"
  About histoire    : "restaurant staff african kitchen preparation traditional"
  Contact           : "lomé togo city street warm africa urban"
  Menu placeholder  : "african food plate traditional warm close up"


─── FOOTER ──────────────────────────────────────────────

Fond #1F1F1F · border-top 1px #333 · padding 48px 0

3 colonnes desktop / stack mobile :
  Col 1 : Logo "LES 2A" · Playfair Display 900 · 28px · #FAF7F0 · tagline Poppins 13px/400 italic · #FAF7F0/60
  Col 2 : "Navigation" · liens Home / Menu / À propos / Contact · Poppins 14px/400 · #FAF7F0/70 · hover #FF6B00 · 200ms
  Col 3 : "Nous suivre" · Instagram + TikTok · icônes lucide-react 18px · hover #FF6B00 · WhatsApp contact MessageCircle #25D366

Ligne légale : border-top 1px #333 · Poppins 11px · #FAF7F0/30 · centré
  "© 2025 Restaurant LES 2A · Lomé, Togo · Tous droits réservés"

Animation footer : scroll reveal translateY(20px) → 0 · opacity 0 → 1 · 500ms ease-out
AUCUN EMOJI dans le footer.


─── ARCHITECTURE PAGES FINALE ───────────────────────────

━ PUBLIC ━
  /           → Home     (vitrine + bandeau + 3 points forts + ambiance + livraison/traiteur)
  /about      → À propos (histoire + citation + 2 adresses + valeurs)
  /contact    → Contact  (adresses + horaires + WhatsApp + carte)
  /menu       → Menu     (catalogue + panier + commande WhatsApp classique)

━ ACCÈS RESTREINT — URL DIRECTE UNIQUEMENT ━
  /admin      → Dashboard admin (mot de passe "les2a2025" — À CHANGER)
  /menu/scan  → Menu sur place + suivi commande (modal table bloquant)
  /cuisine    → Interface brigade KDS Kanban (mot de passe "cuisine2025" — À CHANGER)


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMMENT UTILISER CE PROMPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Copier l'intégralité du brief ci-dessus
2. Ouvrir Lovable (lovable.dev) → Nouveau projet
3. Coller dans le chat de l'agent et lancer la génération
4. Si trop long → générer volet par volet dans cet ordre :
     a. Volet 1 + 2 (site vitrine + admin)
     b. Volet 3 (/menu/scan + TableModal + suivi commande)
     c. Volet 4 (/cuisine interface brigade)
5. Tester /admin en tapant l'URL directement dans le navigateur
6. Tester /menu/scan : ouvrir l'URL → le TableModal doit bloquer l'accès
7. Tester /cuisine : ouvrir l'URL → l'écran de login doit apparaître
8. Tester le suivi : commander sur /menu/scan (même navigateur) puis changer statut sur /cuisine
9. Itérer section par section avec des instructions précises

SYNCHRONISATION DES DONNÉES :
→ Admin (/admin) : modifs visibles uniquement sur le même navigateur
→ Commandes (/cuisine ↔ /menu/scan) : fonctionnent sur le même appareil
→ Pour multi-appareils réels : ajouter Supabase Realtime (prompt de migration disponible)

⚠️  INFORMATIONS À CONFIRMER AVANT MISE EN LIGNE :
  - Numéro WhatsApp du restaurant (format international : +228XXXXXXXX)
  - Adresse complète Nukafu (rue, quartier précis)
  - Adresse complète Avepozo (rue, quartier précis)
  - Horaires exacts des deux adresses
  - Changer ADMIN_PASSWORD "les2a2025" dans le code
  - Changer CUISINE_PASSWORD "cuisine2025" dans le code
  - Ajouter les vraies images des plats (URLs ou upload)
  - Vérifier les prix des plats (FCFA)

Pour modifier ce prompt : préciser ce que vous voulez changer et je le mets à jour.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━