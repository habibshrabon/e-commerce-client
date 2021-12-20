import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const { _id, name, img, seller, price, stock } = product;
  return (
    <>
      <div className="col-md-4 mb-3 ">
        <div className="card h-100 card-bg shadow img-style">
          <img
            src={img}
            style={{ height: "275px" }}
            className="card-img-top justify-content-center align-items-center img-fluid"
            alt="img"
          />
          <div className="card-body px-2">
            <h3 className="card-title text-center">{name.slice(0, 20)}</h3>
            <p className="card-text">by: {seller}</p>
            <p className="card-text">Stock: {stock}</p>
            <div className="d-flex justify-content-between">
              <h4>Price: $ {price}</h4>
              <Link to={`/productDetails/${_id}`}>
                <button className="btn btn-style px-3">
                  ADD TO CART{" "}
                  <FontAwesomeIcon
                    className="text-danger"
                    icon={faChevronRight}
                  />
                  <FontAwesomeIcon
                    className="text-danger"
                    icon={faChevronRight}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
