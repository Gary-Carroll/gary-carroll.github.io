function initSmoothScroll() {
  const getHeaderHeight = () => {
    const header = document.querySelector("header");
    const headerLine = document.querySelector(".header-line");
    return header && headerLine
      ? header.offsetHeight + headerLine.offsetHeight
      : 0;
  };

  const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const headerHeight = getHeaderHeight();
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = targetPosition - headerHeight - 20;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  const handleLinkClick = (selector, handler) => {
    document.addEventListener("click", (e) => {
      const link = e.target.closest(selector);
      if (link) {
        e.preventDefault();
        handler(link);
      }
    });
  };

  handleLinkClick("a.back-to-top", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  handleLinkClick('a[href^="#skill"]', (link) => {
    const targetId = link.getAttribute("href").substring(1);
    smoothScrollTo(targetId);
  });

  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href*="skills.html#skill"]');
    if (link && window.location.pathname.includes("skills.html")) {
      e.preventDefault();
      const targetId = link.getAttribute("href").split("#")[1];
      smoothScrollTo(targetId);
    }
  });

  const scrollToHashOnLoad = () => {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      setTimeout(() => smoothScrollTo(targetId), 150);
    }
  };

  window.addEventListener("load", scrollToHashOnLoad);

  if (document.readyState === "complete") {
    scrollToHashOnLoad();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSmoothScroll);
} else {
  initSmoothScroll();
}
