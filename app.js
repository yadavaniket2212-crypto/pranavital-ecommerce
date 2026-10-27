/**
 * PranaVital - Yoga Mats & Holistic Healthcare E-Commerce
 * Core Application Logic & State Management
 */

// --- PRODUCT CATALOG ---
const PRODUCTS = [
  {
    id: 1,
    name: "AuraGrip™ Pro Natural Rubber Yoga Mat",
    category: "yoga-mats",
    categoryName: "Yoga Mats",
    price: 88,
    originalPrice: 110,
    rating: 4.9,
    reviewsCount: 384,
    badge: "Best Seller",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80",
    description: "Engineered with laser-etched alignment lines and non-toxic biodegradable tree rubber. Unmatched dry & wet sweat grip for Vinyasa, Yin, and Ashtanga.",
    thickness: "5.0 mm Cushion",
    weight: "2.4 kg",
    material: "100% Natural Tree Rubber & Eco-Polyurethane",
    colors: [
      { name: "Forest Moss", hex: "#2E5339" },
      { name: "Warm Terracotta", hex: "#C27D54" },
      { name: "Obsidian Black", hex: "#222222" }
    ],
    features: ["Zero PVC or toxic phthalates", "Laser-guided alignment grid", "Joint-cushioning dense core"]
  },
  {
    id: 2,
    name: "ZenCork™ Organic Cork & Tree Rubber Mat",
    category: "yoga-mats",
    categoryName: "Yoga Mats",
    price: 76,
    originalPrice: 95,
    rating: 4.8,
    reviewsCount: 247,
    badge: "100% Eco-Friendly",
    badgeType: "eco",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
    description: "Sustainably harvested Mediterranean oak cork surface naturally inhibits bacteria and odors. Grips even better as your hands get warmer and sweat.",
    thickness: "4.5 mm Cushion",
    weight: "2.1 kg",
    material: "Organic Oak Cork + Natural Rubber base",
    colors: [
      { name: "Natural Cork", hex: "#D8BC94" },
      { name: "Mandala Engraved", hex: "#C4A67B" }
    ],
    features: ["Naturally antimicrobial & odor-repelling", "Zero synthetic glues", "Self-cleaning antimicrobial surface"]
  },
  {
    id: 3,
    name: "AcuRelief™ Spikemat & Pillow Acupressure Set",
    category: "healthcare",
    categoryName: "Healthcare & Recovery",
    price: 49,
    originalPrice: 65,
    rating: 4.9,
    reviewsCount: 512,
    badge: "Doctor Approved",
    badgeType: "doctor",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    description: "Featuring 8,000+ ergonomic non-toxic acupoints to stimulate blood flow, release endorphins, and relieve chronic neck, spine, and lower back tension in 15 minutes.",
    thickness: "Ergonomic Contour",
    weight: "1.2 kg",
    material: "100% Organic Linen, Natural Coconut Coir Fiber",
    colors: [
      { name: "Sage Natural", hex: "#4A6B56" },
      { name: "Linen Cream", hex: "#EDE8DC" }
    ],
    features: ["Natural endorphin release within 10-15 mins", "Coconut coir filling (no synthetic foam)", "Ergonomic cervical neck pillow included"]
  },
  {
    id: 4,
    name: "BioSpine™ Orthopedic Lumbar Back Stretcher",
    category: "healthcare",
    categoryName: "Healthcare & Recovery",
    price: 38,
    originalPrice: 50,
    rating: 4.7,
    reviewsCount: 198,
    badge: "Physio Recommended",
    badgeType: "doctor",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    description: "Multi-level spinal traction device equipped with 10 magnetic acupressure therapy nodes and soft silicone spine groove to reverse posture hunching and sciatica.",
    thickness: "4-Level Adjustable Arc",
    weight: "0.8 kg",
    material: "High-grade ABS + Silicone Cushion Ridge",
    colors: [
      { name: "Emerald Green", hex: "#1F3D2B" },
      { name: "Slate Charcoal", hex: "#3A3F3C" }
    ],
    features: ["Decompresses vertebrae discs", "10 embedded therapeutic magnets", "Holds up to 350 lbs / 160 kg"]
  },
  {
    id: 5,
    name: "AshwaCalm™ Organic KSM-66 Ashwagandha + L-Theanine",
    category: "supplements",
    categoryName: "Supplements & Wellness",
    price: 34,
    originalPrice: 42,
    rating: 4.9,
    reviewsCount: 429,
    badge: "Clinical Strength",
    badgeType: "doctor",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    description: "Gold-standard adaptogenic formula to regulate cortisol levels, alleviate anxiety, and enhance deep restorative sleep. 60 Vegan plant capsules.",
    thickness: "60 Vegan Capsules",
    weight: "600mg per serving",
    material: "Certified Organic KSM-66, Suntheanine, Piperine extract",
    colors: [
      { name: "Standard 60ct", hex: "#8EA898" }
    ],
    features: ["Standardized 5% withanolides", "Non-drowsy daytime cortisol balancer", "Zero fillers or artificial preservatives"]
  },
  {
    id: 6,
    name: "FlexiJoint™ Turmeric Curcumin + Boswellia",
    category: "supplements",
    categoryName: "Supplements & Wellness",
    price: 39,
    originalPrice: 48,
    rating: 4.8,
    reviewsCount: 310,
    badge: "Joint Mobility",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1616671285429-07c8e7e1f4bd?auto=format&fit=crop&w=800&q=80",
    description: "High-potency 95% standardized curcuminoids with Indian Frankincense and BioPerine. Targets post-workout stiffness, arthritis, and cartilage support.",
    thickness: "90 Veggie Capsules",
    weight: "1500mg Complex",
    material: "Organic Turmeric Root + Boswellia Serrata + BioPerine",
    colors: [
      { name: "Standard 90ct", hex: "#D97746" }
    ],
    features: ["Clinically shown to ease morning knee stiffness", "Enhanced with patented black pepper extract", "Third-party tested for purity & heavy metals"]
  },
  {
    id: 7,
    name: "CloudAlign™ Ultra-Light Travel Yoga Mat (Foldable)",
    category: "yoga-mats",
    categoryName: "Yoga Mats",
    price: 54,
    originalPrice: 68,
    rating: 4.7,
    reviewsCount: 165,
    badge: "Travel Friendly",
    badgeType: "eco",
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800&q=80",
    description: "Folds down to the size of a laptop and fits right into your carry-on luggage. Moisture-wicking microfiber suede bonded to biodegradable natural tree rubber.",
    thickness: "1.5 mm Foldable",
    weight: "1.1 kg",
    material: "Recycled Microfiber + Biodegradable Rubber",
    colors: [
      { name: "Lavender Mist", hex: "#9E90B0" },
      { name: "Teal Breeze", hex: "#4C8483" }
    ],
    features: ["Machine washable on delicate cycle", "Folds flat into backpack or tote", "Sweat-activated grip coating"]
  },
  {
    id: 8,
    name: "TheraRoller™ 4-Speed Vibrating Deep Tissue Roller",
    category: "healthcare",
    categoryName: "Healthcare & Recovery",
    price: 68,
    originalPrice: 90,
    rating: 4.8,
    reviewsCount: 224,
    badge: "Deep Release",
    badgeType: "doctor",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    description: "Combines therapeutic high-intensity vibration with high-density contour foam to flush lactic acid, release myofascial knots, and accelerate muscle restoration.",
    thickness: "12-Inch Pro Bar",
    weight: "1.4 kg",
    material: "Eco-friendly EPP Foam + Rechargeable Li-Ion",
    colors: [
      { name: "Stealth Onyx", hex: "#222222" },
      { name: "Alpine Sage", hex: "#3B5C47" }
    ],
    features: ["4 therapeutic vibration frequencies (up to 3200 RPM)", "2.5-hour cordless battery life", "Relieves IT-band and tight hamstring spasms"]
  },
  {
    id: 9,
    name: "DeepRest™ Magnesium Glycinate & Tart Cherry Complex",
    category: "supplements",
    categoryName: "Supplements & Wellness",
    price: 32,
    originalPrice: 40,
    rating: 4.9,
    reviewsCount: 560,
    badge: "Top Sleep Aid",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80",
    description: "Chelated magnesium bisglycinate known for gentle stomach absorption, paired with Montmorency tart cherry for natural melatonin and nocturnal leg cramp relief.",
    thickness: "120 Veggie Capsules",
    weight: "400mg Elemental Mag",
    material: "TRAACS® Magnesium Bisglycinate Chelate",
    colors: [
      { name: "Standard 120ct", hex: "#4A6B56" }
    ],
    features: ["Eliminates nocturnal restless legs & cramps", "Deep REM stage sleep enhancement", "Zero grogginess the next morning"]
  },
  {
    id: 10,
    name: "Sattva™ Organic Buckwheat Zafu Meditation Cushion",
    category: "mindfulness",
    categoryName: "Mindfulness & Props",
    price: 48,
    originalPrice: 60,
    rating: 4.8,
    reviewsCount: 182,
    badge: "Artisanal",
    badgeType: "eco",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    description: "Filled with 100% organic, triple-cleaned USA buckwheat hulls that mold perfectly to your pelvis, maintaining a natural spinal curvature for long sitting sessions.",
    thickness: "14x14x6 Inch Loft",
    weight: "2.3 kg",
    material: "GOTS Certified Organic Linen Cover + Buckwheat Hulls",
    colors: [
      { name: "Oatmeal Linen", hex: "#D6CEBF" },
      { name: "Forest Moss", hex: "#2E5339" },
      { name: "Terracotta Earth", hex: "#B8663F" }
    ],
    features: ["Zippered inner liner to adjust pillow firmness", "Removable machine-washable natural linen outer cover", "Carrying handle for easy transport"]
  },
  {
    id: 11,
    name: "ZenFlex™ Orthopedic Knee & Wrist Support Gel Pads",
    category: "healthcare",
    categoryName: "Healthcare & Recovery",
    price: 24,
    originalPrice: 32,
    rating: 4.9,
    reviewsCount: 395,
    badge: "Pain Reliever",
    badgeType: "doctor",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800&q=80",
    description: "Pair of ergonomic concave gel cushions designed to alleviate pain in knees, wrists, and elbows during lunges, cat-cow, and tabletop postures on hard floors.",
    thickness: "20 mm Ergonomic Gel",
    weight: "320g Pair",
    material: "High-density polyurethane gel (non-slip)",
    colors: [
      { name: "Earthy Teal", hex: "#35655E" },
      { name: "Dusty Rose", hex: "#B37D7D" }
    ],
    features: ["Concave center holds knee joints securely", "100% water & sweat resistant", "Doctor recommended for sensitive joints & arthritis"]
  },
  {
    id: 12,
    name: "AuraMist™ Chakra & Botanical Mat Sanitizer (16oz)",
    category: "mindfulness",
    categoryName: "Mindfulness & Props",
    price: 18,
    originalPrice: 24,
    rating: 4.9,
    reviewsCount: 290,
    badge: "Natural Antibacterial",
    badgeType: "eco",
    image: "https://images.unsplash.com/photo-1608248597359-57530616198f?auto=format&fit=crop&w=800&q=80",
    description: "Infused with therapeutic-grade Organic Tea Tree, French Lavender, and Eucalyptus oils. Naturally eliminates 99.9% of bacteria and protects rubber mats from degradation.",
    thickness: "16 fl oz / 473 ml",
    weight: "0.5 kg",
    material: "Plant-derived cleansing distillates & Pure Essential Oils",
    colors: [
      { name: "Lavender Eucalyptus", hex: "#8E7D9A" }
    ],
    features: ["Safe on natural tree rubber and cork surfaces", "No synthetic fragrances or bleach", "Non-sticky, fast-drying aromatherapeutic formula"]
  }
];

// --- APP STATE ---
const state = {
  cart: JSON.parse(localStorage.getItem('prana_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('prana_wishlist')) || [],
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'featured',
  activeCoupon: null,
  discountRate: 0,
  freeShippingThreshold: 75,
  shippingCost: 8.99,
  currentQuickViewProduct: null,
  quizStep: 1,
  quizAnswers: {}
};

// --- DOM ELEMENTS ---
const elements = {
  productGrid: document.getElementById('product-grid'),
  productCount: document.getElementById('product-count'),
  filterTabs: document.querySelectorAll('.filter-tab'),
  searchInput: document.getElementById('search-input'),
  sortSelect: document.getElementById('sort-select'),
  cartCountBadge: document.getElementById('cart-count-badge'),
  cartDrawer: document.getElementById('cart-drawer'),
  cartBackdrop: document.getElementById('cart-backdrop'),
  cartItemsContainer: document.getElementById('cart-items-container'),
  cartSubtotal: document.getElementById('cart-subtotal'),
  cartShipping: document.getElementById('cart-shipping'),
  cartDiscount: document.getElementById('cart-discount'),
  cartTotal: document.getElementById('cart-total'),
  freeShippingProgress: document.getElementById('free-shipping-progress'),
  freeShippingText: document.getElementById('free-shipping-text'),
  couponInput: document.getElementById('coupon-input'),
  couponBtn: document.getElementById('coupon-btn'),
  couponMessage: document.getElementById('coupon-message'),
  checkoutBtn: document.getElementById('checkout-btn'),
  
  // Quick View Modal
  quickViewModal: document.getElementById('quick-view-modal'),
  quickViewContent: document.getElementById('quick-view-content'),
  
  // Quiz Elements
  quizModal: document.getElementById('quiz-modal'),
  openQuizBtn: document.getElementById('open-quiz-btn'),
  closeQuizBtn: document.getElementById('close-quiz-btn'),
  quizForm: document.getElementById('quiz-form'),
  quizStepContainer: document.getElementById('quiz-step-container'),
  quizResultContainer: document.getElementById('quiz-result-container'),
  
  // Checkout Modal
  checkoutModal: document.getElementById('checkout-modal'),
  checkoutForm: document.getElementById('checkout-form'),
  checkoutSummaryList: document.getElementById('checkout-summary-list'),
  checkoutModalTotal: document.getElementById('checkout-modal-total'),
  orderSuccessScreen: document.getElementById('order-success-screen'),

  // Wishlist Drawer/Modal
  wishlistCountBadge: document.getElementById('wishlist-count-badge'),
  wishlistDrawer: document.getElementById('wishlist-drawer'),
  wishlistBackdrop: document.getElementById('wishlist-backdrop'),
  wishlistContainer: document.getElementById('wishlist-container')
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  initEventListeners();
  initLucideIcons();
});

function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// --- PRODUCT RENDERING & FILTERING ---
function getFilteredProducts() {
  let list = [...PRODUCTS];

  // Category filter
  if (state.activeCategory !== 'all') {
    list = list.filter(p => p.category === state.activeCategory);
  }

  // Search filter
  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase().trim();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q)
    );
  }

  // Sorting
  if (state.sortBy === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  } else {
    // default featured / id
    list.sort((a, b) => a.id - b.id);
  }

  return list;
}

function renderProducts() {
  const products = getFilteredProducts();
  
  if (elements.productCount) {
    elements.productCount.textContent = `Showing ${products.length} wellness essentials`;
  }

  if (products.length === 0) {
    elements.productGrid.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-400">
          <i data-lucide="search-x" class="w-10 h-10"></i>
        </div>
        <h3 class="text-xl font-serif font-bold text-stone-800 mb-2">No matching products found</h3>
        <p class="text-stone-500 max-w-md mx-auto mb-6">We couldn't find items matching "${state.searchQuery}". Try searching for 'rubber', 'cork', 'joint', 'ashwagandha' or clear filters.</p>
        <button onclick="resetFilters()" class="px-6 py-2.5 bg-[#1F3D2B] text-white rounded-full text-sm font-medium hover:bg-[#2D5A43] transition">
          View All Products
        </button>
      </div>
    `;
    initLucideIcons();
    return;
  }

  elements.productGrid.innerHTML = products.map(product => {
    const isWishlisted = state.wishlist.some(item => item.id === product.id);
    const badgeHtml = product.badge ? `
      <span class="absolute top-3 left-3 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm z-10 badge-${product.badgeType}">
        ${product.badge}
      </span>
    ` : '';

    const colorSwatches = product.colors.map(c => `
      <span class="w-3.5 h-3.5 rounded-full border border-white shadow-sm" style="background-color: ${c.hex};" title="${c.name}"></span>
    `).join('');

    return `
      <div class="group bg-white rounded-2xl border border-stone-200/80 overflow-hidden card-hover-fx flex flex-col justify-between">
        <div class="relative img-zoom-container bg-[#F7F5F0] aspect-[4/3] flex items-center justify-center">
          ${badgeHtml}
          <button 
            onclick="toggleWishlist(${product.id})" 
            aria-label="Save to Wishlist"
            class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center text-stone-600 hover:text-red-500 hover:bg-white transition z-10 ${isWishlisted ? 'text-red-500' : ''}"
          >
            <i data-lucide="heart" class="w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}"></i>
          </button>
          
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            loading="lazy"
            class="w-full h-full object-cover img-zoom-target"
          />

          <!-- Quick View Hover Button -->
          <div class="absolute inset-x-0 bottom-3 px-4 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <button 
              onclick="openQuickView(${product.id})"
              class="w-full py-2.5 px-4 bg-white/95 hover:bg-white text-stone-800 text-xs font-semibold rounded-xl shadow-md backdrop-blur flex items-center justify-center gap-1.5 transition"
            >
              <i data-lucide="eye" class="w-3.5 h-3.5"></i> Quick View & Specs
            </button>
          </div>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs text-stone-500 mb-1.5">
              <span class="uppercase tracking-wider font-semibold text-[#C27D54]">${product.categoryName}</span>
              <div class="flex items-center gap-1 text-amber-500 font-medium">
                <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i>
                <span class="text-stone-700 text-xs font-semibold">${product.rating}</span>
                <span class="text-stone-400 text-[11px]">(${product.reviewsCount})</span>
              </div>
            </div>

            <h3 class="font-serif text-lg font-bold text-stone-900 group-hover:text-[#1F3D2B] transition leading-snug mb-1">
              <a href="javascript:void(0)" onclick="openQuickView(${product.id})">${product.name}</a>
            </h3>

            <p class="text-stone-500 text-xs line-clamp-2 leading-relaxed mb-3">
              ${product.description}
            </p>

            <div class="flex items-center gap-1.5 mb-4">
              <span class="text-[11px] text-stone-400 font-medium mr-1">Tones:</span>
              ${colorSwatches}
              <span class="text-[11px] text-stone-500 ml-auto bg-stone-100 px-2 py-0.5 rounded-md font-mono">${product.thickness}</span>
            </div>
          </div>

          <div class="pt-3 border-t border-stone-100 flex items-center justify-between mt-auto">
            <div class="flex items-baseline gap-2">
              <span class="text-xl font-bold text-stone-900 font-serif">$${product.price}</span>
              ${product.originalPrice ? `<span class="text-xs text-stone-400 line-through">$${product.originalPrice}</span>` : ''}
            </div>

            <button 
              onclick="addToCart(${product.id}, 1, '${product.colors[0]?.name || 'Standard'}')"
              class="px-4 py-2 bg-[#1F3D2B] hover:bg-[#2D5A43] text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm hover:shadow transition active:scale-95"
            >
              <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  initLucideIcons();
}

function resetFilters() {
  state.activeCategory = 'all';
  state.searchQuery = '';
  state.sortBy = 'featured';

  if (elements.searchInput) elements.searchInput.value = '';
  if (elements.sortSelect) elements.sortSelect.value = 'featured';

  elements.filterTabs.forEach(tab => {
    if (tab.dataset.category === 'all') {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  renderProducts();
}

// --- CART MANAGEMENT ---
function addToCart(productId, quantity = 1, selectedVariant = null) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const variant = selectedVariant || (product.colors && product.colors[0] ? product.colors[0].name : "Standard");
  const cartKey = `${productId}_${variant}`;

  const existingIndex = state.cart.findIndex(item => item.cartKey === cartKey);

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({
      cartKey,
      id: product.id,
      name: product.name,
      categoryName: product.categoryName,
      price: product.price,
      image: product.image,
      variant,
      quantity
    });
  }

  saveCart();
  updateCartUI();
  triggerCartBumpAnimation();
  showToast(`Added "${product.name}" to your wellness bag!`, 'success');
}

function updateCartQuantity(cartKey, newQty) {
  const index = state.cart.findIndex(i => i.cartKey === cartKey);
  if (index === -1) return;

  if (newQty <= 0) {
    const removedItem = state.cart[index];
    state.cart.splice(index, 1);
    showToast(`Removed "${removedItem.name}" from cart`, 'info');
  } else {
    state.cart[index].quantity = newQty;
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(cartKey) {
  const index = state.cart.findIndex(i => i.cartKey === cartKey);
  if (index > -1) {
    const name = state.cart[index].name;
    state.cart.splice(index, 1);
    saveCart();
    updateCartUI();
    showToast(`Removed "${name}" from cart`, 'info');
  }
}

function saveCart() {
  localStorage.setItem('prana_cart', JSON.stringify(state.cart));
}

function calculateCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = subtotal * state.discountRate;
  
  // Free shipping check
  let shipping = 0;
  if (subtotal > 0) {
    if (subtotal >= state.freeShippingThreshold || state.activeCoupon === 'FREESHIP') {
      shipping = 0;
    } else {
      shipping = state.shippingCost;
    }
  }

  const total = Math.max(0, subtotal - discount + shipping);

  return { subtotal, discount, shipping, total };
}

function updateCartUI() {
  const totalItemCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  
  if (elements.cartCountBadge) {
    elements.cartCountBadge.textContent = totalItemCount;
    elements.cartCountBadge.classList.toggle('hidden', totalItemCount === 0);
  }

  const { subtotal, discount, shipping, total } = calculateCartTotals();

  // Free shipping meter
  if (elements.freeShippingProgress && elements.freeShippingText) {
    if (subtotal >= state.freeShippingThreshold) {
      elements.freeShippingProgress.style.width = '100%';
      elements.freeShippingProgress.classList.replace('bg-amber-500', 'bg-emerald-600');
      elements.freeShippingText.innerHTML = `🎉 <strong>Congratulations!</strong> You unlocked FREE Carbon-Neutral Shipping!`;
    } else {
      const remaining = (state.freeShippingThreshold - subtotal).toFixed(2);
      const percent = Math.min(100, (subtotal / state.freeShippingThreshold) * 100);
      elements.freeShippingProgress.style.width = `${percent}%`;
      elements.freeShippingProgress.classList.replace('bg-emerald-600', 'bg-amber-500');
      elements.freeShippingText.innerHTML = `Add <strong>$${remaining}</strong> more for Free Shipping`;
    }
  }

  // Cart summary totals
  if (elements.cartSubtotal) elements.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  if (elements.cartDiscount) elements.cartDiscount.textContent = discount > 0 ? `-$${discount.toFixed(2)}` : '$0.00';
  if (elements.cartShipping) elements.cartShipping.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
  if (elements.cartTotal) elements.cartTotal.textContent = `$${total.toFixed(2)}`;

  // Cart Items Render
  if (!elements.cartItemsContainer) return;

  if (state.cart.length === 0) {
    elements.cartItemsContainer.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-center p-8 text-stone-400">
        <div class="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mb-4 text-stone-400">
          <i data-lucide="shopping-bag" class="w-8 h-8"></i>
        </div>
        <h4 class="text-stone-800 font-serif text-lg font-bold mb-1">Your wellness bag is empty</h4>
        <p class="text-xs text-stone-500 max-w-xs mb-6">Explore our eco-friendly yoga mats, acupressure therapies, and certified holistic supplements.</p>
        <button onclick="toggleCartDrawer(false)" class="px-5 py-2.5 bg-[#1F3D2B] text-white text-xs font-semibold rounded-xl hover:bg-[#2D5A43] transition">
          Start Shopping
        </button>
      </div>
    `;
    if (elements.checkoutBtn) elements.checkoutBtn.disabled = true;
    initLucideIcons();
    return;
  }

  if (elements.checkoutBtn) elements.checkoutBtn.disabled = false;

  elements.cartItemsContainer.innerHTML = state.cart.map(item => `
    <div class="flex gap-4 p-4 bg-white rounded-xl border border-stone-200/80 mb-3 shadow-sm hover:border-stone-300 transition">
      <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg bg-stone-50 shrink-0" />
      <div class="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-start gap-1">
            <h5 class="text-xs font-semibold text-stone-900 truncate">${item.name}</h5>
            <button onclick="removeFromCart('${item.cartKey}')" class="text-stone-400 hover:text-red-500 transition p-0.5" title="Remove">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
          <p class="text-[11px] text-stone-500">Variant: <span class="font-medium text-stone-700">${item.variant}</span></p>
        </div>
        <div class="flex items-center justify-between mt-2">
          <div class="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-stone-50">
            <button onclick="updateCartQuantity('${item.cartKey}', ${item.quantity - 1})" class="px-2 py-1 text-stone-600 hover:bg-stone-200 transition text-xs font-bold">-</button>
            <span class="px-2.5 text-xs font-semibold text-stone-800">${item.quantity}</span>
            <button onclick="updateCartQuantity('${item.cartKey}', ${item.quantity + 1})" class="px-2 py-1 text-stone-600 hover:bg-stone-200 transition text-xs font-bold">+</button>
          </div>
          <span class="text-sm font-bold text-stone-900 font-serif">$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  `).join('');

  initLucideIcons();
}

function triggerCartBumpAnimation() {
  const badge = elements.cartCountBadge;
  if (!badge) return;
  badge.classList.remove('cart-bump');
  void badge.offsetWidth; // trigger reflow
  badge.classList.add('cart-bump');
}

function toggleCartDrawer(open = null) {
  const isOpen = elements.cartDrawer.classList.contains('active');
  const shouldOpen = open !== null ? open : !isOpen;

  if (shouldOpen) {
    elements.cartDrawer.classList.add('active');
    elements.cartBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    elements.cartDrawer.classList.remove('active');
    elements.cartBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// --- COUPON SYSTEM ---
function applyCoupon() {
  const code = (elements.couponInput?.value || '').trim().toUpperCase();
  const messageEl = elements.couponMessage;
  
  if (!code) {
    if (messageEl) {
      messageEl.textContent = "Please enter a promo code.";
      messageEl.className = "text-xs text-red-600 mt-1";
    }
    return;
  }

  if (code === 'ZEN25') {
    state.activeCoupon = 'ZEN25';
    state.discountRate = 0.25;
    if (messageEl) {
      messageEl.textContent = "✨ 25% Wellness discount applied!";
      messageEl.className = "text-xs text-emerald-700 mt-1 font-medium";
    }
    showToast("Promo Code 'ZEN25' applied: 25% OFF!", "success");
  } else if (code === 'FREESHIP') {
    state.activeCoupon = 'FREESHIP';
    state.discountRate = 0;
    if (messageEl) {
      messageEl.textContent = "🚚 Free Shipping code applied!";
      messageEl.className = "text-xs text-emerald-700 mt-1 font-medium";
    }
    showToast("Free Shipping unlocked!", "success");
  } else if (code === 'PRANA10') {
    state.activeCoupon = 'PRANA10';
    state.discountRate = 0.10;
    if (messageEl) {
      messageEl.textContent = "🌿 10% Welcome discount applied!";
      messageEl.className = "text-xs text-emerald-700 mt-1 font-medium";
    }
    showToast("Promo Code 'PRANA10' applied: 10% OFF!", "success");
  } else {
    if (messageEl) {
      messageEl.textContent = "Invalid code. Try 'ZEN25' for 25% off.";
      messageEl.className = "text-xs text-red-600 mt-1";
    }
    showToast("Invalid coupon code", "error");
    return;
  }

  updateCartUI();
}

// --- WISHLIST MANAGEMENT ---
function toggleWishlist(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const index = state.wishlist.findIndex(item => item.id === productId);
  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast(`Removed "${product.name}" from wishlist`, 'info');
  } else {
    state.wishlist.push(product);
    showToast(`Saved "${product.name}" to your wishlist ❤️`, 'success');
  }

  localStorage.setItem('prana_wishlist', JSON.stringify(state.wishlist));
  updateWishlistUI();
  renderProducts(); // Re-render to update heart states
}

function updateWishlistUI() {
  const count = state.wishlist.length;
  if (elements.wishlistCountBadge) {
    elements.wishlistCountBadge.textContent = count;
    elements.wishlistCountBadge.classList.toggle('hidden', count === 0);
  }

  if (!elements.wishlistContainer) return;

  if (count === 0) {
    elements.wishlistContainer.innerHTML = `
      <div class="py-12 text-center text-stone-400">
        <i data-lucide="heart" class="w-12 h-12 mx-auto mb-2 text-stone-300"></i>
        <p class="text-sm font-medium text-stone-600">Your wishlist is empty</p>
        <p class="text-xs text-stone-400 mt-1">Tap the heart on any product to save it for later.</p>
      </div>
    `;
    initLucideIcons();
    return;
  }

  elements.wishlistContainer.innerHTML = state.wishlist.map(item => `
    <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-stone-200 mb-2.5">
      <img src="${item.image}" alt="${item.name}" class="w-14 h-14 object-cover rounded-lg" />
      <div class="flex-1 min-w-0">
        <h6 class="text-xs font-semibold text-stone-900 truncate">${item.name}</h6>
        <p class="text-xs font-bold text-stone-900 font-serif">$${item.price}</p>
      </div>
      <div class="flex items-center gap-1.5">
        <button 
          onclick="addToCart(${item.id}); toggleWishlistDrawer(false);" 
          class="px-2.5 py-1.5 bg-[#1F3D2B] text-white text-[11px] font-semibold rounded-lg hover:bg-[#2D5A43] transition"
        >
          Add to Cart
        </button>
        <button onclick="toggleWishlist(${item.id})" class="text-stone-400 hover:text-red-500 p-1">
          <i data-lucide="x" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </div>
  `).join('');

  initLucideIcons();
}

function toggleWishlistDrawer(open = null) {
  const isOpen = elements.wishlistDrawer.classList.contains('active');
  const shouldOpen = open !== null ? open : !isOpen;

  if (shouldOpen) {
    elements.wishlistDrawer.classList.add('active');
    elements.wishlistBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    elements.wishlistDrawer.classList.remove('active');
    elements.wishlistBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// --- QUICK VIEW MODAL ---
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  state.currentQuickViewProduct = product;
  let activeColor = product.colors && product.colors[0] ? product.colors[0].name : "Standard";
  let activeQty = 1;

  const colorSwatchesHtml = product.colors.map((c, i) => `
    <label class="cursor-pointer">
      <input type="radio" name="quick-view-color" value="${c.name}" ${i === 0 ? 'checked' : ''} class="sr-only peer" onchange="window.tempSelectedColor = '${c.name}'" />
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs peer-checked:border-[#1F3D2B] peer-checked:bg-[#E9F1EC] peer-checked:font-semibold transition">
        <span class="w-3 h-3 rounded-full border border-black/10" style="background-color: ${c.hex}"></span>
        ${c.name}
      </span>
    </label>
  `).join('');

  const featuresHtml = product.features.map(f => `
    <li class="flex items-center gap-2 text-xs text-stone-600">
      <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-600 shrink-0"></i>
      <span>${f}</span>
    </li>
  `).join('');

  window.tempSelectedColor = activeColor;
  window.tempSelectedQty = activeQty;

  elements.quickViewContent.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div class="relative rounded-2xl overflow-hidden bg-stone-100 flex items-center justify-center">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover max-h-[420px]" />
        <span class="absolute top-3 left-3 text-xs uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full badge-${product.badgeType}">
          ${product.badge}
        </span>
      </div>

      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-xs text-stone-500 mb-2">
            <span class="text-[#C27D54] font-bold uppercase tracking-wider">${product.categoryName}</span>
            <div class="flex items-center gap-1 text-amber-500 font-semibold">
              <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i>
              <span>${product.rating}</span>
              <span class="text-stone-400 font-normal">(${product.reviewsCount} verified reviews)</span>
            </div>
          </div>

          <h2 class="text-2xl font-serif font-bold text-stone-900 mb-2">${product.name}</h2>
          
          <div class="flex items-baseline gap-3 mb-4">
            <span class="text-3xl font-serif font-bold text-stone-900">$${product.price}</span>
            ${product.originalPrice ? `<span class="text-sm text-stone-400 line-through">$${product.originalPrice}</span>` : ''}
            <span class="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">In Stock</span>
          </div>

          <p class="text-stone-600 text-sm leading-relaxed mb-5">
            ${product.description}
          </p>

          <!-- Specifications -->
          <div class="grid grid-cols-2 gap-2 text-xs bg-stone-50 p-3 rounded-xl border border-stone-200/60 mb-5">
            <div><span class="text-stone-400">Thickness/Size:</span> <span class="font-medium text-stone-800">${product.thickness}</span></div>
            <div><span class="text-stone-400">Weight:</span> <span class="font-medium text-stone-800">${product.weight}</span></div>
            <div class="col-span-2"><span class="text-stone-400">Material:</span> <span class="font-medium text-stone-800">${product.material}</span></div>
          </div>

          <!-- Color Swatches -->
          <div class="mb-5">
            <label class="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">Select Variant / Color:</label>
            <div class="flex flex-wrap gap-2">
              ${colorSwatchesHtml}
            </div>
          </div>

          <!-- Key Highlights -->
          <div class="mb-6">
            <label class="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">Holistic Quality Guarantees:</label>
            <ul class="space-y-1.5">
              ${featuresHtml}
            </ul>
          </div>
        </div>

        <!-- Add To Cart Controls -->
        <div class="pt-4 border-t border-stone-200 flex items-center gap-3">
          <div class="flex items-center border border-stone-300 rounded-xl bg-stone-50 overflow-hidden">
            <button onclick="decrementQuickViewQty()" class="px-3 py-2 text-stone-600 hover:bg-stone-200 font-bold">-</button>
            <span id="quick-view-qty-display" class="px-4 text-sm font-semibold text-stone-800">1</span>
            <button onclick="incrementQuickViewQty()" class="px-3 py-2 text-stone-600 hover:bg-stone-200 font-bold">+</button>
          </div>

          <button 
            onclick="handleQuickViewAddToCart(${product.id})"
            class="flex-1 py-3 px-6 bg-[#1F3D2B] hover:bg-[#2D5A43] text-white font-semibold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition"
          >
            <i data-lucide="shopping-bag" class="w-4 h-4"></i>
            <span>Add to Cart • $${product.price}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  elements.quickViewModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  initLucideIcons();
}

function decrementQuickViewQty() {
  if (window.tempSelectedQty > 1) {
    window.tempSelectedQty--;
    document.getElementById('quick-view-qty-display').textContent = window.tempSelectedQty;
  }
}

function incrementQuickViewQty() {
  window.tempSelectedQty = (window.tempSelectedQty || 1) + 1;
  document.getElementById('quick-view-qty-display').textContent = window.tempSelectedQty;
}

function handleQuickViewAddToCart(productId) {
  const qty = window.tempSelectedQty || 1;
  const color = window.tempSelectedColor || "Standard";
  addToCart(productId, qty, color);
  closeQuickView();
  toggleCartDrawer(true);
}

function closeQuickView() {
  elements.quickViewModal.classList.remove('active');
  document.body.style.overflow = '';
}

// --- INTERACTIVE WELLNESS & MAT FINDER QUIZ ---
const QUIZ_QUESTIONS = [
  {
    id: 1,
    title: "What is your primary wellness & practice focus?",
    options: [
      { text: "Joint Health, Spine Relief & Deep Recovery", tag: "healthcare" },
      { text: "Daily Flow, Vinyasa & Hot Yoga", tag: "yoga-mats" },
      { text: "Stress Relief, Sleep Quality & Anxiety Reduction", tag: "supplements" },
      { text: "Meditation, Sound Healing & Restorative Yin", tag: "mindfulness" }
    ]
  },
  {
    id: 2,
    title: "Where in your body do you feel the most fatigue or discomfort?",
    options: [
      { text: "Lower back, sciatic nerve and cervical neck", tag: "lumbar" },
      { text: "Sensitive knees and wrists during poses", tag: "joints" },
      { text: "Restless legs, nocturnal muscle tightness & poor sleep", tag: "sleep" },
      { text: "Overall mental stress and physical stiffness", tag: "stress" }
    ]
  },
  {
    id: 3,
    title: "What is your top priority in product materials?",
    options: [
      { text: "100% Biodegradable natural tree rubber & cork", tag: "rubber" },
      { text: "Clinically proven, physician-certified orthopedic support", tag: "clinical" },
      { text: "Third-party lab tested, organic herbal extracts", tag: "herbal" }
    ]
  }
];

function startQuiz() {
  state.quizStep = 1;
  state.quizAnswers = {};
  elements.quizStepContainer.classList.remove('hidden');
  elements.quizResultContainer.classList.add('hidden');
  renderQuizStep();
  elements.quizModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderQuizStep() {
  const q = QUIZ_QUESTIONS[state.quizStep - 1];
  if (!q) return;

  elements.quizStepContainer.innerHTML = `
    <div class="mb-4 flex items-center justify-between text-xs text-stone-500">
      <span>Question ${state.quizStep} of ${QUIZ_QUESTIONS.length}</span>
      <span class="font-semibold text-[#1F3D2B]">${Math.round((state.quizStep / QUIZ_QUESTIONS.length) * 100)}% Completed</span>
    </div>
    
    <div class="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden mb-6">
      <div class="bg-[#1F3D2B] h-full transition-all duration-300" style="width: ${(state.quizStep / QUIZ_QUESTIONS.length) * 100}%"></div>
    </div>

    <h3 class="text-xl font-serif font-bold text-stone-900 mb-6">${q.title}</h3>

    <div class="space-y-3 mb-6">
      ${q.options.map((opt, i) => `
        <button 
          onclick="handleQuizAnswer('${opt.tag}')"
          class="w-full p-4 text-left border border-stone-200 rounded-xl hover:border-[#1F3D2B] hover:bg-[#E9F1EC] transition flex items-center justify-between group"
        >
          <span class="text-sm font-medium text-stone-800 group-hover:text-[#1F3D2B]">${opt.text}</span>
          <i data-lucide="chevron-right" class="w-4 h-4 text-stone-400 group-hover:text-[#1F3D2B]"></i>
        </button>
      `).join('')}
    </div>
  `;

  initLucideIcons();
}

function handleQuizAnswer(tag) {
  state.quizAnswers[`step_${state.quizStep}`] = tag;
  if (state.quizStep < QUIZ_QUESTIONS.length) {
    state.quizStep++;
    renderQuizStep();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  elements.quizStepContainer.classList.add('hidden');
  elements.quizResultContainer.classList.remove('hidden');

  // Match recommended items based on answers
  const recommendedIds = [1, 3, 5]; // Default balanced starter pack
  if (state.quizAnswers.step_1 === 'healthcare' || state.quizAnswers.step_2 === 'lumbar') {
    recommendedIds[0] = 3; // AcuRelief Spikemat
    recommendedIds[1] = 4; // BioSpine Back Stretcher
    recommendedIds[2] = 6; // FlexiJoint
  } else if (state.quizAnswers.step_2 === 'sleep') {
    recommendedIds[0] = 9; // DeepRest Magnesium
    recommendedIds[1] = 5; // AshwaCalm
    recommendedIds[2] = 3; // AcuRelief
  } else if (state.quizAnswers.step_1 === 'yoga-mats') {
    recommendedIds[0] = 1; // AuraGrip Pro Mat
    recommendedIds[1] = 11; // Knee Gel Pads
    recommendedIds[2] = 12; // Mat Sanitizer
  }

  const recProducts = PRODUCTS.filter(p => recommendedIds.includes(p.id));

  elements.quizResultContainer.innerHTML = `
    <div class="text-center mb-6">
      <div class="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 text-emerald-700">
        <i data-lucide="sparkles" class="w-7 h-7"></i>
      </div>
      <h3 class="text-2xl font-serif font-bold text-stone-900 mb-2">Your Tailored Holistic Wellness Regimen</h3>
      <p class="text-xs text-stone-500 max-w-md mx-auto">Based on your focus and physical needs, our clinical wellness team selected this targeted kit for peak restoration.</p>
    </div>

    <div class="space-y-3 mb-6">
      ${recProducts.map(p => `
        <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-stone-200 shadow-sm">
          <img src="${p.image}" alt="${p.name}" class="w-16 h-16 object-cover rounded-lg" />
          <div class="flex-1 min-w-0">
            <span class="text-[10px] uppercase font-bold text-[#C27D54]">${p.categoryName}</span>
            <h5 class="text-xs font-semibold text-stone-900 truncate">${p.name}</h5>
            <span class="text-xs font-serif font-bold text-stone-800">$${p.price}</span>
          </div>
          <button onclick="addToCart(${p.id}); showToast('Added to cart!', 'success');" class="px-3 py-1.5 bg-[#1F3D2B] text-white text-xs font-semibold rounded-lg hover:bg-[#2D5A43] transition">
            Add
          </button>
        </div>
      `).join('')}
    </div>

    <div class="flex gap-3">
      <button onclick="addAllQuizItemsToCart([${recommendedIds.join(',')}])" class="flex-1 py-3 bg-[#C27D54] hover:bg-[#A9653D] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow transition flex items-center justify-center gap-1.5">
        <i data-lucide="package-plus" class="w-4 h-4"></i> Add Entire Regimen to Cart (Save 20%)
      </button>
      <button onclick="closeQuiz()" class="px-4 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-xl transition">
        Done
      </button>
    </div>
  `;

  initLucideIcons();
}

function addAllQuizItemsToCart(ids) {
  ids.forEach(id => {
    addToCart(id, 1);
  });
  closeQuiz();
  toggleCartDrawer(true);
  showToast("Your tailored wellness regimen has been added!", "success");
}

function closeQuiz() {
  elements.quizModal.classList.remove('active');
  document.body.style.overflow = '';
}

// --- CHECKOUT SIMULATION ---
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast("Your cart is empty!", "info");
    return;
  }

  toggleCartDrawer(false);

  const { subtotal, discount, shipping, total } = calculateCartTotals();

  // Populate order summary
  if (elements.checkoutSummaryList) {
    elements.checkoutSummaryList.innerHTML = state.cart.map(item => `
      <div class="flex justify-between items-center text-xs text-stone-700 py-1.5 border-b border-stone-100">
        <div class="truncate pr-2">
          <span class="font-semibold">${item.quantity}x</span> ${item.name} <span class="text-stone-400">(${item.variant})</span>
        </div>
        <span class="font-serif font-bold shrink-0">$${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `).join('');
  }

  if (elements.checkoutModalTotal) {
    elements.checkoutModalTotal.innerHTML = `
      <div class="space-y-1 text-xs pt-2">
        <div class="flex justify-between text-stone-500"><span>Subtotal:</span> <span>$${subtotal.toFixed(2)}</span></div>
        ${discount > 0 ? `<div class="flex justify-between text-emerald-700 font-medium"><span>Discount:</span> <span>-$${discount.toFixed(2)}</span></div>` : ''}
        <div class="flex justify-between text-stone-500"><span>Shipping:</span> <span>${shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span></div>
        <div class="flex justify-between text-sm font-bold text-stone-900 pt-2 border-t font-serif">
          <span>Estimated Total:</span> <span>$${total.toFixed(2)}</span>
        </div>
      </div>
    `;
  }

  elements.checkoutForm.classList.remove('hidden');
  elements.orderSuccessScreen.classList.add('hidden');
  elements.checkoutModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  initLucideIcons();
}

function closeCheckoutModal() {
  elements.checkoutModal.classList.remove('active');
  document.body.style.overflow = '';
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  
  // Fake processing delay
  const submitBtn = document.getElementById('place-order-btn');
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Processing Secure Payment...`;
  initLucideIcons();

  setTimeout(() => {
    const orderNumber = "PV-" + Math.floor(100000 + Math.random() * 900000);
    const orderEmail = document.getElementById('checkout-email')?.value || "your email";

    elements.checkoutForm.classList.add('hidden');
    elements.orderSuccessScreen.classList.remove('hidden');
    elements.orderSuccessScreen.innerHTML = `
      <div class="py-8 text-center">
        <div class="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
          <i data-lucide="check" class="w-8 h-8"></i>
        </div>
        <span class="text-xs font-bold uppercase tracking-widest text-[#C27D54]">Namaste & Thank You!</span>
        <h3 class="text-2xl font-serif font-bold text-stone-900 mt-1 mb-2">Order Confirmed</h3>
        <p class="text-xs text-stone-500 max-w-sm mx-auto mb-6">
          Order <strong>#${orderNumber}</strong> has been received. A receipt with tracking details has been sent to <strong>${orderEmail}</strong>.
        </p>

        <div class="bg-stone-50 border border-stone-200 rounded-2xl p-4 text-left max-w-sm mx-auto mb-6 text-xs text-stone-600 space-y-1.5">
          <div class="flex justify-between"><span class="text-stone-400">Carbon-Neutral Shipping:</span> <span class="font-medium text-stone-800">2 - 4 Business Days</span></div>
          <div class="flex justify-between"><span class="text-stone-400">Guaranteed Return:</span> <span class="font-medium text-stone-800">30-Day Peaceful Mind Trial</span></div>
          <div class="flex justify-between"><span class="text-stone-400">Packaging:</span> <span class="font-medium text-stone-800">100% Recyclable Plant Fiber</span></div>
        </div>

        <button onclick="clearCartAndFinish()" class="px-8 py-3 bg-[#1F3D2B] hover:bg-[#2D5A43] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition">
          Continue Exploring
        </button>
      </div>
    `;

    initLucideIcons();
  }, 1200);
}

function clearCartAndFinish() {
  state.cart = [];
  saveCart();
  updateCartUI();
  closeCheckoutModal();
  showToast("Order placed successfully! We're preparing your mindful gear.", "success");
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-item px-4 py-3 rounded-xl shadow-lg border text-xs font-medium flex items-center gap-2 max-w-sm ${
    type === 'success' ? 'bg-[#1F3D2B] text-white border-emerald-900' :
    type === 'error' ? 'bg-red-900 text-white border-red-800' :
    'bg-stone-900 text-white border-stone-800'
  }`;

  const iconName = type === 'success' ? 'check-circle' : type === 'error' ? 'alert-circle' : 'info';
  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-4 h-4 shrink-0"></i>
    <span class="flex-1">${message}</span>
  `;

  container.appendChild(toast);
  initLucideIcons();

  setTimeout(() => toast.classList.add('show'), 20);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 350);
  }, 3200);
}

// --- EVENT LISTENERS ---
function initEventListeners() {
  // Category filter tabs
  elements.filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      elements.filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeCategory = tab.dataset.category;
      renderProducts();
    });
  });

  // Search input live filter
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Sort dropdown
  if (elements.sortSelect) {
    elements.sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Coupon apply
  if (elements.couponBtn) {
    elements.couponBtn.addEventListener('click', applyCoupon);
  }
  if (elements.couponInput) {
    elements.couponInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') applyCoupon();
    });
  }

  // Cart Drawer open/close
  document.querySelectorAll('[data-action="open-cart"]').forEach(btn => {
    btn.addEventListener('click', () => toggleCartDrawer(true));
  });
  document.querySelectorAll('[data-action="close-cart"]').forEach(btn => {
    btn.addEventListener('click', () => toggleCartDrawer(false));
  });
  if (elements.cartBackdrop) {
    elements.cartBackdrop.addEventListener('click', () => toggleCartDrawer(false));
  }

  // Wishlist Drawer open/close
  document.querySelectorAll('[data-action="open-wishlist"]').forEach(btn => {
    btn.addEventListener('click', () => toggleWishlistDrawer(true));
  });
  document.querySelectorAll('[data-action="close-wishlist"]').forEach(btn => {
    btn.addEventListener('click', () => toggleWishlistDrawer(false));
  });
  if (elements.wishlistBackdrop) {
    elements.wishlistBackdrop.addEventListener('click', () => toggleWishlistDrawer(false));
  }

  // Quick View Modal close
  document.querySelectorAll('[data-action="close-quickview"]').forEach(btn => {
    btn.addEventListener('click', closeQuickView);
  });

  // Quiz Modal open/close
  if (elements.openQuizBtn) {
    elements.openQuizBtn.addEventListener('click', startQuiz);
  }
  if (elements.closeQuizBtn) {
    elements.closeQuizBtn.addEventListener('click', closeQuiz);
  }

  // Checkout modal
  if (elements.checkoutBtn) {
    elements.checkoutBtn.addEventListener('click', openCheckoutModal);
  }
  document.querySelectorAll('[data-action="close-checkout"]').forEach(btn => {
    btn.addEventListener('click', closeCheckoutModal);
  });
  if (elements.checkoutForm) {
    elements.checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  }

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleCartDrawer(false);
      toggleWishlistDrawer(false);
      closeQuickView();
      closeQuiz();
      closeCheckoutModal();
    }
  });

  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      if (emailInput && emailInput.value) {
        showToast("🌿 Welcome to the Prana Circle! 15% discount code sent to " + emailInput.value, "success");
        emailInput.value = '';
      }
    });
  }
}

