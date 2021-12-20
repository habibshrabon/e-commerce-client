import React from "react";
import Testimonials from "../../Dashboard/Testimonial/Testimonials";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Products from "../Products/Products/Products";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
