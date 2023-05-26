const app = document.getElementById("app");

fetch("https://63f5d86059c944921f67a58c.mockapi.io/products")
    .then((response) => response.json())
    .then((data) => {
        const products = data.map((product) => `<div>${product.name}</div>`).join("");
        app.innerHTML = products;
    })
    .catch((error) => console.log(error));