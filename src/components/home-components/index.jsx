import { Container } from 'react-bootstrap';
import Search from './VinSearch';

function Home() {


	return (
		<Container className='text-center'>
			<h1 className='pt-5 hunters' style={{ fontSize: '100px' }}>
				Vin Finder
			</h1>
			<Search />
		</Container>
	);
}

export default Home;
