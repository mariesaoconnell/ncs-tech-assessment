import { createContext, useState } from 'react';
import NavigationBar from './components/navigation-components/NavigationBar';
import { Routes, Route } from 'react-router-dom';

import Results from './components/result-components/Results';
import Login from './components/auth/Login';
import Home from './components/Home';
import SignUp from './components/auth/SignUp';
import GoogleSearch from './components/image-search-components/GoogleSearch';

import './styles/ModeToggle.css';


export const ThemeContext = createContext('light');

function App() {
	const [theme, setTheme] = useState('light');
	const toggleTheme = () => {
		return setTheme((currentTheme) =>
			currentTheme === 'light' ? 'dark' : 'light'
		);
	};
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className='App' id={theme}>
				<header>
					<NavigationBar toggleTheme={toggleTheme} theme={theme}/>
				</header>
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/signup' element={<SignUp />} />
						<Route path='/results/:vinnumber' element={<Results />} />
					</Routes>
				</main>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
