import React from "react";

const Products = ({ products, addToCart }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "0px",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            textAlign: "center",
          }}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{
              width: "100%",
              height: "250px",
              objectFit: "contain",
            }}
          />

          <h2>{product.title}</h2>

          <p>{product.price}$</p>

          <button
            onClick={() => addToCart(product)}
            style={{
              padding: "8px 20px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;