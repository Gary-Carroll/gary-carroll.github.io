function loadFooter() {
  const currentYear = new Date().getFullYear();
  
  const footerHTML = `
    <footer>
      <p class="center-align">
        &copy; ${currentYear} Gary Carroll
        <a href="https://github.com/Gary-Carroll" target="_blank">
          <img src="images/github.png" alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/garymcarroll/" target="_blank">
          <img src="images/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="#top" class="back-to-top">
          <span class="arrow">&#8679;</span>
          <span class="back-to-top-text">Back to top</span>
        </a>
      </p>
    </footer>
  `;
  document.body.insertAdjacentHTML("beforeend", footerHTML);
  
  const backToTop = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTop.style.visibility = 'visible';
      backToTop.style.opacity = '1';
    } else {
      backToTop.style.visibility = 'hidden';
      backToTop.style.opacity = '0';
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadFooter);
} else {
  loadFooter();
}