import { createContext, useState, useEffect } from 'react';
import NavigationBar from './components/navigation-components';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/auth/firebase';
import './assets/styles/App.css';
import Results from './components/result-components';
import Login from './components/auth/Login';
import Home from './components/home-components';
import SignUp from './components/auth/SignUp';

import './assets/styles/ModeToggle.css';


export const ThemeContext = createContext('light');

function App() {
	const [theme, setTheme] = useState('light');
	const [authUser, setAuthUser] = useState(null);

	const toggleTheme = () => {
		return setTheme((currentTheme) =>
			currentTheme === 'light' ? 'dark' : 'light'
		);
	};

	const ProtectedRoute = () => {
		return localStorage.userToken ? <Outlet /> : <Navigate to='/login' />;
	};

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
							<Route path='/result/:vinnumber' element={<Results />} />
						</Route>
						<Route
							path='*'
							element={
								<h1 className='text-center my-auto'>Oops, wrong page: 404!</h1>
							}
						/>
					</Routes>
				</main>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
