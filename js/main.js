// ===============================
// MAIN INTERACTIONS
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------
  // FAQ ACCORDION
  // -------------------------------
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  // -------------------------------
  // NAVBAR SCROLL STATE (PREP)
  // -------------------------------
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

// ===============================
// INNOVATION THEMES MODAL
// ===============================

const themeCards = document.querySelectorAll(".theme-card");
const themeModal = document.getElementById("themeModal");
const themeModalTitle = document.getElementById("themeModalTitle");
const themeModalClose = document.querySelector(".theme-modal-close");

themeCards.forEach((card) => {
  card.addEventListener("click", () => {
    const themeName = card.getAttribute("data-theme");
    themeModalTitle.textContent = themeName;
    themeModal.classList.add("active");
  });
});

themeModalClose.addEventListener("click", () => {
  themeModal.classList.remove("active");
});

themeModal.addEventListener("click", (e) => {
  if (e.target === themeModal) {
    themeModal.classList.remove("active");
  }
});

// ===============================
// FAQ ACCORDION
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    // Ensure closed state on load
    answer.style.maxHeight = "0px";

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Close all items
      faqItems.forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".faq-answer").style.maxHeight = "0px";
      });

      // Open clicked item
      if (!isOpen) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});

// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggle = item.querySelector('.faq-toggle');
    
    question.addEventListener('click', () => {
      // Toggle active class
      item.classList.toggle('active');
      
      // Change + to - when open
      if (item.classList.contains('active')) {
        toggle.textContent = '−';
      } else {
        toggle.textContent = '+';
      }
    });
  });
});
