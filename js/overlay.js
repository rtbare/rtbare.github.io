function openNav() {
  document.getElementById("myNav").style.display = "block";
  document.getElementById("overlay-content").style.display = "block";
  document.getElementById("hamburger").style.display = "none";
}

function closeNav() {
  document.getElementById("hamburger").style.display = "flex";
  document.getElementById("myNav").style.display = "none";
  document.getElementById("overlay-content").style.display = "none";
}