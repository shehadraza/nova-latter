const aboutBtn =
  document.getElementById("aboutBtn");


aboutBtn.addEventListener("click", () => {

  // Start small car animation
  aboutBtn.classList.add("drive");

  // Prevent double click
  aboutBtn.disabled = true;


  // Open About Me after animation
  setTimeout(() => {

    window.location.href = "about.html";

  }, 1600);

});