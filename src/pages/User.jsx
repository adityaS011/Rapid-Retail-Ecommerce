import React from "react";
import { Container, Row, Col, Card, Form, Button, ListGroup } from "react-bootstrap";
import "../utils/user.css";

const UserDashboard = () => {
  return (
    <Container className="user-dashboard">
      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>User Information</Card.Title>
              <Card.Text>
                <strong>Welcome, John Doe!</strong>
                <br />
                <strong>Email:</strong> john.doe@example.com
                <br />
                <strong>Member Since:</strong> January 1, 2022
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Actions</Card.Title>
              <Card.Text>
                <Button variant="primary" className="mr-2">
                  View Profile
                </Button>
                <Button className="m-3" variant="secondary">Logout</Button>
              </Card.Text>
              <Form className="mt-3">
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>

                <Button variant="primary" className="mt-3" type="submit">
                  Update Profile
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Your Orders</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Order #12345 - Delivered</ListGroup.Item>
                <ListGroup.Item>Order #67890 - In Progress</ListGroup.Item>
                <ListGroup.Item>Order #54321 - Shipped</ListGroup.Item>
              </ListGroup>
              <Button variant="link" className="mt-2">
                View All Orders
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Notifications</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>New message from support</ListGroup.Item>
                <ListGroup.Item>Special offer: 10% off on your next purchase</ListGroup.Item>
              </ListGroup>
              <Button variant="link" className="mt-2">
                View All Notifications
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
