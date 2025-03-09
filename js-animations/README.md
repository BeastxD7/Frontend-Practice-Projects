# Loader

```
<div id="loader">
      <h1 class="cinematic-text">
        <span>S</span><span>M</span><span>V</span><span>I</span><span>T</span
        ><span>M</span>
      </h1>
    </div>
```


```
 body{
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
    color: rgba(255, 255, 255, 0.1); /* Start dim */
    display: flex;
    gap: 10px;
    font-family: serif; /* Adds a classic movie feel */
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
  



  .main {
    display: none;
    opacity: 0;
  }
  

  @keyframes fadeOut {
    to {
      opacity: 0;
      display: none;
    }
  }

  
```


```  
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.getElementById("loader").style.animation = "fadeOut 1s forwards";
      setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.querySelector(".main").style.display = "block";
        document.querySelector(".main").style.opacity = "1";
      }, 1000); // Delay before showing main content
    }, 3500); // Total loading animation time
  });
  ```
  

# Cards

```
 <div class="card">
        <h2 class="card-title">Explosive Growth</h2>
        <p class="card-desc">
            Perfect for your next content, leave it to us and enjoy the result!
        </p>
        <hr class="divider" />
        <ul class="card-list">
            <li class="list-item"><span class="checkmark">✔</span> 10 Launch Weeks</li>
            <li class="list-item"><span class="checkmark">✔</span> 10 Influencers Post</li>
            <li class="list-item"><span class="checkmark">✔</span> 100,000 Views</li>
            <li class="list-item"><span class="checkmark">✔</span> 10 Reddit Posts</li>
            <li class="list-item"><span class="checkmark">✔</span> 2 Hours Marketing Consultation</li>
        </ul>
        <button class="cta-button">Book a Call</button>
    </div>
```


```
.card {
  position: relative;
  padding: 1.5rem;
  width: 22rem;
  background: linear-gradient(135deg, rgba(50, 10, 100, 0.8), rgba(0, 0, 0, 0.9));
  border-radius: 1rem;
  box-shadow: 
      inset 0 0 20px rgba(168, 85, 247, 0.5), /* Inner Glow */
      0 0 15px rgba(168, 85, 247, 0.8); /* Outer Neon Glow */
  color: white;
  text-align: center;
}

.card-title {
  font-size: 1.4rem;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

.card-desc {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
}

.divider {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
  margin: 1rem 0;
}

.card-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
}

.checkmark {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  background-color: rgba(168, 85, 247, 0.9);
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(168, 85, 247, 0.8);
  color: black;
  font-weight: bold;
}

.cta-button {
  cursor: pointer;
  padding: 0.7rem;
  width: 100%;
  background: linear-gradient(90deg, rgba(168, 85, 247, 1), rgba(240, 100, 255, 1));
  font-size: 0.9rem;
  color: white;
  font-weight: bold;
  border: 0;
  border-radius: 9999px;
  box-shadow: 0 0 15px rgba(168, 85, 247, 0.8);
  transition: 0.3s;
}

.cta-button:hover {
  box-shadow: 0 0 20px rgba(168, 85, 247, 1);
  transform: scale(1.05);
}
```


# Linear Section With Card

```
<div class="linear-section">
        <h2>Hover Here</h2>
        <div class="hidden-card">
            <img src="https://source.unsplash.com/300x150/?technology" alt="Revealed Image">
        </div>
    </div>
```

```
/* Full-Width Linear Section */
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
    overflow: visible; /* Allows the hidden card to be seen */
}

/* Hidden Card (Appears on Right Side with Scaling) */
.hidden-card {
    position: absolute;
    margin-right: 5rem ;
    top: 50%;
    right: 0;
    transform: translateY(-50%) scale(0); /* Start fully hidden */
    width: 280px;
    height: 280px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(255, 0, 85, 0.3);
    opacity: 0;
    transition: transform 0.3s ease-out, opacity 0.3s ease-in;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

/* Image inside the hidden card */
.hidden-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

/* Hover Effect: Reveal Hidden Card with Scaling */
.linear-section:hover .hidden-card {
    transform: translateY(-50%) scale(1);
    opacity: 1;
}

```