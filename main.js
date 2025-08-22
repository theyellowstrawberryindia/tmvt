/* ==========================
   MAIN SCRIPT (main.js)
   ========================== */
document.addEventListener("DOMContentLoaded", () => {

  /* ===== Helper: Get gap between flex items ===== */
  function getGapPx(el) {
    const cs = getComputedStyle(el);
    const gap = parseInt(cs.columnGap || cs.gap || '0', 10);
    return isNaN(gap) ? 0 : gap;
  }

  /* ===== Generic Carousel Function ===== */
  function setupScrollCarousel(carouselId, prevId, nextId, cardSelector, fallbackWidth = 360) {
    const carousel = document.getElementById(carouselId);
    const prev = document.getElementById(prevId);
    const next = document.getElementById(nextId);

    if (!carousel || !prev || !next) return;

    prev.addEventListener("click", () => scrollByOne(-1));
    next.addEventListener("click", () => scrollByOne(1));

    function scrollByOne(dir) {
      const card = carousel.querySelector(cardSelector);
      const gap = getGapPx(carousel) || 32;
      const delta = (card ? card.offsetWidth : fallbackWidth) + gap;
      carousel.scrollBy({ left: dir * delta, behavior: "smooth" });
    }
  }

  /* ===== Card Carousel ===== */
  setupScrollCarousel("cardCarousel", "carouselPrev", "carouselNext", ".custom-card");

  /* ===== Product Carousel ===== */
  setupScrollCarousel("productCarousel", "productPrev", "productNext", ".product-card2");

  /* ===== Testimonial Carousel (translateX) ===== */
  const testimonialCarousel = document.getElementById("testimonialCarousel");
  const testimonialPrev = document.querySelector(".left-arrow");
  const testimonialNext = document.querySelector(".right-arrow");

  if (testimonialCarousel && testimonialPrev && testimonialNext) {
    let tIndex = 0;
    const tCards = testimonialCarousel.querySelectorAll(".testimonial-card");

    function getCardWidth() {
      const card = tCards[0];
      if (!card) return 320;
      const style = getComputedStyle(card);
      const gap = parseInt(style.marginRight || "0", 10);
      return card.offsetWidth + gap;
    }

    function updateTestimonial() {
      const cardWidth = getCardWidth();
      testimonialCarousel.style.transform = `translateX(-${tIndex * cardWidth}px)`;
    }

    testimonialPrev.addEventListener("click", () => {
      if (tIndex > 0) {
        tIndex--;
        updateTestimonial();
      }
    });

    testimonialNext.addEventListener("click", () => {
      if (tIndex < tCards.length - 1) {
        tIndex++;
        updateTestimonial();
      }
    });
  }


  /* ===== Sticky Navbar + Requirement Bar ===== */
  const navbar = document.querySelector(".custom-navbar");
  const requirementBar = document.querySelector(".requirement-bar");

  if (navbar && requirementBar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        requirementBar.classList.add("hidden");
        navbar.classList.add("scrolled");
      } else {
        requirementBar.classList.remove("hidden");
        navbar.classList.remove("scrolled");
      }
    });
  }

  /* ===== Play/Pause Toggle Buttons ===== */
  document.querySelectorAll(".toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const playIcon = btn.querySelector(".icon-play");
      const pauseIcon = btn.querySelector(".icon-pause");
      if (playIcon && pauseIcon) {
        playIcon.classList.toggle("d-none");
        pauseIcon.classList.toggle("d-none");
      }
    });
  });

  /* ===== FAQ SECTIONS ===== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.dropdown-icon');

    if (!question || !answer || !icon) return;

    question.addEventListener('click', () => {
      const isOpen = answer.classList.contains('open');

      // Close all others
      document.querySelectorAll('.faq-answer').forEach(ans => {
        ans.classList.remove('open');
        const q = ans.previousElementSibling;
        if (q) {
          const i = q.querySelector('.dropdown-icon');
          if (i) i.style.transform = 'rotate(0deg)';
        }
      });

      // Toggle current
      if (!isOpen) {
        answer.classList.add('open');
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });

});
/* ==========================
   MOBILE NAV MENU
   ========================== */
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector('.menu-btn');
  const backBtn = document.querySelector('.back-btn');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuBtn && backBtn && mobileNav) {
    // Open menu
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.add('active');
      mobileNav.classList.remove('slide-out');
    });

    // Close menu (slide out)
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      mobileNav.classList.remove('active');
      mobileNav.classList.add('slide-out');

      // optional: hide after animation completes
      setTimeout(() => {
        mobileNav.classList.remove('slide-out');
      }, 300); // match your CSS transition duration
    });
  }
});





//help box 

  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, { threshold: 0.2 });

    // Watch heading + boxes
    document.querySelectorAll(".help-heading, .help-box").forEach(el => {
      observer.observe(el);
    });
  });



    document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, { threshold: 0.2 });

    // Watch heading + boxes
    document.querySelectorAll(".help-heading, .help-box").forEach(el => {
      observer.observe(el);
    });
  });