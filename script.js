// Smooth scrolling
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Form submission alert
document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("✅ Message sent successfully!");
});

// Dark Mode Toggle
const toggle = document.getElementById("dark-mode-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Change button icon
  toggle.textContent = document.body.classList.contains("dark") ? "☀" : "🌙";
});
