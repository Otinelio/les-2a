export const DEFAULT_DATA = {
  restaurant: {
    name: "LES 2A",
    tagline: "Le vrai goût, le vrai plaisir",
    whatsapp: "+228XXXXXXXX", // [À CONFIRMER]
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
};

export function getRestaurantData() {
  try {
    const stored = localStorage.getItem("restaurantData");
    return stored ? JSON.parse(stored) : DEFAULT_DATA;
  } catch {
    return DEFAULT_DATA;
  }
}

export function saveRestaurantData(data: any) {
  localStorage.setItem("restaurantData", JSON.stringify(data));
}

export const ADMIN_PASSWORD = "les2a2025";
export const CUISINE_PASSWORD = "cuisine2025";

// Orders Logic
export const ORDERS_KEY = "legrm_orders";

export interface OrderItem {
  name: string;
  qty: number;
  unitPrice: number;
  price: number;
}

export interface Order {
  id: string;
  tableNumber: string;
  items: OrderItem[];
  note: string;
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'served';
  timestamp: number;
  statusUpdatedAt: number;
}

export function getOrders(): Order[] {
  try {
    return JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveOrders(orders: Order[]) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  // dispatch an event so other tabs can update
  window.dispatchEvent(new Event("storage"));
}

export function updateOrderStatus(orderId: string, newStatus: Order['status']) {
  const orders = getOrders();
  const idx = orders.findIndex(o => o.id === orderId);
  if (idx !== -1) {
    orders[idx].status = newStatus;
    orders[idx].statusUpdatedAt = Date.now();
    saveOrders(orders);
  }
}
