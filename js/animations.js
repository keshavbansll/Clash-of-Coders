// ===============================
// GSAP ANIMATIONS
// ===============================

// Ensure GSAP is available
if (typeof gsap !== "undefined") {
  // -------------------------------
  // HERO ENTRANCE
  // -------------------------------
  gsap.from(".hero h1", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".hero h2", {
    opacity: 0,
    y: 30,
    duration: 0.9,
    delay: 0.15,
    ease: "power3.out",
  });

  gsap.from(".hero-cta", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.3,
    ease: "power3.out",
  });

  // -------------------------------
  // SCROLL REVEALS
  // -------------------------------
  const revealElements = document.querySelectorAll(
    ".about-section, .participation-section, .journey-section, " +
      ".prizes-section, .themes-section, .campus-days-section, " +
      ".cities-section, .timeline-section, .faq-section",
  );

  revealElements.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
}
