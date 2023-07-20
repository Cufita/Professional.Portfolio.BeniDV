document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll("nav a:not(:last-child)");
  const contentDiv = document.querySelector(".content");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const sectionName = this.textContent.toLowerCase();
      const contentText = getContentText(sectionName);
      animateContent(contentText);
    });
  });

  function getContentText(sectionName) {
    // Aquí puedes definir el contenido para cada sección del menú
    switch (sectionName) {
      case "about us":
        return `
          <h2>About Us</h2>
          <p>This is the About Us section.</p>
        `;
      case "services":
        return `
          <h2>Services</h2>
          <p>These are our services.</p>
        `;
      case "contact me":
        return `
          <h2>Contact Me</h2>
          <p>You can contact me here.</p>
        `;
      default:
        return "";
    }
  }

  function animateContent(contentText) {
    contentDiv.style.opacity = "0";
    setTimeout(() => {
      contentDiv.innerHTML = contentText;
      contentDiv.style.opacity = "1";
    }, 500); // El tiempo de transición, puedes ajustarlo según prefieras
  }
});
