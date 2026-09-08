document.addEventListener("DOMContentLoaded", () => {
    // Select links inside the top navbar
    const navLinks = document.querySelectorAll("#top-nav ul li a");
    const currentPath = window.location.pathname.split("/").pop();

    // Highlight active link based on current URL path
    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
            link.classList.add("active-page");
        }
    });
});
