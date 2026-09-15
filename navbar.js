document.addEventListener("DOMContentLoaded", () => {

    // Navigation items
    const navItems = [
        { name: "About Me", url: "index.html" },
        { name: "Education", url: "education.html" },
        { name: "Experience", url: "experience.html" },
        { name: "Contact", url: "contact.html" }
    ];

    // Find the navigation area
    const nav = document.getElementById("main-nav");

    // Create navigation links
    navItems.forEach(item => {
        const link = document.createElement("a");

        link.textContent = item.name;
        link.href = item.url;

        // Highlight the current page
        if (window.location.pathname.endsWith(item.url)) {
            link.classList.add("active");
        }

        nav.appendChild(link);
    });

});
