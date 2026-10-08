import React, { useEffect, useState } from "react";
import Products from "./Components/Products";

const App = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Products</h1>

      <Products
        products={products}
        addToCart={addToCart}
      />
    </div>
  );
};

export default App;