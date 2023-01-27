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
			<Form className='p-5' onSubmit={handleSubmit}>
				<Form.Group>
					<Row>
						<Col s='auto' lg='2'>
							<Form.Label className='times' style={{ fontSize: '25px' }}>
								Search a VIN
							</Form.Label>
						</Col>
						<Col>
							<Form.Control
								className='rounded-5'
								placeholder='Search a VIN Number'
								type='text'
								onChange={(e) => setVin(e.target.value)}
								minLength='17'
								maxLength='17'
								required
							/>
						</Col>
						<Col s='auto' lg='1'>
							<Button
								type='submit'
								className='rounded-5 px-4'
							>
								Search
							</Button>
						</Col>
					</Row>
				</Form.Group>
			</Form>
		</Container>
	);
}

export default Search;
