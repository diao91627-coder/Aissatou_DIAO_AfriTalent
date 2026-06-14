



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
 