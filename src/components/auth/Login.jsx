import { Form, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import '../../assets/styles/static-styles/AuthForms.css'

function Login({ setAuthUser }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	// 'login' IS THE FUNCTION RUN ON THE FORM'S SUBMISSION. WHEN THE FORM IS SUBMITTED, 'login' PREVENTS A PAGE REFRESH AND UTILIZES FIREBASE'S 'signInWithEmailAndPassword' TO SIGN IN THE USER, CREATE A 'userToken' IN LOCAL STORAGE (PIVOTAL FOR THE 'ProtectRoute' TO FUNCTION), SET THE STATE FOR AUTH USER (PIVOTAL FOR PROPERLY NAVIGATING ONCE THE USER IS LOGGED IN) AND NAVIGATES THE USER TO PROTECTED ROUTE ONCE SUCCESSFULLY LOGGED IN
	const login = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				localStorage.setItem('userToken', userCredential.user.accessToken);
				setAuthUser(userCredential.user);
				navigate('/');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Container
			className='p-5 mx-auto my-5 rounded-5 vertically-align auth-form-styling'>
			<h1
				className='text-center pt-5 pb-2 hunters'
				style={{ fontSize: '100px' }}>
				Login
			</h1>
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
				<Container className='d-flex pb-5 justify-content-between'>
					<Link to='/signup'>I'm not a member yet!</Link>
					<Button type='submit'>Login</Button>
				</Container>
			</Form>
		</Container>
	);
}

export default Login;
