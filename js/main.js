//JavaScript for Toggle Menu
const hamburgerIcon = document.getElementById("hamburger-icon");
const navbarLinks = document.getElementById("navbar-links");

function hideMenu() {
  navbarLinks.style.display = "none";
}

hamburgerIcon.addEventListener("click", function () {
  if (navbarLinks.style.display === "none") {
    navbarLinks.style.display = "flex";
  } else {
    navbarLinks.style.display = "none";
  }
});
// =========================================================
let container = document.querySelector(".container");

let apiKey = "FZkzlEs3EzRFDvYVCvDrdjQATKMTTZaJ";

function storeRuqyApi() {
  let imgaone = document.querySelector(".img-one");
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      json.map((item) => {
        let x = new Image();
        imgaone.src = item.image;
      });
    });
}

//calling function
storeRuqyApi();
