import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";
import { Link } from "react-router-dom";
const SlideCard = ({ title, desc, cover }) => {
  return (
    <Container className='box bg-light p-4'>
      <Row>
        <Col md={7}>
          <h1 className='text-dark'>{title}</h1>
          <p className='text-muted'>{desc}</p>
         <Link to="/shop"><button className='btn btn-primary'>Visit Collections</button></Link> 
        </Col>
        <Col md={5}>
          <img src={cover} alt="#" className='img-fluid' />
        </Col>
      </Row>
    </Container>
  );
}

export default SlideCard;
