document.addEventListener("DOMContentLoaded", function () {
  // Update your site links here
  const navLinks = [
    { title: "Home", url: "index.html" },
    { title: "About", url: "about.html" },
    { title: "Projects", url: "projects.html" },
    { title: "Contact", url: "contact.html" }
  ];

  const navContainer = document.getElementById("main-nav");

  if (navContainer) {
    const ul = document.createElement("ul");

    navLinks.forEach(link => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = link.url;
      a.textContent = link.title;

      // Automatically underline active page
      if (window.location.pathname.endsWith(link.url)) {
        a.style.textDecoration = "underline";
      }

      li.appendChild(a);
      ul.appendChild(li);
    });

    navContainer.appendChild(ul);
  }
});
