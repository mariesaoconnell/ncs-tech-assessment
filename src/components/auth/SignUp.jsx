import { Form, Button, Container } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from './firebase';


function SignUp(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      console.log(userCredential)
    })
    .catch((error)=>{
      console.log(error)
    });
  }
  return (
    <Container className='p-5'>
      <Container
        className='p-5 mx-auto my-5 rounded-5'
        style={{
          width: '600px',
          boxShadow:'0 0 5px black',}}>
        <h1 className='text-center pt-5 pb-2'> Sign Up </h1>
        <Form onSubmit={signup}>
          <Form.Group className='my-3'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
            type='email'
            placeholder='Example@mail.com'
            onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='my-3'>
            <Form.Label> Password </Form.Label>
            <Form.Control
            type='password'
            placeholder='Password'
            onChange={(e)=> setPassword(e.target.value)}
            />
          </Form.Group>
          <Container className='d-flex justify-content-end'>
            <Button type="submit">Sign Up</Button>
          </Container>
        </Form>
      </Container>
    </Container>
  );
}

export default SignUp;
