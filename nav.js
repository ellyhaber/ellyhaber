document.addEventListener("DOMContentLoaded", () => {
    // Navigation Links Data
    const links = [
        { name: "About Me", url: "index.html" },
        { name: "Education", url: "education.html" },
        { name: "Experience", url: "experience.html" },
        { name: "Contact", url: "contact.html" }
    ];

    // Select or create primary navigation container
    const navContainer = document.getElementById("primary-nav");

    if (navContainer) {
        const ul = document.createElement("ul");
        ul.className = "nav-list";

        const currentPath = window.location.pathname.split("/").pop();

        links.forEach(link => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = link.url;
            a.textContent = link.name;

            // Highlight current page
            if (currentPath === link.url || (currentPath === "" && link.url === "index.html")) {
                a.classList.add("active-page");
            }

            li.appendChild(a);
            ul.appendChild(li);
        });

        navContainer.appendChild(ul);
    }
});
