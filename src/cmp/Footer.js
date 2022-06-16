import React from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiShoppingCart,
  FiHome,
  FiPhoneCall,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { BiEnvelope } from "react-icons/bi";
import { IoIosLink } from "react-icons/io";
import { RiProductHuntLine } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div>
      <div
        style={{ backgroundColor: "black" }}
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <Link to="//www.facebook.com/" target="_blank" className="ml-5">
              <FiFacebook />
            </Link>
            <Link
              to="//twitter.com/i/flow/login"
              target="_blank"
              className="ml-5"
            >
              <FiTwitter />
            </Link>
            <Link to="//google.com" target="_blank" className="ml-5">
              <FcGoogle />
            </Link>
            <Link to="//instagram.com" target="_blank" className="ml-5">
              <FiInstagram />
            </Link>
            <Link to="//linkedin.com" target="_blank" className="ml-5">
              <FiLinkedin />
            </Link>
            <Link to="//github.com" target="_blank" className="ml-5">
              <FiGithub />
            </Link>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <FiShoppingCart /> GrabKart
                </h6>
                <p>
                  GrabKart is an elegant with extremely customizable admin
                  settings. Great as a starting point for your online Business.
                  GrabKart greatly suitable for shopping, Digital, Mobile, Bags,
                  Shoes, Accessories, and any kind of eCommerce shops.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <RiProductHuntLine /> Products
                </h6>
                <p>
                  <Link to="#!" className="text-reset">
                    Fruits
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    Vegetables
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <IoIosLink /> Useful links
                </h6>

                <p>
                  <Link to="#!" className="text-reset">
                    Support
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    Help
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <RiContactsLine /> Contact
                </h6>
                <p>
                  <FiHome /> Bhubaneswar, Orissa, India
                </p>
                <p>
                  <BiEnvelope /> shop@grabkart.com
                </p>
                <p>
                  <FiPhoneCall /> + 916209845789
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright:{" "}
          <Link className="text-reset fw-bold" to="#">
            GrabKart.com
          </Link>
        </div>
      </div>
    </div>
  );
}
