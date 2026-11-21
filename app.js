/**
 * VELORA BEAUTY – MAIN APPLICATION JAVASCRIPT
 * Premium Nigerian Makeup & Beauty Brand Experience
 */

document.addEventListener('DOMContentLoaded', () => {
  // Global catalog dataset for search and quick-add
  const CATALOG = [
    {
      id: 'mw-1',
      name: 'Skin Flex Soft Matte Foundation',
      category: 'Makeup · Face',
      price: 80200,
      badge: 'Bestseller',
      details: '50 shades · ★★★★☆',
      img: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=400&q=80',
      swatches: ['#E8C4A6', '#A8704F']
    },
    {
      id: 'mw-2',
      name: 'Bold Stick Lipstick + Lip Liner Duo',
      category: 'Makeup · Lips',
      price: 67700,
      badge: 'Exclusive',
      details: 'Value ₦75,200',
      img: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=400&q=80',
      swatches: ['#D8112B', '#8F0719']
    },
    {
      id: 'mw-3',
      name: 'Silk Drop Hydrating Body Milk',
      category: 'Body · Skincare',
      price: 60200,
      badge: 'New Scent',
      details: 'Sweet Bloom · 6 scents',
      img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80',
      swatches: ['#B48BE0', '#FFFFFF']
    },
    {
      id: 'mw-4',
      name: 'All-Over Body Mist',
      category: 'Fragrance · Body',
      price: 33500,
      badge: 'New Scent',
      details: 'Sweet Bloom · 2 sizes · 5 scents',
      img: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=400&q=80',
      swatches: ['#B48BE0', '#E0A7D6']
    },
    {
      id: 'mw-5',
      name: 'Glass Glaze Lip Gloss',
      category: 'Makeup · Lips',
      price: 38500,
      badge: 'Bestseller',
      details: '20 shades · ★★★★☆',
      img: 'https://images.unsplash.com/photo-1588515724527-074a7a56616c?auto=format&fit=crop&w=400&q=80',
      swatches: ['#D8112B', '#FF5FA6']
    },
    {
      id: 'hg-1',
      name: '12 Days of Velora Advent Calendar',
      category: 'Holiday · Sets',
      price: 190000,
      prevPrice: 284000,
      badge: 'New',
      details: '12 minis · Limited edition',
      img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'hg-2',
      name: 'Whipped Butter Body Cream with Shea',
      category: 'Body · Skincare',
      price: 46000,
      badge: 'New',
      details: 'Guava Glow · 6 scents · ★★★★☆',
      img: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'hg-3',
      name: 'Gloss Squad 4-Piece Lip Set',
      category: 'Holiday · Lips',
      price: 49000,
      prevPrice: 84000,
      badge: 'New',
      details: '★★★★☆',
      img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'hg-4',
      name: 'Petite Body Lotion Travel Trio',
      category: 'Holiday · Body',
      price: 35000,
      prevPrice: 54000,
      badge: 'New',
      details: '★★★★☆',
      img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=400&q=80'
    }
  ];

  // Formatter for Nigerian Naira
  const formatNaira = (amount) => {
    return '₦' + Number(amount).toLocaleString('en-NG', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  /* ==========================================================================
     1. CUSTOM CURSOR WITH DIFFERENCE BLEND
     ========================================================================== */
  const cursorDot = document.getElementById('cursorDot');
  const cursorOutline = document.getElementById('cursorOutline');
  let mouseX = -100, mouseY = -100;
  let outlineX = -100, outlineY = -100;

  if (window.matchMedia('(pointer: fine)').matches && cursorDot && cursorOutline) {
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    const animateCursor = () => {
      outlineX += (mouseX - outlineX) * 0.18;
      outlineY += (mouseY - outlineY) * 0.18;
      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;
      requestAnimationFrame(animateCursor);
    };
    requestAnimationFrame(animateCursor);

    // Hover effect on interactable targets
    const interactiveSelectors = 'a, button, input, .polaroid-card, .swatch, .letter, .account-badge, .carousel-arrow';
    document.querySelectorAll(interactiveSelectors).forEach((elem) => {
      elem.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      elem.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  /* ==========================================================================
     2. CLICK SPARKLES (9 PARTICLES: RED, PINK, BLACK)
     ========================================================================== */
  const sparkleColors = ['#D8112B', '#FF5FA6', '#111111'];

  window.addEventListener('pointerdown', (e) => {
    // Only spawn sparkles if pointer click is within viewport
    const x = e.clientX;
    const y = e.clientY;

    for (let i = 0; i < 9; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle-particle';

      const angle = (Math.PI * 2 * i) / 9 + (Math.random() * 0.4 - 0.2);
      const distance = 28 + Math.random() * 45;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      const rot = Math.floor(Math.random() * 360);
      const color = sparkleColors[i % sparkleColors.length];
      const size = 5 + Math.random() * 6;

      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.setProperty('--dx', `${dx}px`);
      sparkle.style.setProperty('--dy', `${dy}px`);
      sparkle.style.setProperty('--rot', `${rot}deg`);

      // SVG 4-point sparkle star
      sparkle.innerHTML = `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/>
        </svg>
      `;

      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 900);
    }
  });

  /* ==========================================================================
     3. ANNOUNCEMENT BAR 2 (ROTATING PROMOS EVERY 4.5s)
     ========================================================================== */
  const promoSlides = document.querySelectorAll('.promo-slide');
  const promoPrev = document.getElementById('promoPrev');
  const promoNext = document.getElementById('promoNext');
  const promoBar = document.getElementById('promoBar');
  let currentPromoIndex = 0;
  let promoTimer = null;

  const showPromoSlide = (index) => {
    promoSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    currentPromoIndex = index;
  };

  const nextPromo = () => {
    const nextIdx = (currentPromoIndex + 1) % promoSlides.length;
    showPromoSlide(nextIdx);
  };

  const prevPromo = () => {
    const prevIdx = (currentPromoIndex - 1 + promoSlides.length) % promoSlides.length;
    showPromoSlide(prevIdx);
  };

  const startPromoAutoplay = () => {
    if (!promoTimer) {
      promoTimer = setInterval(nextPromo, 4500);
    }
  };

  const stopPromoAutoplay = () => {
    if (promoTimer) {
      clearInterval(promoTimer);
      promoTimer = null;
    }
  };

  if (promoNext && promoPrev) {
    promoNext.addEventListener('click', () => {
      nextPromo();
      stopPromoAutoplay();
      startPromoAutoplay();
    });

    promoPrev.addEventListener('click', () => {
      prevPromo();
      stopPromoAutoplay();
      startPromoAutoplay();
    });
  }

  if (promoBar) {
    promoBar.addEventListener('mouseenter', stopPromoAutoplay);
    promoBar.addEventListener('mouseleave', startPromoAutoplay);
  }

  startPromoAutoplay();

  /* ==========================================================================
     4. MOBILE DRAWER NAVIGATION
     ========================================================================== */
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMobileDrawer = (open) => {
    if (open) {
      mobileDrawer.classList.add('open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      mobileMenuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      mobileDrawer.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  };

  if (mobileMenuToggle && mobileDrawerClose) {
    mobileMenuToggle.addEventListener('click', () => toggleMobileDrawer(true));
    mobileDrawerClose.addEventListener('click', () => toggleMobileDrawer(false));

    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => toggleMobileDrawer(false));
    });
  }

  /* ==========================================================================
     5. TOAST NOTIFICATION SYSTEM
     ========================================================================== */
  const toastContainer = document.getElementById('toastContainer');
  window.showToast = (message) => {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  };

  /* ==========================================================================
     6. SHOPPING BAG STATE & ACTIONS
     ========================================================================== */
  let cart = [];
  const bagCount = document.getElementById('bagCount');
  const bagIcon = document.getElementById('bagIcon');
  const cartTrigger = document.getElementById('cartTrigger');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartClose = document.getElementById('cartClose');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartModalCount = document.getElementById('cartModalCount');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const checkoutTotal = document.getElementById('checkoutTotal');
  const shippingTrackerMsg = document.getElementById('shippingTrackerMsg');
  const shippingBarFill = document.getElementById('shippingBarFill');
  const checkoutBtn = document.getElementById('checkoutBtn');

  const FREE_SHIPPING_THRESHOLD = 100000; // ₦100,000 threshold

  const updateCartUI = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    // Update badges
    if (bagCount) bagCount.textContent = totalItems;
    if (cartModalCount) cartModalCount.textContent = totalItems;
    if (cartSubtotal) cartSubtotal.textContent = formatNaira(subtotal);
    if (checkoutTotal) checkoutTotal.textContent = formatNaira(subtotal);

    // Free shipping tracker
    if (shippingTrackerMsg && shippingBarFill) {
      if (subtotal >= FREE_SHIPPING_THRESHOLD) {
        shippingTrackerMsg.innerHTML = `🎉 <strong>CONGRATULATIONS!</strong> You qualified for <strong>FREE shipping in Nigeria</strong>!`;
        shippingBarFill.style.width = '100%';
        shippingBarFill.style.backgroundColor = '#10B981';
      } else {
        const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
        const progressPct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
        shippingTrackerMsg.innerHTML = `Add <strong>${formatNaira(remaining)}</strong> more to qualify for <strong>FREE shipping in Nigeria</strong>!`;
        shippingBarFill.style.width = `${progressPct}%`;
        shippingBarFill.style.backgroundColor = 'var(--color-red)';
      }
    }

    // Render Cart Items
    if (!cartItemsList) return;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="drawer-empty-state">
          <p>Your shopping bag is empty, Vixen.</p>
          <a href="#most-wanted" class="btn btn-sharp-black" onclick="document.getElementById('cartClose').click()">START SHOPPING</a>
        </div>
      `;
    } else {
      cartItemsList.innerHTML = cart.map((item) => `
        <div class="cart-item-row" data-id="${item.id}">
          <img src="${item.img}" alt="${item.name}" class="cart-item-img" />
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-price">${formatNaira(item.price)}</div>
            <div class="cart-item-controls">
              <div class="qty-stepper">
                <button class="qty-btn" onclick="window.changeItemQty('${item.id}', -1)" aria-label="Decrease quantity">−</button>
                <span class="qty-num">${item.qty}</span>
                <button class="qty-btn" onclick="window.changeItemQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
              </div>
              <button class="item-remove-btn" onclick="window.removeCartItem('${item.id}')">Remove</button>
            </div>
          </div>
        </div>
      `).join('');
    }
  };

  const triggerBagBounce = () => {
    if (bagIcon) {
      bagIcon.classList.remove('bag-bounce-active');
      void bagIcon.offsetWidth; // Force reflow
      bagIcon.classList.add('bag-bounce-active');
    }
  };

  window.addToCart = (id, name, price, img) => {
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id, name, price: Number(price), img, qty: 1 });
    }
    updateCartUI();
    triggerBagBounce();
    window.showToast(`Added to your bag: ${name}`);
  };

  window.changeItemQty = (id, delta) => {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
    updateCartUI();
  };

  window.removeCartItem = (id) => {
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
  };

  // Wire up all "Add to Bag" buttons on product cards
  document.querySelectorAll('.btn-add-bag').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const button = e.currentTarget;
      const id = button.getAttribute('data-id');
      const name = button.getAttribute('data-name');
      const price = button.getAttribute('data-price');
      const img = button.getAttribute('data-img');

      window.addToCart(id, name, price, img);

      // Temporary button state change to "Added ✓"
      const originalText = button.textContent;
      button.textContent = 'Added ✓';
      button.classList.add('added-active');

      setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('added-active');
      }, 1500);
    });
  });

  // Drawer toggles
  const toggleCartDrawer = (open) => {
    if (cartDrawer) {
      cartDrawer.classList.toggle('open', open);
      cartDrawer.setAttribute('aria-hidden', !open);
      document.body.style.overflow = open ? 'hidden' : '';
    }
  };

  if (cartTrigger && cartClose) {
    cartTrigger.addEventListener('click', () => toggleCartDrawer(true));
    cartClose.addEventListener('click', () => toggleCartDrawer(false));
    cartDrawer.addEventListener('click', (e) => {
      if (e.target === cartDrawer) toggleCartDrawer(false);
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        window.showToast('Your shopping bag is empty, Vixen!');
        return;
      }
      const totalStr = cartSubtotal ? cartSubtotal.textContent : '';
      alert(`✨ Thank you, Tega! Your Velora Beauty order (${totalStr}) is ready for checkout with Nigerian delivery.`);
      cart = [];
      updateCartUI();
      toggleCartDrawer(false);
    });
  }

  /* ==========================================================================
     7. WISHLIST MANAGEMENT
     ========================================================================== */
  let wishlist = new Set();
  const wishlistTrigger = document.getElementById('wishlistTrigger');
  const wishlistCount = document.getElementById('wishlistCount');
  const wishlistModalCount = document.getElementById('wishlistModalCount');
  const wishlistDrawer = document.getElementById('wishlistDrawer');
  const wishlistClose = document.getElementById('wishlistClose');
  const wishlistItemsList = document.getElementById('wishlistItemsList');

  const updateWishlistUI = () => {
    const count = wishlist.size;
    if (wishlistCount) wishlistCount.textContent = count;
    if (wishlistModalCount) wishlistModalCount.textContent = count;

    if (!wishlistItemsList) return;

    if (count === 0) {
      wishlistItemsList.innerHTML = `
        <div class="drawer-empty-state">
          <p>Your wishlist is currently empty.</p>
          <a href="#most-wanted" class="btn btn-sharp-black" onclick="document.getElementById('wishlistClose').click()">DISCOVER PRODUCTS</a>
        </div>
      `;
    } else {
      const items = CATALOG.filter(item => wishlist.has(item.id));
      wishlistItemsList.innerHTML = items.map(item => `
        <div class="cart-item-row" data-id="${item.id}">
          <img src="${item.img}" alt="${item.name}" class="cart-item-img" />
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-price">${formatNaira(item.price)}</div>
            <div class="cart-item-controls">
              <button class="btn btn-sharp-black" style="padding: 6px 12px; font-size: 0.6875rem;" onclick="window.addToCart('${item.id}', '${item.name}', ${item.price}, '${item.img}');">ADD TO BAG</button>
              <button class="item-remove-btn" onclick="window.toggleWishlist('${item.id}')">Remove</button>
            </div>
          </div>
        </div>
      `).join('');
    }
  };

  window.toggleWishlist = (id) => {
    const isAdded = wishlist.has(id);
    if (isAdded) {
      wishlist.delete(id);
      window.showToast('Removed from your wishlist');
    } else {
      wishlist.add(id);
      window.showToast('Saved to your wishlist ❤️');
    }

    // Toggle button state on page cards
    document.querySelectorAll(`.product-wishlist-btn[data-product-id="${id}"]`).forEach(btn => {
      btn.classList.toggle('active', !isAdded);
    });

    updateWishlistUI();
  };

  document.querySelectorAll('.product-wishlist-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-product-id');
      window.toggleWishlist(id);
    });
  });

  const toggleWishlistDrawer = (open) => {
    if (wishlistDrawer) {
      wishlistDrawer.classList.toggle('open', open);
      wishlistDrawer.setAttribute('aria-hidden', !open);
      document.body.style.overflow = open ? 'hidden' : '';
    }
  };

  if (wishlistTrigger && wishlistClose) {
    wishlistTrigger.addEventListener('click', () => toggleWishlistDrawer(true));
    wishlistClose.addEventListener('click', () => toggleWishlistDrawer(false));
    wishlistDrawer.addEventListener('click', (e) => {
      if (e.target === wishlistDrawer) toggleWishlistDrawer(false);
    });
  }

  /* ==========================================================================
     8. PRODUCT COLOR SWATCH SELECTION
     ========================================================================== */
  document.querySelectorAll('.swatch').forEach(swatch => {
    swatch.addEventListener('click', (e) => {
      const parent = e.target.closest('.product-swatches');
      if (!parent) return;
      parent.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
      e.target.classList.add('active');
      const title = e.target.getAttribute('title') || 'Selected shade';
      window.showToast(`Selected shade: ${title}`);
    });
  });

  /* ==========================================================================
     9. HORIZONTAL CAROUSEL CONTROLS
     ========================================================================== */
  const setupCarousel = (viewportId, prevBtnId, nextBtnId) => {
    const viewport = document.getElementById(viewportId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);

    if (!viewport || !prevBtn || !nextBtn) return;

    const updateArrows = () => {
      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      prevBtn.disabled = viewport.scrollLeft <= 5;
      nextBtn.disabled = viewport.scrollLeft >= maxScroll - 5;
    };

    const getScrollAmount = () => {
      return viewport.clientWidth * 0.75;
    };

    prevBtn.addEventListener('click', () => {
      viewport.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      viewport.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });

    viewport.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    updateArrows();
  };

  setupCarousel('wantedViewport', 'wantedPrev', 'wantedNext');
  setupCarousel('giftsViewport', 'giftsPrev', 'giftsNext');

  /* ==========================================================================
     10. SEARCH OVERLAY & LIVE FILTERING
     ========================================================================== */
  const searchTrigger = document.getElementById('searchTrigger');
  const searchModal = document.getElementById('searchModal');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');
  const searchResultsArea = document.getElementById('searchResultsArea');

  const toggleSearchModal = (open) => {
    if (searchModal) {
      searchModal.classList.toggle('open', open);
      searchModal.setAttribute('aria-hidden', !open);
      document.body.style.overflow = open ? 'hidden' : '';
      if (open && searchInput) {
        setTimeout(() => searchInput.focus(), 150);
      }
    }
  };

  if (searchTrigger && searchClose) {
    searchTrigger.addEventListener('click', () => toggleSearchModal(true));
    searchClose.addEventListener('click', () => toggleSearchModal(false));
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) toggleSearchModal(false);
    });
  }

  if (searchInput && searchResultsArea) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (!query) {
        searchResultsArea.innerHTML = '<div class="search-hint">Type to search Velora’s collection...</div>';
        return;
      }

      const results = CATALOG.filter(p =>
        p.name.toLowerCase().includes(query) ||
        (p.category && p.category.toLowerCase().includes(query)) ||
        (p.details && p.details.toLowerCase().includes(query))
      );

      if (results.length === 0) {
        searchResultsArea.innerHTML = `<div class="search-hint">No products found matching "${query}".</div>`;
      } else {
        searchResultsArea.innerHTML = results.map(item => `
          <div class="search-result-item">
            <div class="search-result-info">
              <img src="${item.img}" alt="${item.name}" class="search-result-img" />
              <div>
                <div class="search-result-title">${item.name}</div>
                <div class="search-result-price">${formatNaira(item.price)}</div>
              </div>
            </div>
            <button class="btn btn-sharp-black" style="padding: 8px 14px; font-size: 0.6875rem;" onclick="window.addToCart('${item.id}', '${item.name}', ${item.price}, '${item.img}');">
              ADD TO BAG
            </button>
          </div>
        `).join('');
      }
    });
  }

  /* ==========================================================================
     11. EDITORIAL CLIP-PATH & PARALLAX OBSERVER
     ========================================================================== */
  const clipFrameA = document.getElementById('clipFrameA');
  const clipFrameB = document.getElementById('clipFrameB');

  const clipObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.25 });

  if (clipFrameA) clipObserver.observe(clipFrameA);
  if (clipFrameB) clipObserver.observe(clipFrameB);

  // Subtle image parallax on scroll for editorial photographs
  const parallaxTargets = document.querySelectorAll('.parallax-target');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    parallaxTargets.forEach(img => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const offset = (rect.top / window.innerHeight - 0.5) * 25;
        img.style.transform = `translateY(${offset}px) scale(1.03)`;
      }
    });
  }, { passive: true });

  /* ==========================================================================
     12. GENERAL SCROLL REVEALS (INTERSECTION OBSERVER)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(elem => revealObserver.observe(elem));

  /* ==========================================================================
     13. FOOTER NEWSLETTER VALIDATION & SUBMISSION
     ========================================================================== */
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterConsent = document.getElementById('newsletterConsent');
  const newsletterFeedback = document.getElementById('newsletterFeedback');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        newsletterFeedback.style.color = '#FFFFFF';
        newsletterFeedback.textContent = 'Please enter a valid email address.';
        return;
      }

      if (!newsletterConsent.checked) {
        newsletterFeedback.style.color = '#FFFFFF';
        newsletterFeedback.textContent = 'Please agree to email communications to join.';
        return;
      }

      // Success as required by spec:
      // "You’re in. Watch your inbox for the next drop."
      newsletterFeedback.style.color = '#FFFFFF';
      newsletterFeedback.textContent = "You’re in. Watch your inbox for the next drop.";
      newsletterEmail.value = '';
      newsletterConsent.checked = false;

      window.showToast("You’re in. Watch your inbox for the next drop.");
    });
  }

  /* ==========================================================================
     14. GIANT FOOTER WORDMARK REVEAL & WAVE ANIMATION
     ========================================================================== */
  const giantWordmark = document.getElementById('giantWordmark');
  const giantWordmarkContainer = document.getElementById('giantWordmarkContainer');

  if (giantWordmarkContainer && giantWordmark) {
    const wordmarkObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          giantWordmark.classList.add('revealed');
          // Start continuous wave after letters finish rising
          setTimeout(() => {
            giantWordmark.classList.add('wave-active');
          }, 1000);
        }
      });
    }, { threshold: 0.2 });

    wordmarkObserver.observe(giantWordmarkContainer);
  }

  /* ==========================================================================
     15. ESCAPE KEY TO CLOSE ANY OPEN MODAL
     ========================================================================== */
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleSearchModal(false);
      toggleCartDrawer(false);
      toggleWishlistDrawer(false);
      toggleMobileDrawer(false);
    }
  });

  // Account badge greeting toast
  const accountBtn = document.getElementById('accountBtn');
  if (accountBtn) {
    accountBtn.addEventListener('click', () => {
      window.showToast('Hi, Vixen! Welcome to your VIP Velora beauty lounge.');
    });
  }

  // Initial cart UI check
  updateCartUI();
});
