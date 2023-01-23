import NavigationBar from "./components/NavigationBar";
import { Routes, Route } from "react-router-dom";
import Results from './components/result-components/Results';
import Login from './components/auth/Login';
import Home from "./components/Home";
import SignUp from "./components/auth/SignUp";
import GoogleSearch from "./components/result-components/image-search/GoogleSearch";

function App() {
  return (
		<div className='App'>
			<header>
				<NavigationBar />
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/googleresults' element={<GoogleSearch />} />
						<Route path='/results/:vinnumber' element={<Results />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
