function addBackToTopAnchor() {
  const anchor = document.createElement("a");
  anchor.id = "top";
  document.body.insertBefore(anchor, document.body.firstChild);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", addBackToTopAnchor);
} else {
  addBackToTopAnchor();
}
