import { Navbar, Nav, Container } from "react-bootstrap";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../auth/firebase';
import { useNavigate } from "react-router-dom";

import ModeToggle from "./ModeToggle";

function NavigationBar({toggleTheme, theme}) {
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate('');

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
          navigate('/login')
				})
				.catch((error) => console.log(error));
		};
  return (
		<Navbar bg='light' expand='lg'>
			{authUser ? (
				<Container>
					<Navbar.Brand>
						<>{`Welcome ${authUser.email}`}</>
					</Navbar.Brand>
					<Nav.Link href='/'>Home</Nav.Link>
					<Nav.Link onClick={userSignOut}>Logout</Nav.Link>
					<Nav.Link>
						<ModeToggle toggleTheme={toggleTheme} theme={theme} />
					</Nav.Link>
				</Container>
			) : (
				<Container>
					<Navbar.Brand>VIN Finder</Navbar.Brand>
					<Nav.Link href='/login'>Login</Nav.Link>
				</Container>
			)}
		</Navbar>
	);
}

export default NavigationBar;
