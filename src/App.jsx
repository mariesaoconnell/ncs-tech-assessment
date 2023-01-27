import { createContext, useState, useEffect } from 'react';
import NavigationBar from './components/navigation-components';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/auth/firebase';
import Results from './components/result-components';
import Login from './components/auth/Login';
import Home from './components/home-components';
import SignUp from './components/auth/SignUp';
import Error from './components/error-components/Error';

import './assets/styles/static-styles/App.css';
import './assets/styles/static-styles/ModeToggle.css';
import './assets/styles/media-queries/MediaQueries.css';

export const ThemeContext = createContext('light');

function App() {
	const [theme, setTheme] = useState('light');
	const [authUser, setAuthUser] = useState(null);
	const [error, setError] = useState('');
	// TOGGLES LIGHT AND DARK MODE ACROSS PAGES AND COMPONENTS
	const toggleTheme = () => {
		return setTheme((currentTheme) =>
			currentTheme === 'light' ? 'dark' : 'light'
		);
	};

	// PROTECTS THE '/HOME' AND '/RESULTS/:ID' ROUTES FROM NON-MEMBER USERS BY CHECKING LOCAL STORAGE FOR THE USER'S TOKEN AND APPLYING TERNARY LOGIC TO DETERMINE WHETHER THE USER HAS AUTHORIZATION TO VIEW THE PAGE ACCESSED
	const ProtectedRoute = () => {
		return localStorage.userToken ? <Outlet /> : <Navigate to='/login' />;
	};

	// LISTENS FOR CHANGES IN STATE FOR 'authUser'
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
	}, [authUser]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className='App' id={theme}>
				<header>
					<NavigationBar
						toggleTheme={toggleTheme}
						theme={theme}
						authUser={authUser}
					/>
				</header>
				<main>
					<Routes>
						<Route
							path='/login'
							element={<Login authUser={authUser} setAuthUser={setAuthUser} />}
						/>
						<Route
							path='/signup'
							element={<SignUp authUser={authUser} setAuthUser={setAuthUser} />}
						/>
						<Route element={<ProtectedRoute authUser={authUser} />}>
							<Route path='/' element={<Home />} />
							<Route
								path='/result/:vinnumber'
								element={<Results setError={setError} />}
							/>
						</Route>
						<Route
							path='*'
							element={
								<Error message={'This page does not exist!'}/>
							}
						/>
						<Route
							path='/error'
							element={<Error error={error}/>}
						/>
					</Routes>
				</main>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
