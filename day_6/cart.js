const cartConatiner = document.getElementById("cart-container");
const div = document.createElement("div");

const img = document.createElement("img");
img.src = localStorage.getItem("image");
img.alt = "product-img";

const title = document.createElement("h1");
title.innerText = localStorage.getItem("title");

const price = document.createElement("h2");
price.innerText = localStorage.getItem("price");

div.appendChild(img);
div.appendChild(title);
div.appendChild(price);
cartConatiner.appendChild(div);
