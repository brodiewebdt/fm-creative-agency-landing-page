const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-list");

toggle.addEventListener("click", function () {
    if (menu.classList.contains("active")) {
        this.setAttribute("aria-expanded", "false");
        this.classList.remove("open");
        menu.classList.remove("active");
    } else {
        menu.classList.add("active");
        this.setAttribute("aria-expanded", "true");
        this.classList.add("open");
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 700) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.classList.remove("open");
        menu.classList.remove("active");
    }
});
