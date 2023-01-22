import React, {useState} from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function Search() {
  const [vin, setVin] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    // FETCH REQUEST
    // PASS RESULTS DOWN AS PROPS
    // NAVIGATE TO RESULT PAGE
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
