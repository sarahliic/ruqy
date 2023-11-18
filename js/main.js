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

// const url = "https://ali-express1.p.rapidapi.com/categories";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
//     "X-RapidAPI-Host": "ali-express1.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

// const url =
//   "https://shein-xi-yin-data-service.p.rapidapi.com/product/get_goods_details?goods_id=14738124&country=US&language=en&currency=USD";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
//     "X-RapidAPI-Host": "shein-Xi-Yin-data-service.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
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
