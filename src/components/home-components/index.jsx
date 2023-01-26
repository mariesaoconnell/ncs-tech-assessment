import Search from './VinSearch';
import { Container } from 'react-bootstrap';

function Home() {
	return (
		<Container className='text-center'>
			<h1> VIN Finder </h1>
			<Search />
		</Container>
	);
}

export default Home;
