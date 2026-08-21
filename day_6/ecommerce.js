let products = [];
const getProductsData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    products = data.products;
    console.log(products);

    products.map((product) => {
        const productContainer = document.getElementById("products-container");
        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = "product-image-here";

        const title = document.createElement("h1");
        title.innerText = product.title;

        const price = document.createElement("h2");
        price.innerText = `$${product.price}`;

        const decrementBtn = document.createElement("button");
        decrementBtn.innerText = "-";

        const incrementBtn = document.createElement("button");
        incrementBtn.innerText = "+";

        const span = document.createElement("span");
        span.innerText = "ADD";

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(decrementBtn);
        div.appendChild(span);
        div.appendChild(incrementBtn);

        productContainer.appendChild(div);

        let count = 0;
        incrementBtn.addEventListener("click", () => {
            count++;
            span.innerText = count;
            localStorage.setItem("image",product.thumbnail);
            localStorage.setItem("title",product.title);
            localStorage.setItem("price",product.price);
        })

        decrementBtn.addEventListener("click", () => {
            if (count > 0) {
                count--;
                span.innerText = count;
            }
        })


    })
}
getProductsData();
