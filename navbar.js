document.addEventListener("DOMContentLoaded", () => {

    // Navigation pages
    const navItems = [
        { name: "About Me", url: "index.html" },
        { name: "Education", url: "education.html" },
        { name: "Experience", url: "experience.html" },
        { name: "Contact", url: "contact.html" }
    ];


    // Find both navigation areas
    const navAreas = document.querySelectorAll(".dynamic-nav");


    // Add navigation links
    navAreas.forEach(nav => {

        navItems.forEach(item => {

            const link = document.createElement("a");

            link.textContent = item.name;
            link.href = item.url;


            // Find current page
            const currentPage =
                window.location.pathname.split("/").pop() || "index.html";


            // Highlight current page
            if (currentPage === item.url) {
                link.classList.add("active");
            }


            // Add link to navigation
            nav.appendChild(link);

        });

    });

});
