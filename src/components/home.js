import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import kitchen from "../assets/kitchen2.jpeg"
import view from "../assets/streetmiami.jpg"


function Home() {
  return (
    <Container>
      <h1 className="mt-3">Home</h1>
      <div className="mt-3">
        <Link to="/" className="btn btn-primary mr-3">Home</Link>
        <Link to="/about" className="btn btn-primary mr-3">About</Link>
        <Link to="/contact" className="btn btn-primary mr-3">Information</Link>
      </div>
      <Row className="mt-3">
        <Col>
          <img src={view} alt="Street VIew of Airbnb" style={{ height: '423px' }} className="img-fluid" />
        </Col>
        <Col>
          
        </Col>
      </Row>
      <h2 className="mt-3">Airbnb by the ocean</h2>
      <Row className="mt-3">
        <Col>
          <p>
            This is located in the heart of Miami. Minutes away from the beaches, nightlife, and restaurants.  
          </p>
        </Col>
        <div>
        <Col>
          <img src={kitchen} alt="Spacious kitchen with all you can need" className="img-fluid" />
        </Col>
        </div>
      </Row>  
    </Container>
  );
}

export default Home;