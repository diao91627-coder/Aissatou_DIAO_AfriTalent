

// ===== DARK MODE =====
// recuper le boutton dark mode 
const themeToggle = document.getElementById("theme-toggle");
// garde le mode sombre apres rechargement 
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}
// active / desactive le dark mode 
if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        // sauvegarde le choix utilisateur 
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}


// ===== NAVBAR AU SCROLL =====
// change le style de la navbar pendant le scroll 
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (navbar && window.scrollY > 80) {
        navbar.classList.add("navbar-scrolled");
    } else if (navbar) {
        navbar.classList.remove("navbar-scrolled");
    }
});


// ===== RETOUR EN HAUT =====
// boutton visible apres scroll 
const topBtn = document.getElementById("top-btn");

if (topBtn) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });
    //   remonte en haut 
    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}




// ========================COMMIT7==========================

// ===== COMPTEURS INDEX.HTML =====
// animation des statistique
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
// animation des chiffre cles 
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

// ====================*COMMIT8=================
// ===== FILTRAGE FREELANCES =====
// filtres des profils selon la categories 
const filterButtons = document.querySelectorAll(".filter-btn");
const profiles = document.querySelectorAll(".profile");

filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        const category = this.getAttribute("data-category");

        // changer le style du bouton actif
        filterButtons.forEach(btn => {
            btn.classList.remove("btn-primary");
            btn.classList.add("btn-outline-primary");
        });

        this.classList.remove("btn-outline-primary");
        this.classList.add("btn-primary");

        // filtrer les profils
        profiles.forEach(profile => {
            if (category === "all" || profile.classList.contains(category)) {
                profile.style.display = "block";
            } else {
                profile.style.display = "none";
            }
        });
    });
});

// ===== VALIDATION FORMULAIRE CONTACT =====

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let isValid = true;

        const nom = document.getElementById("nom");
        const prenom = document.getElementById("prenom");
        const email = document.getElementById("email");
        const sujet = document.getElementById("sujet");
        const message = document.getElementById("message");
        const successMessage = document.getElementById("successMessage");

        // regex email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // reset erreurs
        [nom, prenom, email, sujet, message].forEach(field => {
            field.classList.remove("is-invalid");
        });

        // vérifications
        if (nom.value.trim() === "") {
            nom.classList.add("is-invalid");
            isValid = false;
        }

        if (prenom.value.trim() === "") {
            prenom.classList.add("is-invalid");
            isValid = false;
        }

        if (!emailRegex.test(email.value.trim())) {
            email.classList.add("is-invalid");
            isValid = false;
        }

        if (sujet.value === "") {
            sujet.classList.add("is-invalid");
            isValid = false;
        }

        if (message.value.trim().length < 20) {
            message.classList.add("is-invalid");
            isValid = false;
        }

        // succès
        if (isValid) {
            successMessage.classList.remove("d-none");
            form.reset();

            setTimeout(() => {
                successMessage.classList.add("d-none");
            }, 3000);
        }
    });
}