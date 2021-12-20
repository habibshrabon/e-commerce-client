import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="container mt-5">
        <div className="text-center">
          <h1 className="pt-5">Our Collections</h1>
          <p>Explore World, Lowest Rates, Guaranteed Services.</p>
          <hr />
          <div className="row">
            {products.slice(0, 6).map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
