# 🏛️ PranaVital Architecture & Systematic Design

This document details the architectural principles, state management models, component hierarchy, and design system driving the PranaVital e-commerce platform.

---

## 1. High-Level Architectural Overview

PranaVital is engineered as an ultra-lightweight, zero-build-dependency frontend application with instant loading performance and zero runtime bloat.

```
+--------------------------------------------------------------------------+
|                            User Browser View                             |
|                                                                          |
|  +-------------------+  +--------------------+  +---------------------+  |
|  | Header & Navigation|  | Hero & Value Props |  | Catalog & Filters   |  |
|  +-------------------+  +--------------------+  +---------------------+  |
|  | Diagnostic Quiz   |  | Quick View Modal   |  | Cart & Checkout     |  |
|  +-------------------+  +--------------------+  +---------------------+  |
+--------------------------------------------------------------------------+
                                    |
                                    v
+--------------------------------------------------------------------------+
|                         Application Core (app.js)                        |
|                                                                          |
|   +-----------------------+     +------------------------------------+   |
|   | Global State Manager  | <-> | LocalStorage Persistence           |   |
|   | - cart[]              |     | - 'prana_cart'                     |   |
|   | - wishlist[]          |     | - 'prana_wishlist'                 |   |
|   | - activeCoupon        |     +------------------------------------+   |
|   | - searchQuery         |                                              |
|   | - activeCategory      |                                              |
|   +-----------------------+                                              |
|               |                                                          |
|               v                                                          |
|   +-----------------------+     +------------------------------------+   |
|   | Reactive UI Renderers |     | Business Engines                   |   |
|   | - renderProducts()    |     | - Shipping calculation (>$75 free) |   |
|   | - updateCartUI()      |     | - Coupon validation (ZEN25, etc.)  |   |
|   | - updateWishlistUI()  |     | - Quiz recommendation algorithm    |   |
|   | - showToast()         |     | - Mock order placement processor   |   |
|   +-----------------------+     +------------------------------------+   |
+--------------------------------------------------------------------------+
```

---

## 2. Directory & Asset Hierarchy

```text
pranavital-ecommerce/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   ├── workflows/
│   │   ├── code-quality.yml          # CI validation on PR & push
│   │   └── deploy-pages.yml          # Automated GitHub Pages pipeline
│   └── PULL_REQUEST_TEMPLATE.md
├── assets/
│   ├── css/
│   │   └── styles.css                # Custom theme variables, glassmorphism, animations
│   ├── js/
│   │   ├── data/
│   │   │   └── products.js           # Independent product catalog dataset
│   │   ├── modules/
│   │   │   ├── cart.js               # Cart calculation, shipping meter & coupons
│   │   │   ├── wishlist.js           # Wishlist toggles & persistence
│   │   │   ├── quiz.js               # 3-step wellness diagnostic logic
│   │   │   └── checkout.js           # Address validation & checkout simulation
│   │   └── main.js                   # Application lifecycle controller
│   └── images/
│       └── favicon.svg               # Vector brand mark
├── docs/
│   ├── ARCHITECTURE.md               # Systematic architectural specification
│   ├── USER_FLOWS.md                 # Interactive Mermaid journey diagrams
│   └── COMPONENT_GUIDE.md            # Component breakdown and specs
├── .gitignore
├── CONTRIBUTING.md
├── index.html                        # Semantic storefront HTML5 root
├── LICENSE                           # MIT License
├── package.json                      # Node scripts & repo metadata
├── README.md                         # Project documentation
├── server.ps1                        # Native Windows static file server
├── app.js                            # Standalone all-in-one controller
└── styles.css                        # Root CSS for direct execution
```

---

## 3. State Management & Lifecycle

The platform uses a reactive centralized state model:

```javascript
const state = {
  cart: [],                  // Array of CartItem objects (persisted in localStorage)
  wishlist: [],              // Array of Product objects (persisted in localStorage)
  activeCategory: 'all',     // 'all' | 'yoga-mats' | 'healthcare' | 'supplements' | 'mindfulness'
  searchQuery: '',           // Normalized string filter
  sortBy: 'featured',        // 'featured' | 'price-low' | 'price-high' | 'rating'
  activeCoupon: null,        // 'ZEN25' (25%) | 'PRANA10' (10%) | 'FREESHIP' (0 delivery)
  discountRate: 0,           // Float: 0.0 to 1.0
  freeShippingThreshold: 75, // Currency numeric limit
  shippingCost: 8.99,        // Default standard delivery fee
  currentQuickViewProduct: null,
  quizStep: 1,               // Integer: 1 to 3
  quizAnswers: {}            // Key-value map of user diagnostic choices
};
```

---

## 4. Design System Tokens

| Token Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Forest Sage** | `#1F3D2B` | Primary buttons, active tabs, dark headers, trust badges |
| **Rich Moss** | `#2D5A43` | Hover states, secondary accents |
| **Mint Mist** | `#E9F1EC` | Soft badge backgrounds, selected variant pills |
| **Warm Terracotta** | `#C27D54` | Category eyebrow tags, promo badges, CTA highlights |
| **Linen Cream** | `#FBF9F5` | Primary background color, warm paper aesthetics |
| **Charcoal** | `#1C241F` | High-contrast typography |
| **Muted Earth** | `#64746B` | Secondary copy, metadata, spec descriptions |

