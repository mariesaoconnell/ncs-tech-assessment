import React, {useState} from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [vin, setVin] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    // NAVIGATE TO RESULT PAGE
    navigate('/results/' + vin)
  }
  return (
    <Container>
      <h1>Search</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Search a VIN</Form.Label>
          <Form.Control
            placeholder='Search a VIN Number'
            type='text'
            onChange={(e) => setVin(e.target.value)}
          />
        </Form.Group>
        <Button type='submit'>Search</Button>
      </Form>
    </Container>
  );
}

export default Search;
