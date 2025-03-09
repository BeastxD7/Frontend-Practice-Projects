document.addEventListener("DOMContentLoaded", function () {
  const textElements = document.querySelectorAll(".scroll-line");

  function updateTextEffect() {
      let centerScreen = window.innerHeight / 2;

      textElements.forEach(text => {
          let rect = text.getBoundingClientRect();
          let textCenter = rect.top + rect.height / 2;

          if (Math.abs(centerScreen - textCenter) < rect.height / 2) {
              text.classList.add("visible");
          } else {
              text.classList.remove("visible");
          }
      });
  }

  window.addEventListener("scroll", updateTextEffect);
  updateTextEffect(); // Run on page load
});

document.addEventListener("DOMContentLoaded", () => {
    const toggleInput = document.getElementById("theme-toggle");
    const body = document.body;

    const setTheme = (isDark) => {
        if (isDark) {
            body.classList.add("dark-mode");
            toggleInput.checked = true;
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark-mode");
            toggleInput.checked = false;
            localStorage.setItem("theme", "light");
        }
    };

    // Check saved theme
    setTheme(localStorage.getItem("theme") === "dark");

    // Toggle theme on change
    toggleInput.addEventListener("change", () => {
        setTheme(toggleInput.checked);
    });
});

