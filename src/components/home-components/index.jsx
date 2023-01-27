import Search from './VinSearch';
import { Container } from 'react-bootstrap';

function Home() {
	return (
		<Container className='text-center'>
			<h1 className='pt-5 hunters' style={{fontSize:"100px"}}>
				Vin Finder
			</h1>
			<Search />
		</Container>
	);
}

export default Home;
