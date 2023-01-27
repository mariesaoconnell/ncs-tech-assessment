import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from './firebase';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthError from '../error-components/AuthError';

import '../../assets/styles/static-styles/AuthForms.css';

// HELPER FUNCTION GRABS THE MESSAGE FROM THE ERROR SO THAT IT CAN BE RENDERED IN THE FORM
const sliceError = (e) =>{
	let strError = e.toString();
	let start = strError.indexOf('(');
	let end = strError.indexOf(')');
	let newError = strError.slice(start+1, end)
	return newError
}

function SignUp() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState();
	const [show, setShow] = useState(false);

	const navigate = useNavigate();
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	// 'signup' IS THE FUNCTION RUN ON THE FORM'S SUBMISSION. WHEN THE FORM IS SUBMITTED, 'signup' PREVENTS A PAGE REFRESH AND USES FIREBASE'S 'createUserWithEmailAndPassword' TO CREATE A NEW USER WITH THE INFORMATION SUBMITTED IN THE FORM
	const signup = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				signInWithEmailAndPassword(auth, email, password)
				localStorage.setItem('userToken', userCredential.user.accessToken);
				navigate('/')
				console.log(userCredential);
			})
			.catch((err) => {
				setError(sliceError(err))
				setShow(true);
				console.log(error);
			});
	};
	return (
		<Container className='p-5 mx-auto my-5 rounded-5 vertically-align auth-form-styling'>
			<h1
				className='text-center pt-5 pb-2 hunters'
				style={{ fontSize: '100px' }}>
				Sign Up
			</h1>
			<Row>
				<Form onSubmit={signup}>
					<Form.Group className='my-3'>
						<Form.Label>Email Address</Form.Label>
						<Form.Control
							type='email'
							placeholder='Example@mail.com'
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group className='my-3'>
						<Form.Label> Password </Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</Form.Group>
					<Container>
						<Row className='d-flex pb-5 justify-content-between'>
							<Col>
								<Link to='/login'>I'm already a member!</Link>
							</Col>
							<Col sm={2}>
								<Button type='submit'>Sign Up</Button>
							</Col>
						</Row>
						<Row>
							{error ? (
								<AuthError
									show={show}
									handleClose={handleClose} error = {error} />
							) : null}
						</Row>
					</Container>
				</Form>
			</Row>
		</Container>
	);
}

export default SignUp;
