import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { signOut } from 'firebase/auth';
import { auth } from '../auth/firebase';
import { useNavigate } from "react-router-dom";
import ModeToggle from "./ModeToggle";

function NavigationBar({toggleTheme, theme, authUser}) {
	const navigate = useNavigate();

	const userSignOut = () => {
		signOut(auth)
			.then(() => {
				localStorage.removeItem('userToken')
				navigate('/login')
			})
			.catch((error) => console.log(error));
	};

  return (
		<Navbar
			className={theme === 'light' ? 'bg-light' : 'bg-dark'}
			expand='lg'
			fixed='top'>
			{authUser ? (
				<Container>
					<Navbar.Brand
						className={theme === 'light' ? 'text-dark' : 'text-light'}>
						<h3>{`Welcome ${authUser.email}`}</h3>
					</Navbar.Brand>
					<Nav.Link href='/'>Home</Nav.Link>
					<Nav.Link onClick={userSignOut}>Logout</Nav.Link>
					<Nav.Link>
						<ModeToggle toggleTheme={toggleTheme} theme={theme} />
					</Nav.Link>
				</Container>
			) : (
				<Container>
					<Navbar.Brand
						className={theme === 'light' ? 'text-dark' : 'text-light'}>
						VIN Finder
					</Navbar.Brand>
					<Nav.Link>
						<ModeToggle toggleTheme={toggleTheme} theme={theme} />
					</Nav.Link>
				</Container>
			)}
		</Navbar>
	);
}

export default NavigationBar;
