import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/hKWtftw/slideshow-2-67033.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="font-color">
            <h2>SALE UP TO 30% OFF</h2>
            <Link to="/collections">
              <button className="btn btn-style">SHOP NOW</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/8xnYX73/slideshow-1-17171.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="font-color">
            <h2>SALE UP TO 30% OFF</h2>
            <button className="btn btn-style">SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/C23hSbX/slideshow-3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="font-color">
            <h2>SALE UP TO 30% OFF</h2>
            <button className="btn btn-style">SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
