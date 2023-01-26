import React, {useState} from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [vin, setVin] = useState('');
  const navigate = useNavigate();

	// HANDLES FORM SUBMISSIONS, PREVENTS PAGE REFRESH, NAVIGATES USER TO RESULT PAGE
  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate('/result/' + vin)
  }

  return (
		<Container className='p-5'>
			<Form
				className="p-5"
				onSubmit={handleSubmit}>
				<Form.Group>
					<Row>
						<Col s='auto' lg='2'>
							<Form.Label>Search a VIN</Form.Label>
						</Col>
						<Col>
							<Form.Control
								placeholder='Search a VIN Number'
								type='text'
								onChange={(e) => setVin(e.target.value)}
								minLength='17'
								maxLength='17'
								required
							/>
						</Col>
						<Col s='auto' lg='2'>
							<Button type='submit'>Search</Button>
						</Col>
					</Row>
				</Form.Group>
			</Form>
		</Container>
	);
}

export default Search;
