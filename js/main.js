//JavaScript for Toggle Menu
function showMenu() {
  const links = document.querySelector(".links");
  const barsIcon = document.querySelector(".fa-bars");
  const timesIcon = document.querySelector(".fa-times");

  links.style.display = "block";
  barsIcon.style.display = "none";
  timesIcon.style.display = "block";
}

function hideMenu() {
  const links = document.querySelector(".links");
  const barsIcon = document.querySelector(".fa-bars");
  const timesIcon = document.querySelector(".fa-times");

  links.style.display = "none";
  barsIcon.style.display = "block";
  timesIcon.style.display = "none";
}
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
