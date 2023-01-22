import NavigationBar from "./components/NavigationBar";
import { Routes, Route } from "react-router-dom";

import Result from './components/Result';
import Results from './components/Results';
import Login from './components/Login';
import Search from "./components/Search";
import Home from "./components/Home";

function App() {
  return (
		<div className='App'>
			<header>
				<NavigationBar />
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/search' element={<Search />} />
					<Route path='/login' element={<Login />} />
					<Route path='/result' element={<Result />} />
					<Route path='/results' element={<Results />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
