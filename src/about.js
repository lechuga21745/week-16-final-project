import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import downtown from "../assets/dtmiami.jpg" 
function About() {
  const [amenities, setAmenities] = useState([]);
  const [newAmenity, setNewAmenity] = useState({ name: '', description: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch amenities data from the API or local storage on component mount (dont forget to add api)
    
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAmenity({ ...newAmenity, [name]: value });
  };

  const addAmenity = () => {
    if (!newAmenity.name.trim() || !newAmenity.description.trim()) {
      // set error message if blank
      setErrorMessage('Both fields must be completed to add the amenity');
      return;
    }

    if (editIndex !== null) {
      // renders existing amenity
      const updatedAmenities = [...amenities];
      updatedAmenities[editIndex] = newAmenity;
      setAmenities(updatedAmenities);
      setEditIndex(null);
    } else {
      // Add new amenity
      setAmenities([...amenities, newAmenity]);
    }
    // Clear error message and input fields
    setErrorMessage('');
    setNewAmenity({ name: '', description: '' });
  };

  const deleteAmenity = (index) => {
    const updatedAmenities = [...amenities];
    updatedAmenities.splice(index, 1);
    setAmenities(updatedAmenities);
  };

  const editAmenity = (index) => {
    setEditIndex(index);
    setNewAmenity(amenities[index]);
  };

  return (
    <Container className="mt-5">
      <h1>About</h1>
      <div className="nav-buttons mt-3">
        <Link to="/" className="btn btn-primary mr-3">Home</Link>
        <Link to="/about" className="btn btn-primary mr-3">About</Link>
        <Link to="/contact" className="btn btn-primary mr-3">Information</Link>
      </div>
      <h2 className="mt-5">Downtown Miami</h2>
      {/* Image section */}
      <Row className="mt-3">
        <Col>
          <img src= {downtown}
          alt="Heart of Miami" className="img-fluid" />
        </Col>
      </Row>

      {/* Add Amenity form */}
      <h2 className="mt-5">Add Amenity</h2>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Control type="text" name="name" value={newAmenity.name} onChange={handleInputChange} placeholder="Amenity Name" />
          </Col>
          <Col>
            <Form.Control type="text" name="description" value={newAmenity.description} onChange={handleInputChange} placeholder="Description" />
          </Col>
          <Col>
            <Button variant="primary" onClick={addAmenity}>{editIndex !== null ? 'Update' : 'Add'} Amenity</Button>
          </Col>
        </Row>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      </Form>

      {/* Display Amenities */}
      <h2 className="mt-5">Amenities</h2>
      <Row className="mt-3">
        {amenities.map((amenity, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{amenity.name}</Card.Title>
                <Card.Text>{amenity.description}</Card.Text>
                <Button variant="danger" onClick={() => deleteAmenity(index)}>Delete</Button>
                <Button variant="primary" onClick={() => editAmenity(index)}>Edit</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default About;