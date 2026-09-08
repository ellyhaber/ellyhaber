document.addEventListener("DOMContentLoaded", () => {
    // Navigation items
    const navItems = [
        { name: "About Me", url: "index.html" },
        { name: "Education", url: "education.html" },
        { name: "Experience", url: "experience.html" },
        { name: "Contact", url: "contact.html" }
    ];

    const navContainer = document.getElementById("top-nav");

    if (navContainer) {
        const ul = document.createElement("ul");
        ul.className = "nav-list";

        const currentPath = window.location.pathname.split("/").pop();

        navItems.forEach(item => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = item.url;
            a.textContent = item.name;

            // Highlight current page
            if (currentPath === item.url || (currentPath === "" && item.url === "index.html")) {
                a.classList.add("active-page");
            }

            li.appendChild(a);
            ul.appendChild(li);
        });

        navContainer.appendChild(ul);
    }
});
