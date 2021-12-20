import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar
        className="header-bg"
        style={{ position: "absolute", left: 0, top: 0, right: 0, zIndex: 3 }}
        // bg="black"
        expand="lg"
      >
        <Container>
          <Navbar.Brand
            as={Link}
            style={{ fontSize: "30px" }}
            className="text-white"
            to="/"
          >
            <span className="web-name">E-COMMERCE</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="fw-bold text-black" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link
                className="fw-bold text-black"
                as={Link}
                to="/collections"
              >
                Collections
              </Nav.Link>
              <Nav.Link className="fw-bold text-black" as={Link} to="/aboutUs">
                About Us
              </Nav.Link>
              <Nav.Link className=" fw-bold text-black" as={Link} to="/contact">
                Contact
              </Nav.Link>
              {/* {user?.email && (
                <Nav.Link className=" text-white" as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
              )}
              {user?.email ? (
                <Nav.Link className="text-white" onClick={logOut}>
                  <FontAwesomeIcon
                    className="text-danger"
                    icon={faSignOutAlt}
                  />
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link className="text-white" as={Link} to="/login">
                  Login
                </Nav.Link>
              )} */}
              {user?.email ? (
                <>
                  <Nav.Link
                    className="fw-bold text-black"
                    as={Link}
                    to="/dashboard"
                  >
                    Dashboard
                  </Nav.Link>
                  <Nav.Link className="fw-bold text-black" onClick={logOut}>
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faSignOutAlt}
                    />
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="active ms-lg-5 p-1 px-4 btn btn-warning text-black border-box"
                >
                  Login
                </Nav.Link>
              )}
              <Nav.Link className=" px-3 text-white">
                {user?.displayName}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
