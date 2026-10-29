/**
 * ==============================================================================
 * LUMÉ ATELIER — Main JavaScript Application
 * ==============================================================================
 * This script powers both the Home Page (index.html) and Shopping Bag (cart.html).
 * It manages:
 *  1. Product Catalog Data (12 luxury handcrafted pieces)
 *  2. Toast Notifications (user feedback popups)
 *  3. Header & Navigation (sticky bar, mobile drawer, search filter)
 *  4. Product Grid Rendering (filtering by category and search keyword)
 *  5. Interactive Buttons (hero CTA, quick add, 3D card tilt)
 *  6. Shopping Bag Page (quantity steppers, item removal, subtotal calculation)
 * ==============================================================================
 */

/* ==============================================================================
   PART 1: PRODUCT CATALOG DATA (JSON)
   ============================================================================== */
const productsData = [
  {
    id: "LUME-001",
    name: "Aura Solitaire & Cascade Pendant",
    category: "Jewellery",
    brand: "Lumé Atelier",
    price: 5499,
    currency: "INR",
    in_stock: true,
    rating: 4.9,
    image_url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    details: {
      material: "18K Solid Gold",
      finish: "High Polish",
      collection: "Atelier Édition Automne",
      warranty_years: 2
    }
  },
  {
    id: "LUME-002",
    name: "Pearl Drop Earrings",
    category: "Earrings",
    brand: "Lumé Atelier",
    price: 2499,
    currency: "INR",
    in_stock: true,
    rating: 4.9,
    image_url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
    details: {
      material: "18K Gold Vermeil & Freshwater Pearl",
      finish: "Baroque Lustre",
      closure_type: "Push Back",
      warranty_years: 1
    }
  },
  {
    id: "LUME-003",
    name: "Minimal Gold Necklace",
    category: "Jewellery",
    brand: "Lumé Atelier",
    price: 3899,
    currency: "INR",
    in_stock: true,
    rating: 4.8,
    image_url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
    details: {
      material: "18K Solid Gold",
      chain_length_cm: 45,
      clasp: "Spring Ring",
      warranty_years: 2
    }
  },
  {
    id: "LUME-004",
    name: "Classic Everyday Watch",
    category: "Watches",
    brand: "Lumé Atelier",
    price: 6499,
    currency: "INR",
    in_stock: true,
    rating: 4.9,
    image_url: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
    details: {
      case_material: "Rose Gold Plated Stainless Steel",
      strap_material: "Italian Calfskin Leather",
      movement: "Japanese Quartz",
      water_resistance: "30m"
    }
  },
  {
    id: "LUME-005",
    name: "Chic Mini Handbag",
    category: "Handbags",
    brand: "Lumé Atelier",
    price: 4299,
    currency: "INR",
    in_stock: true,
    rating: 4.7,
    image_url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    details: {
      material: "Smooth Tuscan Calf Leather",
      color: "Cognac Tan",
      hardware: "Brushed Brass",
      compartments: 2
    }
  },
  {
    id: "LUME-006",
    name: "Sculpted Chunky Gold Hoops",
    category: "Earrings",
    brand: "Lumé Atelier",
    price: 2899,
    currency: "INR",
    in_stock: true,
    rating: 4.8,
    image_url: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80",
    details: {
      material: "18K Gold Vermeil over Sterling Silver",
      diameter_mm: 24,
      weight_grams: 7.2,
      warranty_years: 1
    }
  },
  {
    id: "LUME-007",
    name: "Stackable Twist Bangle Set",
    category: "Jewellery",
    brand: "Lumé Atelier",
    price: 4799,
    currency: "INR",
    in_stock: true,
    rating: 4.9,
    image_url: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=600&q=80",
    details: {
      material: "18K Solid Gold",
      set_count: 3,
      inner_diameter_cm: 6.2,
      warranty_years: 2
    }
  },
  {
    id: "LUME-008",
    name: "Heritage Leather Strap Chronograph",
    category: "Watches",
    brand: "Lumé Atelier",
    price: 8299,
    currency: "INR",
    in_stock: false,
    rating: 4.8,
    image_url: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80",
    details: {
      case_material: "Brushed Stainless Steel",
      strap_material: "Distressed Brown Leather",
      movement: "Swiss Quartz Chronograph",
      water_resistance: "50m"
    }
  },
  {
    id: "LUME-009",
    name: "Flap Crossbody Saddle Bag",
    category: "Handbags",
    brand: "Lumé Atelier",
    price: 5199,
    currency: "INR",
    in_stock: true,
    rating: 4.6,
    image_url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
    details: {
      material: "Full-Grain Italian Leather",
      color: "Caramel",
      closure: "Magnetic Snap",
      strap_type: "Adjustable Crossbody"
    }
  },
  {
    id: "LUME-010",
    name: "Tortoiseshell Cat-Eye Sunglasses",
    category: "Sunglasses",
    brand: "Lumé Atelier",
    price: 3199,
    currency: "INR",
    in_stock: true,
    rating: 4.7,
    image_url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    details: {
      frame_material: "Handcrafted Bio-Acetate",
      lens_protection: "100% UV400 Protection",
      frame_color: "Amber Havana",
      lens_type: "Tinted Gradient"
    }
  },
  {
    id: "LUME-011",
    name: "Hammered Gold Hair Pin",
    category: "Hair Accessories",
    brand: "Lumé Atelier",
    price: 1499,
    currency: "INR",
    in_stock: true,
    rating: 4.5,
    image_url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    details: {
      material: "Recycled Brass with 18K Gold Dip",
      finish: "Hand-Hammered Texture",
      length_cm: 11.5,
      hair_type: "All Hair Types"
    }
  },
  {
    id: "LUME-012",
    name: "Silk Ribbon Headband with Pearl Accents",
    category: "Hair Accessories",
    brand: "Lumé Atelier",
    price: 1899,
    currency: "INR",
    in_stock: true,
    rating: 4.6,
    image_url: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=600&q=80",
    details: {
      material: "100% Mulberry Silk & Faux Pearls",
      color: "Champagne Cream",
      band_width_cm: 3.0,
      care_instructions: "Spot Clean Only"
    }
  }
];

/* ==============================================================================
   PART 2: GLOBAL STATE & MAIN INITIALIZATION
   ============================================================================== */
// Active category filter state (defaults to 'all')
let currentCategoryFilter = 'all';

// Wait for the HTML DOM content to fully load before attaching JavaScript listeners
document.addEventListener('DOMContentLoaded', () => {
  initToasts();
  initHeaderAndNavigation();
  initProductsSection();
  initHeroAndInteractiveSections();
  initCartPage();
});

/* ==============================================================================
   PART 3: TOAST NOTIFICATION HELPER
   ============================================================================== */
let toastContainerEl = null;

/**
 * Initializes the toast container reference
 */
function initToasts() {
  toastContainerEl = document.getElementById('toastContainer');
}

/**
 * Shows an animated toast notification on the bottom corner of the screen
 * @param {string} message - The text message to display
 * @param {string} icon - An emoji or icon character (default: '✨')
 */
function showToast(message, icon = '✨') {
  if (!toastContainerEl) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${message}</span>
  `;

  toastContainerEl.appendChild(toast);

  // Automatically fade out and remove the toast after 3 seconds
  setTimeout(() => {
    if (toast && toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 3000);
}

/**
 * Increments the cart count badge in the header and plays a bump animation
 * @param {number} amount - Amount to add (default 1)
 */
function incrementCartBadge(amount = 1) {
  const cartBadge = document.getElementById('cartCount');
  if (!cartBadge) return;

  let currentCount = parseInt(cartBadge.textContent || '0', 10);
  currentCount += amount;
  cartBadge.textContent = currentCount;

  // Trigger CSS bump animation
  cartBadge.classList.remove('bump');
  void cartBadge.offsetWidth; // Force DOM reflow to restart animation
  cartBadge.classList.add('bump');
}

/* ==============================================================================
   PART 4: HEADER, MOBILE DRAWER, & SEARCH FILTER
   ============================================================================== */
function initHeaderAndNavigation() {
  const siteHeader = document.getElementById('siteHeader');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const productsSection = document.getElementById('productsSection');

  // 1. Sticky Header Elevation on Scroll
  function handleScroll() {
    if (!siteHeader) return;
    if (window.scrollY > 20) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Mobile Drawer Controls
  function openDrawer() {
    if (!mobileDrawer || !drawerBackdrop) return;
    mobileDrawer.classList.add('active');
    drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    mobileMenuToggle?.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    if (!mobileDrawer || !drawerBackdrop) return;
    mobileDrawer.classList.remove('active');
    drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
    mobileMenuToggle?.setAttribute('aria-expanded', 'false');
  }

  mobileMenuToggle?.addEventListener('click', openDrawer);
  drawerCloseBtn?.addEventListener('click', closeDrawer);
  drawerBackdrop?.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer?.classList.contains('active')) {
      closeDrawer();
    }
  });

  // Mobile Drawer Links Navigation
  drawerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href') || '';
      if (href.startsWith('#')) {
        e.preventDefault();
        const category = href.replace('#', '');
        closeDrawer();
        selectCategoryFilter(category);
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // 3. Search Bar Interaction
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = query.trim().length > 0 ? 'flex' : 'none';
      }
      renderProducts(currentCategoryFilter, query);
    });

    clearSearchBtn?.addEventListener('click', () => {
      searchInput.value = '';
      clearSearchBtn.style.display = 'none';
      searchInput.focus();
      renderProducts(currentCategoryFilter, '');
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query && productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          showToast(`Filtered collection for "${query}"`, '🔍');
        }
      }
    });
  }
}

/* ==============================================================================
   PART 5: PRODUCTS CATALOG RENDERING & FILTERING
   ============================================================================== */
/**
 * Renders the products grid based on category and optional search term
 * @param {string} filterCategory - 'all' or category name (e.g. 'jewellery', 'watches')
 * @param {string} searchQuery - Search query string
 */
function renderProducts(filterCategory = 'all', searchQuery = '') {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return; // Exit if not on the home page

  let filtered = productsData;

  // 1. Filter by Category
  if (filterCategory && filterCategory.toLowerCase() !== 'all') {
    const target = filterCategory.toLowerCase();
    filtered = filtered.filter(item => {
      const itemCat = item.category.toLowerCase();
      if (target === 'jewellery') return itemCat === 'jewellery';
      if (target === 'hair accessories' || target === 'hair accents' || target === 'hair-accessories') {
        return itemCat === 'hair accessories';
      }
      return itemCat === target;
    });
  }

  // 2. Filter by Search Query
  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.details.material && item.details.material.toLowerCase().includes(q))
    );
  }

  // 3. Empty State (No Matches)
  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="no-products-msg">
        <p>No products found matching your selection.</p>
        <button class="reset-filter-btn" id="resetFilterBtn">View All 12 Products</button>
      </div>
    `;
    document.getElementById('resetFilterBtn')?.addEventListener('click', () => {
      selectCategoryFilter('all');
    });
    return;
  }

  // 4. Render 6-in-a-row Product Cards
  productsGrid.innerHTML = filtered.map(product => {
    const formattedPrice = `₹${product.price.toLocaleString('en-IN')}`;
    const materialOrDetail = product.details.material || product.details.finish || 'Lumé Atelier Craft';

    return `
      <article class="product-card" data-category="${product.category}" data-id="${product.id}">
        <div class="product-img-wrap">
          <img 
            src="${product.image_url}" 
            alt="${product.name}" 
            class="product-img" 
            loading="lazy" 
            onerror="this.onerror=null; this.src='hero-model.jpg';"
          />
          ${!product.in_stock ? `<span class="product-badge waitlist">Waitlist</span>` : ''}
        </div>
        <div class="product-body">
          <div class="product-meta-row">
            <span class="product-category">${product.category}</span>
            <span class="product-price">${formattedPrice}</span>
          </div>
          <h3 class="product-name" title="${product.name}">${product.name}</h3>
          <p class="product-material">${materialOrDetail}</p>
          <div class="product-footer">
            <button class="product-explore-btn" data-id="${product.id}" aria-label="Explore ${product.name}">
              <span>Explore</span>
              <svg class="explore-arrow" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button class="product-add-cart-btn" data-id="${product.id}" title="Add to Bag" aria-label="Add to bag">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  attachProductCardEvents();
}

/**
 * Attaches click event listeners to rendered product cards
 */
function attachProductCardEvents() {
  // Add to cart buttons
  document.querySelectorAll('.product-add-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const product = productsData.find(p => p.id === id);
      if (product) {
        incrementCartBadge(1);
        showToast(`Added ${product.name} (₹${product.price.toLocaleString('en-IN')}) to bag`, '🛍️');
      }
    });
  });

  // Explore buttons
  document.querySelectorAll('.product-explore-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const product = productsData.find(p => p.id === id);
      if (product) {
        showToast(`Viewing details for ${product.name}`, '✨');
      }
    });
  });

  // Whole card click
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const product = productsData.find(p => p.id === id);
      if (product) {
        showToast(`Selected ${product.name} — ₹${product.price.toLocaleString('en-IN')}`, '💍');
      }
    });
  });
}

/**
 * Updates filter pills UI and re-renders the products
 * @param {string} category 
 */
function selectCategoryFilter(category) {
  currentCategoryFilter = category;
  const filterPills = document.querySelectorAll('.filter-pill');

  filterPills.forEach(pill => {
    const pillFilter = pill.getAttribute('data-filter') || '';
    const isMatch = pillFilter.toLowerCase() === category.toLowerCase();
    pill.classList.toggle('active', isMatch);
    pill.setAttribute('aria-selected', isMatch ? 'true' : 'false');
  });

  renderProducts(category);
}

/**
 * Sets up category filter pills on the home page
 */
function initProductsSection() {
  const filterPills = document.querySelectorAll('.filter-pill');
  if (filterPills.length === 0) return;

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const filter = pill.getAttribute('data-filter') || 'all';
      selectCategoryFilter(filter);
    });
  });

  // Initial render: show all 12 products
  renderProducts('all');
}

/* ==============================================================================
   PART 6: HERO, CRAFTSMANSHIP & FOOTER INTERACTIONS
   ============================================================================== */
function initHeroAndInteractiveSections() {
  const shopCollectionBtn = document.getElementById('shopCollectionBtn');
  const exploreArrivalsBtn = document.getElementById('exploreArrivalsBtn');
  const featuredLookCard = document.getElementById('featuredLookCard');
  const quickAddBtn = document.getElementById('quickAddBtn');
  const visualCardWrapper = document.querySelector('.visual-card-wrapper');
  const productsSection = document.getElementById('productsSection');

  // Hero Quick Add to Cart
  function addHeroProduct() {
    const featuredProduct = productsData[0]; // Aura Solitaire Pendant
    incrementCartBadge(1);
    showToast(`Added ${featuredProduct.name} to bag`, '🛍️');
  }

  quickAddBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    addHeroProduct();
  });

  featuredLookCard?.addEventListener('click', () => {
    addHeroProduct();
  });

  shopCollectionBtn?.addEventListener('click', () => {
    productsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast('Browsing all 12 Autumn 2025 Atelier pieces', '✨');
  });

  exploreArrivalsBtn?.addEventListener('click', () => {
    selectCategoryFilter('all');
    productsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Desktop 3D Tilt Effect on Hero Card
  if (visualCardWrapper && window.matchMedia('(min-width: 992px)').matches) {
    visualCardWrapper.addEventListener('mousemove', (e) => {
      const rect = visualCardWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -3;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 3;
      visualCardWrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    visualCardWrapper.addEventListener('mouseleave', () => {
      visualCardWrapper.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  }

  // Craftsmanship & Exclusive Drops Section
  document.getElementById('discoverMoreBtn')?.addEventListener('click', () => {
    showToast('Ethically sourced 100% recycled metals & conflict-free stones ✨', '🔨');
  });

  document.getElementById('viewAllReleasesLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    selectCategoryFilter('all');
    productsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast('Showing all 12 releases in the collection', '💍');
  });

  // Highlight Cards Add to Cart
  document.querySelectorAll('.btn-highlight-add').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-name');
      const price = parseInt(btn.getAttribute('data-price') || '0', 10);
      incrementCartBadge(1);
      showToast(`Added ${name} (₹${price.toLocaleString('en-IN')}) to bag`, '🛍️');
    });
  });

  document.querySelectorAll('.btn-highlight-view').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-name');
      showToast(`Viewing bespoke craft details for ${name}`, '✨');
    });
  });

  // Footer Newsletter & Category Links
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterEmail?.value.trim();
    if (email && email.includes('@')) {
      showToast('Thank you for subscribing to Lumé Atelier Privileges ✨', '💌');
      if (newsletterEmail) newsletterEmail.value = '';
    } else {
      showToast('Please enter a valid email address', '⚠️');
    }
  });

  document.querySelectorAll('.footer-cat-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.getAttribute('data-cat');
      if (cat) {
        selectCategoryFilter(cat);
        productsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        showToast(`Browsing ${cat} collection`, '💍');
      }
    });
  });

  document.getElementById('footerChatBtn')?.addEventListener('click', () => {
    showToast('Connecting to Lumé Atelier Concierge... 🕊️', '💬');
  });
}

/* ==============================================================================
   PART 7: SHOPPING BAG (CART PAGE) FUNCTIONALITY
   ============================================================================== */
function initCartPage() {
  const cartItemsList = document.getElementById('cartItemsList');
  if (!cartItemsList) return; // Exit if not currently on cart.html

  // Cart summary DOM elements
  const subtotalAmountEl = document.getElementById('subtotalAmount');
  const finalTotalAmountEl = document.getElementById('finalTotalAmount');
  const checkoutBtnAmountEl = document.getElementById('checkoutBtnAmount');
  const subtotalItemsCountEl = document.getElementById('subtotalItemsCount');
  const summaryItemsBadge = document.getElementById('summaryItemsBadge');
  const cartHeaderCount = document.getElementById('cartHeaderCount');
  const cartCount = document.getElementById('cartCount');
  const emptyCartState = document.getElementById('emptyCartState');
  const giftingToggle = document.getElementById('giftingToggle');
  const proceedCheckoutBtn = document.getElementById('proceedCheckoutBtn');
  const cartChatBtn = document.getElementById('cartChatBtn');

  /**
   * Recalculates total quantity and subtotal across all cart items.
   * Note: Subtotal = Final Total (no promotional coupons applied).
   */
  function recalculateCart() {
    const itemCards = document.querySelectorAll('.cart-item-card:not(.removing)');
    let totalQty = 0;
    let subtotal = 0;

    itemCards.forEach(card => {
      const unitPrice = parseInt(card.getAttribute('data-price') || '0', 10);
      const qtySpan = card.querySelector('.qty-value');
      const qtyVal = parseInt(qtySpan?.textContent || '1', 10);

      totalQty += qtyVal;
      subtotal += unitPrice * qtyVal;
    });

    const formattedAmount = `₹${subtotal.toLocaleString('en-IN')}`;
    const itemsText = `${totalQty} item${totalQty === 1 ? '' : 's'}`;

    // Update Item Count Badges
    if (cartCount) cartCount.textContent = totalQty;
    if (cartHeaderCount) cartHeaderCount.textContent = `(${itemsText})`;
    if (summaryItemsBadge) summaryItemsBadge.textContent = itemsText;
    if (subtotalItemsCountEl) subtotalItemsCountEl.textContent = totalQty;

    // Show empty bag state if no items are left
    if (totalQty === 0) {
      cartItemsList.style.display = 'none';
      if (emptyCartState) emptyCartState.style.display = 'flex';
    } else {
      cartItemsList.style.display = 'flex';
      if (emptyCartState) emptyCartState.style.display = 'none';
    }

    // Update Total Amounts
    if (subtotalAmountEl) subtotalAmountEl.textContent = formattedAmount;
    if (finalTotalAmountEl) finalTotalAmountEl.textContent = formattedAmount;
    if (checkoutBtnAmountEl) checkoutBtnAmountEl.textContent = formattedAmount;
  }

  // Attach event listeners to each cart item card
  document.querySelectorAll('.cart-item-card').forEach(card => {
    const minusBtn = card.querySelector('.qty-minus');
    const plusBtn = card.querySelector('.qty-plus');
    const qtySpan = card.querySelector('.qty-value');
    const unitPrice = parseInt(card.getAttribute('data-price') || '0', 10);
    const priceSpan = card.querySelector('.cart-item-price');
    const removeBtn = card.querySelector('.btn-remove-item');

    // Decrease Quantity (-)
    minusBtn?.addEventListener('click', () => {
      let currentQty = parseInt(qtySpan.textContent, 10);
      if (currentQty > 1) {
        currentQty -= 1;
        qtySpan.textContent = currentQty;
        if (priceSpan) {
          priceSpan.textContent = `₹${(unitPrice * currentQty).toLocaleString('en-IN')}`;
        }
        recalculateCart();
      } else {
        showToast('Minimum quantity is 1. Click Remove to delete item.', 'ℹ️');
      }
    });

    // Increase Quantity (+)
    plusBtn?.addEventListener('click', () => {
      let currentQty = parseInt(qtySpan.textContent, 10);
      currentQty += 1;
      qtySpan.textContent = currentQty;
      if (priceSpan) {
        priceSpan.textContent = `₹${(unitPrice * currentQty).toLocaleString('en-IN')}`;
      }
      recalculateCart();
    });

    // Remove Item
    removeBtn?.addEventListener('click', () => {
      card.classList.add('removing');
      setTimeout(() => {
        card.remove();
        recalculateCart();
        showToast('Piece removed from your shopping bag', '🗑️');
      }, 300);
    });
  });

  // Gifting Experience Toggle
  giftingToggle?.addEventListener('change', () => {
    if (giftingToggle.checked) {
      showToast('Atelier Gifting Experience added with handwritten note 🎁', '✨');
    } else {
      showToast('Gifting box option removed', 'ℹ️');
    }
  });

  // Checkout Button
  proceedCheckoutBtn?.addEventListener('click', () => {
    showToast('Proceeding to 256-Bit SSL Encrypted Checkout... 🔒✨', '💳');
  });

  // Concierge Chat Button
  cartChatBtn?.addEventListener('click', () => {
    showToast('Connecting with Lumé Atelier Concierge... 🕊️', '💬');
  });

  // Initial calculation on page load
  recalculateCart();
}
