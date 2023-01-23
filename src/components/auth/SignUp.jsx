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
    <Container>
      <h1>Sign Up</h1>
      <Form onSubmit={signup}>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
          type='email'
          placeholder='Example@mail.com'
          onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label> Password </Form.Label>
          <Form.Control
          type='password'
          placeholder='Password'
          onChange={(e)=> setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Sign Up</Button>
      </Form>
    </Container>
  );
}

export default SignUp;
