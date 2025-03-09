document.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(".card", 
      { opacity: 0, y: 50, scale: 0.8 }, 
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }
  );
});
