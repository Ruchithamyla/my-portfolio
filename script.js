// Create the button
const backToTopBtn = document.createElement("button");
backToTopBtn.id = "backToTop";
backToTopBtn.textContent = "↑";
document.body.appendChild(backToTopBtn);

// Style the button (can also be done in CSS file)
const style = document.createElement("style");
style.textContent = `
  #backToTop {
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: none;
    background-color: #00bcd4;
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 18px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    z-index: 1000;
    transition: opacity 0.3s ease;
  }
  #backToTop:hover {
    background-color: #0097a7;
  }
`;
document.head.appendChild(style);

// Show/hide the button on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Scroll to top on click
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

