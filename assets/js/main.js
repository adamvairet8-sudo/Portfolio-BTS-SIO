/* ============================================================
   PORTFOLIO ADAM VAIRET — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ========== THEME MANAGEMENT ========== */

  const THEME_KEY = 'adam-portfolio-theme';

  function getPreferredTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);

    // Update toggle icon
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;
    const sunIcon = toggle.querySelector('.icon-sun');
    const moonIcon = toggle.querySelector('.icon-moon');
    if (sunIcon && moonIcon) {
      sunIcon.style.display = theme === 'dark' ? 'none' : 'block';
      moonIcon.style.display = theme === 'dark' ? 'block' : 'none';
    }
  }

  function initTheme() {
    const theme = getPreferredTheme();
    applyTheme(theme);

    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);

        // Rotation animation
        toggle.classList.add('rotate');
        setTimeout(function () {
          toggle.classList.remove('rotate');
        }, 500);
      });
    }

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
      if (!localStorage.getItem(THEME_KEY)) {
        applyTheme(e.matches ? 'light' : 'dark');
      }
    });
  }

  /* ========== MOBILE MENU ========== */

  function initMobileMenu() {
    var menuToggle = document.querySelector('.menu-toggle');
    var navLinks = document.querySelector('.nav-links');
    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
      var expanded = navLinks.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', expanded);
    });

    // Close menu on link click
    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on click outside
    document.addEventListener('click', function (e) {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ========== SCROLL REVEAL ========== */

  function initScrollReveal() {
    var elements = document.querySelectorAll('.animate-on-scroll');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    });

    elements.forEach(function (el, index) {
      // Auto-stagger for grid children
      if (!el.hasAttribute('data-delay')) {
        var parent = el.parentElement;
        if (parent && (
          parent.classList.contains('cards-grid') ||
          parent.classList.contains('tools-grid') ||
          parent.classList.contains('interests-grid') ||
          parent.classList.contains('methodology-steps') ||
          parent.classList.contains('lang-grid')
        )) {
          var childIndex = Array.from(parent.children).indexOf(el);
          el.setAttribute('data-delay', Math.min(childIndex + 1, 6));
        }
      }
      observer.observe(el);
    });
  }

  /* ========== TYPEWRITER EFFECT ========== */

  function initTypewriter() {
    var el = document.querySelector('.typewriter');
    if (!el) return;

    var texts = el.getAttribute('data-texts');
    if (!texts) return;

    var phrases = texts.split('|');
    var phraseIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var typeSpeed = 80;
    var deleteSpeed = 40;
    var pauseEnd = 2000;
    var pauseStart = 500;

    function type() {
      var current = phrases[phraseIndex];
      if (isDeleting) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }

      var delay = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIndex === current.length) {
        delay = pauseEnd;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = pauseStart;
      }

      setTimeout(type, delay);
    }

    setTimeout(type, pauseStart);
  }

  /* ========== PROGRESS BAR ANIMATION ========== */

  function initProgressBars() {
    var bars = document.querySelectorAll('.progress-bar[data-width]');
    if (!bars.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var target = entry.target;
          var width = target.getAttribute('data-width');
          target.style.width = width + '%';
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.3 });

    bars.forEach(function (bar) {
      observer.observe(bar);
    });
  }

  /* ========== COUNTER ANIMATION ========== */

  function initCounters() {
    var counters = document.querySelectorAll('.counter[data-target]');
    if (!counters.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-target'), 10);
          var suffix = el.getAttribute('data-suffix') || '';
          var duration = 1200;
          var start = 0;
          var startTime = null;

          function animate(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out quad
            var eased = 1 - (1 - progress) * (1 - progress);
            var current = Math.floor(eased * target);
            el.textContent = current + suffix;
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              el.textContent = target + suffix;
            }
          }

          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (c) {
      observer.observe(c);
    });
  }

  /* ========== PARTICLES ========== */

  function initParticles() {
    var canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var particles = [];
    var particleCount = 40;

    function resize() {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    function Particle() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 2 + 1;
    }

    for (var i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Get accent color from computed style
      var accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#7c5ce8';

      particles.forEach(function (p, i) {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.fill();

        // Draw lines to nearby particles
        for (var j = i + 1; j < particles.length; j++) {
          var dx = p.x - particles[j].x;
          var dy = p.y - particles[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = accent;
            ctx.globalAlpha = 1 - dist / 120;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });

      requestAnimationFrame(drawParticles);
    }

    drawParticles();
  }

  /* ========== CONTACT MODAL ========== */

  function initContactModal() {
    var overlay = document.getElementById('contact-modal');
    if (!overlay) return;

    var openBtns = document.querySelectorAll('[data-modal="contact"]');
    var closeBtns = overlay.querySelectorAll('.modal-close');

    function open() {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      // Focus trap
      var firstFocusable = overlay.querySelector('button, a, input');
      if (firstFocusable) firstFocusable.focus();
    }

    function close() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    openBtns.forEach(function (btn) {
      btn.addEventListener('click', open);
    });

    closeBtns.forEach(function (btn) {
      btn.addEventListener('click', close);
    });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        close();
      }
    });
  }

  /* ========== NAVBAR SCROLL EFFECT ========== */

  function initNavbarScroll() {
    var navbar = document.querySelector('.navbar');
    if (!navbar) return;

    var scrolled = false;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 50 && !scrolled) {
        scrolled = true;
        navbar.style.boxShadow =
          '4px 4px 10px var(--shadow-dark), -4px -4px 10px var(--shadow-light)';
      } else if (window.scrollY <= 50 && scrolled) {
        scrolled = false;
        navbar.style.boxShadow =
          '2px 2px 5px var(--shadow-dark), -2px -2px 5px var(--shadow-light)';
      }
    });
  }

  /* ========== ACTIVE NAV LINK ========== */

  function initActiveNav() {
    var path = window.location.pathname;
    var links = document.querySelectorAll('.nav-link');

    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;

      // Normalize: get just the filename
      var linkFile = href.split('/').pop();
      var currentFile = path.split('/').pop() || 'index.html';

      if (linkFile === currentFile) {
        link.classList.add('active');
      }
    });
  }

  /* ========== SMOOTH SCROLL FOR ANCHOR LINKS ========== */

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /* ========== INIT ALL ========== */

  function init() {
    initTheme();
    initMobileMenu();
    initScrollReveal();
    initTypewriter();
    initProgressBars();
    initCounters();
    initParticles();
    initContactModal();
    initNavbarScroll();
    initActiveNav();
    initSmoothScroll();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
