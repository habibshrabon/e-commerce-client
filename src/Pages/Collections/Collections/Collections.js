import React, { useEffect, useState } from "react";
import Collection from "../Collection/Collection";

const Collections = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://aqueous-caverns-16953.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="container mt-5 pt-5">
        <div className="text-center">
          <h2 className="fw-bold">Our Collections</h2>
          <p>Explore World, Lowest Rates, Guaranteed Services.</p>
          <hr />
          <div className="row">
            {products.map((product) => (
              <Collection key={product.id} product={product}></Collection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
