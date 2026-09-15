document.addEventListener("DOMContentLoaded", () => {

    const navItems = [
        { name: "About Me", url: "index.html" },
        { name: "Education", url: "education.html" },
        { name: "Experience", url: "experience.html" },
        { name: "Contact", url: "contact.html" }
    ];

    // Find all navigation areas
    const navAreas = document.querySelectorAll(".dynamic-nav");

    navAreas.forEach(nav => {

        navItems.forEach(item => {

            const link = document.createElement("a");

            link.textContent = item.name;
            link.href = item.url;

            // Highlight the current page
            const currentPage =
                window.location.pathname.split("/").pop() || "index.html";

            if (currentPage === item.url) {
                link.classList.add("active");
            }

            nav.appendChild(link);
        });

    });

});
