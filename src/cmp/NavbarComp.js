import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import Product from "./Product.js";
import Order from "./Order.js";
import About from "./About.js";
import Login from "./Login.js";
import SignUp from "./SignUp";
import PageNotFound from "./PageNotFound.js";
export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to={"/home"}>
                ShopKart
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={"/home"}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/product"}>
                    Product
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/order"}>
                    Cart
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/about"}>
                    About
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link eventKey={2} as={Link} to="/signup">
                    SignUp
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div>
          <Routes>
            <Route path="/login" element={<Login />} exact />
            <Route path="/signup" element={<SignUp />} exact />
            <Route path="/home" element={<Home />} exact />
            <Route path="/product" element={<Product />} exact />
            <Route path="/order" element={<Order />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/" element={<Home />} exact />
            <Route path="*" element={<PageNotFound />} exact />
          </Routes>
        </div>
      </Router>
    );
  }
}
