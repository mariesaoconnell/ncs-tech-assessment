import React, {useState}from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { signOut } from 'firebase/auth';
import { auth } from '../auth/firebase';
import { useNavigate } from "react-router-dom";
import ModeToggle from "./ModeToggle";
import MyBot from '../chatbot-components';

import '../../assets/styles/static-styles/Navbar.css';


function NavigationBar({toggleTheme, theme, authUser}) {
	const navigate = useNavigate();

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// UTILIZES FIREBASE'S SIGN OUT FUNCTION, ONCE THE USER IS SIGNED OUT LOCAL STORAGE WILL DELETE THE USER'S TOKEN AND NAVIGATE THE USER TO '/login' WHICH DOES NOT REQUIRE A USER TO BE LOGGED IN TO VIEW- PIVOTAL FOR 'ProtectedRoute's FUNCTIONALITY.
	const userSignOut = () => {
		signOut(auth)
			.then(() => {
				localStorage.removeItem('userToken')
				navigate('/login')
			})
			.catch((error) => console.log(error));
	};

  return (
		<>
			<Navbar
				className={theme === 'light' ? 'bg-light' : 'bg-dark'}
				expand='lg'
				fixed='top'>
				{authUser ? (
					<Container className='times'>
						<Navbar.Brand
							className={theme === 'light' ? 'text-dark' : 'text-light'}>
							<h3>{`Welcome ${authUser.email}`}</h3>
						</Navbar.Brand>
						<Nav.Link
							href='/'
							style={{ fontSize: '25px' }}
							className={theme === 'light' ? 'text-dark' : 'text-light'}>
							Home
						</Nav.Link>
						<Nav.Link
							onClick={handleShow}
							style={{ fontSize: '25px' }}
							className={theme === 'light' ? 'text-dark' : 'text-light'}>
							FAQ Bot
						</Nav.Link>
						<Nav.Link
							onClick={userSignOut}
							style={{ fontSize: '25px' }}
							className={theme === 'light' ? 'text-dark' : 'text-light'}>
							Logout
						</Nav.Link>
						<Nav>
							<ModeToggle toggleTheme={toggleTheme} theme={theme} />
						</Nav>
					</Container>
				) : (
					<Container className='times'>
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
			<Container>
				<MyBot show={show} handleClose={handleClose} />
			</Container>
		</>
	);
}

export default NavigationBar;
