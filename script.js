const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {
  if (envelope.classList.contains("open")) return;

  // Envelope open animation
  envelope.classList.add("open");

  // Change button text
  openBtn.querySelector("span").textContent = "OPENING...";

  // Animation শেষ হওয়ার পর letter page open হবে
  setTimeout(() => {
    window.location.href = "letter.html";
  }, 1200);
});