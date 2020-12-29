document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});
document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});
// javascript for toggling the food section
var i;
for (i = 0; i < 8; i++) {
  const toggleBtn = document.getElementById(`toggleBtn${i}`);
  const togglediv = document.getElementById(`foods${i}`);
  toggleBtn.addEventListener("click", function () {
    toggleBtn.classList.toggle("rotateBtn");
    if (togglediv.style.display === "none") {
      togglediv.style.display = "grid";
    } else {
      togglediv.style.display = "none";
    }
  });
}
// Coloring the heart
var flag = 0;
const hearts = document.querySelectorAll(".top-icons");
hearts.forEach((element) => {
  element.addEventListener("click", function () {
    if (flag === 0) {
      this.src = "images/heart2.png";
      flag = 1;
    } else {
      this.src = "images/heart.png";
      flag = 0;
    }
  });
});
