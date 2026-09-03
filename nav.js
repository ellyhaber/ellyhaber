document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");
    const sideMenu = document.getElementById("side-menu");
    const menuOverlay = document.getElementById("menu-overlay");

    // Open Menu
    const openMenu = () => {
        sideMenu.classList.add("active");
        menuOverlay.classList.add("active");
    };

    // Close Menu
    const closeMenu = () => {
        sideMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
    };

    menuToggle.addEventListener("click", openMenu);
    menuClose.addEventListener("click", closeMenu);
    menuOverlay.addEventListener("click", closeMenu);

    // Close menu when pressing Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && sideMenu.classList.contains("active")) {
            closeMenu();
        }
    });

    // Highlight active link based on current page URL
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = sideMenu.querySelectorAll("ul li a");

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
            link.classList.add("active-page");
        }
    });
});
