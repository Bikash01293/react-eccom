import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import Product from "./Product.js";
import Order from "./Order.js";
import About from "./About.js";
import Login from "./Login.js";
import SignUp from "./SignUp";
import LogOut from "./LogOut.js";
import PageNotFound from "./PageNotFound.js";
import Protected from "./Protected.js";
export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to={"/home"}>
                GrabKart
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link eventKey={1} as={Link} to={"/home"}>
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
                  <Nav.Link as={Link} to="/signup">
                    SignUp
                  </Nav.Link>
                  <Nav.Link eventKey={1} as={Link} to="/logout">
                    Logout
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
            <Route path="/logout" element={<LogOut />} exact  />
            <Route path="/home" element={<Protected cmp={Home} exact />} />
            <Route
              path="/product"
              element={<Protected cmp={Product} exact />}
            />
            <Route path="/order" element={<Protected cmp={Order} exact />} />
            <Route path="/about" element={<Protected cmp={About} exact />} />
            <Route path="/" element={<Login />} exact />
            <Route path="*" element={<PageNotFound />} exact />
          </Routes>
        </div>
      </Router>
    );
  }
}
