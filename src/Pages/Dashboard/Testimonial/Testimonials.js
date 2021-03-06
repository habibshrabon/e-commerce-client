import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Testimonial from "./Testimonial";
import "./Testimonial.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://aqueous-caverns-16953.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="testimonial">
      <Container>
        <h1 className="text-center py-5">Customers Review</h1>
        <div className="row">
          {reviews.map((review) => (
            <Testimonial review={review} key={review._id}></Testimonial>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
