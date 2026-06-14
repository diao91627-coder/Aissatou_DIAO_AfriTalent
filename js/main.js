



// ===== RETOUR EN HAUT =====
//  const topBtn = document.getElementById("top-btn");

// window.addEventListener("scroll", function () {
//      if (window.scrollY > 200) {
//          topBtn.style.display = "block";
//      } else {
//          topBtn.style.display = "none";
//    }
//  });

//  topBtn.addEventListener("click", function () {
//      window.scrollTo({
//          top: 0,
//          behavior: "smooth"
//      });
//  });





// ===== DARK MODE =====
const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}


// ===== NAVBAR AU SCROLL =====
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (navbar && window.scrollY > 80) {
    navbar.classList.add("navbar-scrolled");
  } else if (navbar) {
    navbar.classList.remove("navbar-scrolled");
  }
});


// ===== RETOUR EN HAUT =====
const topBtn = document.getElementById("top-btn");

if (topBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  topBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
 



/////////////////////COMMIT7//////////////

// ===== COMPTEURS INDEX.HTML =====
const stats = document.querySelectorAll(".hero-stats .stat-card h3");

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const stat = entry.target;
      const finalValue = parseInt(stat.textContent);
      let count = 0;

      const update = () => {
        const increment = finalValue / 100;

        if (count < finalValue) {
          count += increment;
          stat.textContent = Math.ceil(count) + "+";
          setTimeout(update, 20);
        } else {
          stat.textContent = finalValue + "+";
        }
      };

      update();
      statsObserver.unobserve(stat);
    }
  });
});

stats.forEach(stat => statsObserver.observe(stat));



// ===== COMPTEURS ABOUT.HTML =====
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute("data-target");
      let count = 0;

      const updateCounter = () => {
        const increment = target / 100;

        if (count < target) {
          count += increment;
          counter.textContent = Math.ceil(count);
          setTimeout(updateCounter, 20);
        } else {
          counter.textContent = target;
        }
      };

      updateCounter();
      counterObserver.unobserve(counter);
    }
  });
});

counters.forEach(counter => counterObserver.observe(counter));