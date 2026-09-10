document.addEventListener("DOMContentLoaded", function () {
  // Define your navigation links here
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

      // Highlight the active page link
      if (window.location.pathname.endsWith(link.url)) {
        a.style.textDecoration = "underline";
      }

      li.appendChild(a);
      ul.appendChild(li);
    });

    navContainer.appendChild(ul);
  }
});
