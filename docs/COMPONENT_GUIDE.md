# 🧩 PranaVital Component Guide & Data Schema

This guide provides technical reference documentation for UI components and data structures used across the PranaVital storefront.

---

## 1. Product Data Schema

Every item in the catalog follows this strict schema:

```typescript
interface Product {
  id: number;
  name: string;
  category: "yoga-mats" | "healthcare" | "supplements" | "mindfulness";
  categoryName: string;
  price: number;
  originalPrice?: number;
  rating: number;             // e.g. 4.9
  reviewsCount: number;       // e.g. 384
  badge?: string;             // e.g. "Best Seller", "100% Eco-Friendly"
  badgeType: "bestseller" | "eco" | "doctor" | "discount";
  image: string;              // URL or relative asset path
  description: string;
  thickness: string;          // e.g. "5.0 mm Cushion", "60 Vegan Capsules"
  weight: string;
  material: string;
  colors: Array<{
    name: string;
    hex: string;
  }>;
  features: string[];
}
```

---

## 2. Core UI Components

### 2.1 Navigation & Top Bar
- **Announcement Banner**: Dynamic promo code reminder with status indicator.
- **Glassmorphic Header**: Adapts `backdrop-filter: blur(14px)` on scroll.
- **Mobile Drawer**: Responsive hamburger slide-down navigation.

### 2.2 Product Card (`product-grid`)
- **Hover Micro-interactions**: `card-hover-fx` lifts card by `5px` with a soft drop shadow.
- **Image Zoom**: Nested `.img-zoom-target` scales smoothly by 6% without overflowing boundaries.
- **Variant Indicators**: Interactive color tone swatches with tooltip names.
- **Quick View Action**: Triggers detailed modal overlay without page reload.

### 2.3 Slide-Out Cart Drawer (`#cart-drawer`)
- **Free Shipping Meter**: Reactive gauge recalculates on every quantity increment or item removal.
- **Promo Engine**: Validates inputs against registered promotion codes:
  - `ZEN25`: `state.discountRate = 0.25`
  - `PRANA10`: `state.discountRate = 0.10`
  - `FREESHIP`: Sets shipping fee to `$0.00`
- **State Persistence**: Serializes to `localStorage.getItem('prana_cart')`.

### 2.4 Diagnostic Quiz Modal (`#quiz-modal`)
- **Progress Bar**: Increments from `33%` to `66%` to `100%`.
- **Dynamic Decision Branching**: Correlates user pain points (e.g. sciatica, knee impact, insomnia) to curated product IDs.
- **1-Click Bundle Add**: Dispatches batch items directly into cart state.

### 2.5 Checkout Modal (`#checkout-modal`)
- **Field Validation**: Requires recipient name, email for receipt delivery, and physical street address.
- **Payment Method Selection**: Mock credit card format fields with simulated 1.2-second authorization delay.
- **Confirmation State**: Generates random order ID (`#PV-XXXXXX`) and clears cart storage.

---

## 3. How to Add a New Product

To add a new product to the catalog, simply append an object to the `PRODUCTS` array in `app.js` (or `assets/js/data/products.js`):

```javascript
{
  id: 13,
  name: "PranaCork Yoga Block (Set of 2)",
  category: "mindfulness",
  categoryName: "Mindfulness & Props",
  price: 28,
  originalPrice: 35,
  rating: 4.9,
  reviewsCount: 112,
  badge: "Organic",
  badgeType: "eco",
  image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
  description: "High-density solid oak cork blocks engineered for stability and deepening hip openings.",
  thickness: "9x6x4 Inches",
  weight: "750g each",
  material: "100% Natural Cork",
  colors: [
    { name: "Natural Cork", hex: "#D8BC94" }
  ],
  features: ["Rounded ergonomic edges", "Naturally non-slip surface", "Zero chemical glues"]
}
```
The catalog grid, filter counts, and search indices will automatically re-render immediately.

