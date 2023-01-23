import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const login = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential)=>{
			console.log(userCredential)
			navigate('/')
		})
		.catch((error)=>{
			console.log(error)
		})
	}
  return (
		<Container className='p-5'>
			<Container
				className='p-5 mx-auto my-5 rounded-5'
				style={{ width: '600px', boxShadow: '0 0 5px black' }}>
				<h1 className='text-center pt-5 pb-2'>Login</h1>
				<Form onSubmit={login}>
					<Form.Group className='my-3' controlId='formEmail'>
						<Form.Label> Email Address </Form.Label>
						<Form.Control
							type='email'
							placeholder='example@mail.com'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className='my-3' controlId='formPassword'>
						<Form.Label> Password </Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>
					<Container className='d-flex justify-content-between'>
						<Link to='/signup'>I'm not a member yet!</Link>
						<Button type='submit'>Login</Button>
					</Container>
				</Form>
			</Container>
		</Container>
	);
}

export default Login;
