// const url =
//   "https://shein-xi-yin-data-service.p.rapidapi.com/product/get_goods_details?goods_id=14738124&country=US&language=en&currency=USD";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "fe056432ecmsh3fbb7f0d42e44b5p1b5b19jsn7353f6fdd91d",
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
function storeApiTest() {
  fetch("https://65544e5463cafc694fe650bf.mockapi.io/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        // get all elemetns we need
        let container = document.querySelector(".container");
        let productCard = document.createElement("div");
        let productImage = document.createElement("div");
        let productDetails = document.createElement("div");
        let Image = document.createElement("img");
        let productTitle = document.createElement("h2");
        let productPrice = document.createElement("h4");
        let productBtn = document.createElement("button");
        //Append Child
        container.appendChild(productCard);
        productCard.appendChild(productImage);
        productImage.appendChild(Image);
        productCard.appendChild(productDetails);
        productDetails.appendChild(productTitle);
        productDetails.appendChild(productPrice);
        productDetails.appendChild(productBtn);

        // Add class to elements
        container.classList.add("container");
        productCard.classList.add("product-card");
        productDetails.classList.add("product-details");
        productImage.classList.add("product-image");
        productTitle.classList.add("product-title");
        productPrice.classList.add("product-price");
        productBtn.classList.add("add-to-cart-btn");
        // show data
        Image.src = `${data[i].urlimg}`;
        productTitle.innerText = `${data[i].name}`;
        // productPrice.innerText = `$${data[i].price}`;
        productBtn.innerText = "اضف إلى حقيبة التسوق";
      }
    });
}

// Calling Function
storeApiTest();
