// Theme Toggle (Claro / Escuro)
const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    if (themeToggle) themeToggle.setAttribute("aria-checked", "true");
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        if (currentTheme === "light") {
            document.documentElement.removeAttribute("data-theme");
            themeToggle.setAttribute("aria-checked", "false");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            themeToggle.setAttribute("aria-checked", "true");
            localStorage.setItem("theme", "light");
        }
    });
}

// Toggle Mobile Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}));

// Highlight active menu item on scroll
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("href").includes(current)) {
            item.classList.add("active");
        }
    });
});
