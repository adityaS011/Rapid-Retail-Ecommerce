import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className='box'>
            <div className="logo">
              <ion-icon name="storefront"></ion-icon>
              <h1>Rapid Retail</h1>
            </div>
            <p>Welcome to Rapid Retail, your one-stop destination for sustainable and organic products. We believe in providing high-quality items while promoting environmental consciousness.</p>
          </Col>
          <Col md={3} sm={5} className='box'>
            <h2>About Us</h2>
            <ul className="footer-list">
              <li>Our Mission</li>
              <li>Values & Ethics</li>
              <li>Community Initiatives</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
            
          </Col>
          <Col md={3} sm={5} className='box'>
            <h2>Customer Care</h2>
            <ul className="footer-list">
              <li>Help Center</li>
              <li>How to Shop Sustainably</li>
              <li>Order Tracking</li>
              <li>Corporate Sustainability</li>
              <li>Returns & Exchanges</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className='box'>
            <h2>Contact Us</h2>
            <ul className="footer-list">
              <li>BBD Green City, Lucknow, India</li>
              <li>Email: support@rapidretail.com</li>
              <li>Phone: +91 123 456 7890</li>
            </ul>
          </Col>
        </Row>
        
        <hr />
        <center>Copywrite <b> @Rapid Retail </b> by Aditya Singh</center>
      </Container>
    </footer>
  );
};

export default Footer;
