window.addEventListener("load", () => {
    document.querySelector(".menu-btn").addEventListener("click", () => {
        document.querySelector(".mobile-menu").classList.toggle("active");
    });
});