import { Form, Button, Container } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from './firebase';
import { Link } from 'react-router-dom';

function SignUp() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// 'signup' IS THE FUNCTION RUN ON THE FORM'S SUBMISSION. WHEN THE FORM IS SUBMITTED, 'signup' PREVENTS A PAGE REFRESH AND USES FIREBASE'S 'createUserWithEmailAndPassword' TO CREATE A NEW USER WITH THE INFORMATION SUBMITTED IN THE FORM
	const signup = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log(userCredential);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<Container className='p-5 vertically-align'>
			<Container
				className='p-5 mx-auto my-5 rounded-5'
				style={{
					width: '600px',
					boxShadow: '0 0 10px 2px black',
					backgroundColor: 'rgba(255, 255, 255, .25)',
				}}>
				<h1 className='text-center pt-5 pb-2 hunters' style={{ fontSize: '100px' }}>
					{' '}
					Sign Up{' '}
				</h1>
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
					<Container className='d-flex pb-5 justify-content-between'>
						<Link to='/login'>I'm already a member!</Link>
						<Button type='submit'>Sign Up</Button>
					</Container>
				</Form>
			</Container>
		</Container>
	);
}

export default SignUp;
