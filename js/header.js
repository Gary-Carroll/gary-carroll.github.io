function loadHeader() {
  const headerHTML = `
    <header>
      <div class="header-content">
        <div class="header-content-left">
          <h1><a href="index.html">Gary Carroll</a></h1>
        </div>
        <nav>
          <ul>
            <li><a href="index.html">About me</a></li>
            <!-- <li><a href="cv.html">CV</a></li> -->
            <li><a href="projects.html">Projects</a></li>
            <li><a href="skills.html">Skills</a></li>
          </ul>
        </nav>
      </div>
      <div class="header-line"></div>
    </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.classList.add("active");
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadHeader);
} else {
  loadHeader();
}
