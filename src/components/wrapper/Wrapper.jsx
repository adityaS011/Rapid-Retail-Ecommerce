import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { serviceData } from "../../utils/products";
import "./style.css";

const Wrapper = () => {
  return (
    <section className="wrapper background py-5">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="section-title">Our Features</h2>
          </Col>
        </Row>
        <Row>
          {serviceData.map((val, index) => (
            <Col key={index} md={3} sm={6} className="feature" style={{ backgroundColor: val.bg }}>
              <div className="icon">{val.icon}</div>
              <h3>{val.title}</h3>
              <p>{val.subtitle}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Wrapper;
