/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-area py-5 ">
      <Container>
        <footer className="row">
          <div className="col-md-6 col-lg-3">
            <h3>About Us</h3>
            <p className="text-justify">
              E-Commerce is the largest virtual shopping mall across the
              country. E-Commerce has brought a whole new dimension in online
              shopping experience of Bangladesh. With the growing community of
              internet using people and online buyers.When you are busy all day
              long and trying to get rid of the hassle of shopping, there comes
              the E-Commerce, a trusted place for virtual shopping bringing your
              total shopping solution.
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>Pages</h3>
            <a className="text-white" href="/">
              Home
            </a>
            <br />
            <a className="text-white" href="/">
              About Us
            </a>
            <br />
            <a className="text-white" href="/">
              Our Collections
            </a>
            <br />
            <a className="text-white" href="/">
              Booking
            </a>
            <br />
            <a className="text-white" href="/">
              Blog
            </a>
            <br />
            <a className="text-white" href="/">
              Contacts
            </a>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>Maintance</h3>
            <a className="text-white" href="#">
              Any products
            </a>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>Contacts</h3>
            <h5>Cell: +088 017 7892 90</h5>
            <p>E-mail: admin@admin.com</p>
            <br />
            <p>Address: 152 Panthapath St. Dhaka-1208</p>
          </div>
        </footer>
        <div className="text-center">
          <p>Copyright © {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
