# UI Components

## Loader

<details>
  <summary>Click to expand Loader</summary>

### HTML
```html
<div id="loader">
      <h1 class="cinematic-text">
        <span>S</span><span>M</span><span>V</span><span>I</span><span>T</span>
        <span>M</span>
      </h1>
</div>
```

### CSS
```css
body {
    background-color: black;
}

#loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.cinematic-text {
    font-size: 6rem;
    font-weight: bold;
    letter-spacing: 15px;
    color: rgba(255, 255, 255, 0.1);
    display: flex;
    gap: 10px;
    font-family: serif;
}

.cinematic-text span {
    opacity: 0;
    filter: blur(10px);
    transform: translateY(30px);
    animation: revealLetter 1.5s forwards ease-in-out;
}

.cinematic-text span:nth-child(1) { animation-delay: 0.2s; }
.cinematic-text span:nth-child(2) { animation-delay: 0.4s; }
.cinematic-text span:nth-child(3) { animation-delay: 0.6s; }
.cinematic-text span:nth-child(4) { animation-delay: 0.8s; }
.cinematic-text span:nth-child(5) { animation-delay: 1s; }
.cinematic-text span:nth-child(6) { animation-delay: 1.2s; }

@keyframes revealLetter {
    0% {
      opacity: 0;
      filter: blur(10px);
      transform: translateY(30px);
      text-shadow: 0 0 10px rgba(255, 255, 255, 0);
    }
    40% {
      opacity: 0.6;
      filter: blur(5px);
      text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }
    70% {
      opacity: 1;
      filter: blur(2px);
      transform: translateY(0);
      text-shadow: 0 0 40px rgba(255, 255, 255, 0.9), 0 0 80px rgba(255, 255, 255, 0.6);
    }
    100% {
      opacity: 1;
      filter: blur(0);
      text-shadow: 0 0 60px rgba(255, 255, 255, 1), 0 0 100px rgba(255, 255, 255, 0.8);
    }
}
```

### JavaScript
```js
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.getElementById("loader").style.animation = "fadeOut 1s forwards";
      setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.querySelector(".main").style.display = "block";
        document.querySelector(".main").style.opacity = "1";
      }, 1000);
    }, 3500);
});
```
</details>

---



## Linear Section With Card

<details>
  <summary>Click to expand Linear Section</summary>

### HTML
```html
<div class="linear-section">
    <h2>Hover Here</h2>
    <div class="hidden-card">
        <img src="https://source.unsplash.com/300x150/?technology" alt="Revealed Image">
    </div>
</div>
```

### CSS
```css
.linear-section {
    position: relative;
    width: 100%;
    height: 150px;
    background: linear-gradient(135deg, #ff0055, #5500ff);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
}
.hidden-card {
    position: absolute;
    margin-right: 5rem;
    top: 50%;
    right: 0;
    transform: translateY(-50%) scale(0);
    width: 280px;
    height: 280px;
    background: white;
    border-radius: 10px;
    opacity: 0;
    transition: transform 0.3s ease-out, opacity 0.3s ease-in;
}
.linear-section:hover .hidden-card {
    transform: translateY(-50%) scale(1);
    opacity: 1;
}
```
</details>


## Dark Mode 

<details>
  <summary>Click to expand Slider</summary>

### HTML
```html
<label class="theme-switch">
    <input type="checkbox" id="theme-toggle">
    <span class="switch"></span>
</label>


```

### CSS
```css
:root {
    --bg-color: #ffffff;
    --text-color: #000000;
    --switch-bg: #ddd;
    --switch-circle: #ffffff;
}

.dark-mode {
    --bg-color: #121212;
    --text-color: #ffffff;
    --switch-bg: #444;
    --switch-circle: #f0f0f0;
}

body {
    background: var(--bg-color);
    color: var(--text-color);
    transition: 0.3s ease-in-out;
}

/* Theme Switch */
.theme-switch {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 25px;
    display: inline-block;
    cursor: pointer;
}

.theme-switch input {
    display: none;
}

.switch {
    display: block;
    width: 100%;
    height: 100%;
    background: var(--switch-bg);
    border-radius: 25px;
    position: relative;
    transition: 0.3s;
}

/* Circle Inside */
.switch::before {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    background: var(--switch-circle);
    border-radius: 50%;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
    transition: 0.3s ease-in-out;
}

/* Toggle Effect */
input:checked + .switch {
    background: var(--switch-bg);
}

input:checked + .switch::before {
    left: calc(100% - 22px);
}


```

```javascript
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


```
</details>


## Slider 

<details>
  <summary>Click to expand Slider</summary>

### HTML
```html
<div class="slider">
        <div class="slider-track">
            <div class="slide">1</div>
            <div class="slide">2</div>
            <div class="slide">3</div>
            <div class="slide">4</div>
            <div class="slide">5</div>
            <div class="slide">6</div>
            <div class="slide">1</div>
            <div class="slide">2</div>
            <div class="slide">3</div>
            <div class="slide">4</div>
            <div class="slide">5</div>
            <div class="slide">6</div>
        </div>
    </div>
```

### CSS
```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #111;
}
.slider {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
}
.slider-track {
    display: flex;
    gap: 20px;
    animation: slide 10s linear infinite;
}
.slide {
    min-width: 300px;
    height: 200px;
    background: #333;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    border-radius: 10px;
}
@keyframes slide {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}
```
</details>