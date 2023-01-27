import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import AuthError from '../error-components/AuthError';
import '../../assets/styles/static-styles/AuthForms.css'

// HELPER FUNCTION GRABS THE MESSAGE FROM THE ERROR SO THAT IT CAN BE RENDERED IN THE FORM
const sliceError = (e) =>{
	let strError = e.toString();
	let start = strError.indexOf('(');
	let end = strError.indexOf(')');
	let newError = strError.slice(start+1, end)
	return newError
}

function Login({ setAuthUser }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const [error, setError] = useState();

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	// 'login' IS THE FUNCTION RUN ON THE FORM'S SUBMISSION. WHEN THE FORM IS SUBMITTED, 'login' PREVENTS A PAGE REFRESH AND UTILIZES FIREBASE'S 'signInWithEmailAndPassword' TO SIGN IN THE USER, CREATE A 'userToken' IN LOCAL STORAGE (PIVOTAL FOR THE 'ProtectRoute' TO FUNCTION), SET THE STATE FOR AUTH USER (PIVOTAL FOR PROPERLY NAVIGATING ONCE THE USER IS LOGGED IN) AND NAVIGATES THE USER TO PROTECTED ROUTE ONCE SUCCESSFULLY LOGGED IN
	const login = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				localStorage.setItem('userToken', userCredential.user.accessToken);
				setAuthUser(userCredential.user);
				navigate('/');
			})
			.catch((err) => {
				setError(sliceError(err));
				setShow(true);
				console.log(error);
			});
	};

	return (
		<Container className='p-5 mx-auto my-5 rounded-5 vertically-align auth-form-styling'>
			<h1
				className='text-center pt-5 pb-2 hunters'
				style={{ fontSize: '100px' }}>
				Login
			</h1>
			<Row>
				<Form onSubmit={login}>
					<Form.Group className='my-3' controlId='formEmail'>
						<Form.Label> Email Address </Form.Label>
						<Form.Control
							type='email'
							placeholder='example@mail.com'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group className='my-3' controlId='formPassword'>
						<Form.Label> Password </Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</Form.Group>
					<Container>
						<Row className='d-flex pb-5 justify-content-between'>
							<Col>
								<Link to='/signup'>I'm not a member yet!</Link>
							</Col>
							<Col sm={2}>
								<Button type='submit'>Login</Button>
							</Col>
						</Row>
						<Row>
							{error ? (
								<AuthError
									show={show}
									handleClose={handleClose}
									error={error}
								/>
							) : null}
						</Row>
					</Container>
				</Form>
			</Row>
		</Container>
	);
}

export default Login;
