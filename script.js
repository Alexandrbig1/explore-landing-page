const container = document.querySelector(".container");
const menuIcon = document.querySelector(".menu-icon");
const headingRight = document.querySelector(".main-heading-right");
const headingLeft = document.querySelector(".main-heading-left");

menuIcon.addEventListener("click", () => {
  container.classList.toggle("navigate");
});

const responsiveDesign = () => {
  if (window.innerWidth <= 700) {
    headingRight.style.display = "none";
    headingLeft.textContent = "explore";
  } else {
    headingRight.style.display = "block";
    headingLeft.textContent = "exp";
  }
};

window.addEventListener("resize", () => {
  responsiveDesign();
});

responsiveDesign();
