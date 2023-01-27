import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';


function Error({error, message}) {
  return (
		<Container fluid>
			<Container className='p-5 align-middle' fluid>
				<Breadcrumb className='d-inline align-middle'>
					<Breadcrumb.Item
						style={{ margin: '0', padding: '0', letterSpacing: 'none' }}
						href='/'>
						Home
					</Breadcrumb.Item>
					<Breadcrumb.Item className='pt-3' active>
						Error
					</Breadcrumb.Item>
				</Breadcrumb>
			</Container>
			<h1 className='text-center vertically-align hunters' style={{fontSize:"100px"}}>
				An Error Occurred!
				<br />
				{ error ? <>{error}</> : <>{message}</>}
			</h1>
		</Container>
	);
}

export default Error;
