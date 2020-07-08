import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"

import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col lg="4">
            <div className="footer-left">
              <div className="footer-logo">
                <Link to="/" className="navbar-brand text-light">
                  <span>e</span>-shop
                </Link>
              </div>
              <ul>
                <li>
                  <i className="fa fa-map-marker"></i> 60-49 Road 11378 Nairobi
                </li>
                <li>
                  <i className="fa fa-phone"></i>{" "}
                  <a href="tel:+254 746792699">+254 746792699</a>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>{" "}
                  <a href="mailto:muriithijames556@gmail.com">
                    muriithijames556@gmail.com
                  </a>
                </li>
              </ul>
              <div className="footer-social">
                <Link to="/">
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-instagram"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-pinterest"></i>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="footer-widget">
              <h5>Sitemap</h5>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">Shopping Cart</Link>
                </li>
                <li>
                  <Link to="/">About Us</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="4">
            <div className="newslatter-item">
              <h5>Join Our Newsletter Now</h5>
              <p>
                Get E-mail updates about our latest shop and special offers.
              </p>
              <form action="#" className="subscribe-form">
                <input type="email" placeholder="Enter Your Mail" />
                <button className="btn">Subscribe</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="copyright-reserved">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-text">
                Copyright © {new Date().getFullYear()} All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
