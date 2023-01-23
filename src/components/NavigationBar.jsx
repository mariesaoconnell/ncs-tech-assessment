import { Navbar, Nav, Container } from "react-bootstrap";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../components/auth/firebase';
import Home from "./Home";

function NavigationBar() {
    const [authUser, setAuthUser] = useState(null);
    <Home authUser={authUser}/>

		useEffect(() => {
			const listen = onAuthStateChanged(auth, (user) => {
				if (user) {
					setAuthUser(user);
				} else {
					setAuthUser(null);
				}
			});
			return () => {
				listen();
			};
		}, []);

		const userSignOut = () => {
			signOut(auth)
				.then(() => {
					console.log('sign out was successful');
				})
				.catch((error) => console.log(error));
		};
  return (
    <Navbar bg="light" expand="lg">
      {authUser ?
        <Container>
          <Navbar.Brand>
            <>{`Welcome ${authUser.email}`}</>
          </Navbar.Brand>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link onClick={userSignOut}>Logout</Nav.Link>

        </Container>
        :
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Nav.Link href="/login">Login</Nav.Link>
        </Container>
      }
    </Navbar>
  );
}

export default NavigationBar;
