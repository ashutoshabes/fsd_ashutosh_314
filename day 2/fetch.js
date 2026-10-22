const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    const products = data.products;

    const container = document.getElementById("products");

    products.map((data) => {
        const product = document.createElement("div");

        product.innerText = data.title;

        container.append(product);
    });
};

getProducts();