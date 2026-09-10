document.addEventListener("DOMContentLoaded", function () {
  // Navigation Links: 'Projects' changed to 'Education'
  const navLinks = [
    { title: "Home", url: "index.html" },
    { title: "About", url: "about.html" },
    { title: "Education", url: "education.html" },
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

      // Highlight active link
      if (window.location.pathname.endsWith(link.url)) {
        a.style.borderBottom = "2px solid #c71585";
      }

      li.appendChild(a);
      ul.appendChild(li);
    });

    navContainer.appendChild(ul);
  }
});
