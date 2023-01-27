import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb, Container, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Result from './Result';

function Results({setError}) {
	const { vinnumber } = useParams();
	const url = `https://auto.dev/api/vin/${vinnumber}`;
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [vinInfo, setVinInfo] = useState([]);

	// ASYNCHRONOUS FUNCTION, UTILIZING THE URL TAILORED BY THE 'vinnumber' TO MAKE A GET REQUEST AND USES THE 'vinInfo' TO SET ITS STATE TO THE DATA RETURNED. 'vinInfo' IS THEN PASSED TO THE 'Result' COMPONENT, WHICH MAPS THE 'vinInfo' AND PASSES IT INTO RESULT TABLE, WHERE THE 'vinInfo' IS USED TO FILL A TABLE
	async function fetchVIN() {
			setIsLoading(true);
			const response = await fetch(url);
			const data = await response.json();
			if(data.status === "BAD_REQUEST" || data.status === "NOT_FOUND"){
			setError(data.message);
			navigate('/error');
			}
			setVinInfo([data]);
	}

	// UTILIZES THE 'vinnumber' TO DETERMINE WHEN TO MAKE FETCH REQUESTS
	useEffect(() => {
		fetchVIN();
	}, [vinnumber]);


	useEffect(()=>{
		if(vinInfo){
			setIsLoading(false)
		}
	}, [vinInfo])

	return (
		<div>
			{isLoading ? (
				<Spinner
					animation='border'
					variant='light'
					role='status'
					style={{ margin: "-10px 0",
									position: "absolute",
									top: "50%",
									left: "50%"
								}
				}>
					<span className='visually-hidden'>Loading...</span>
				</Spinner>
			) : (
				<Container fluid>
					<Container className='p-5 align-middle' fluid>
						<Breadcrumb className='d-inline align-middle'>
							<Breadcrumb.Item
								style={{ margin: '0', padding: '0', letterSpacing: 'none' }}
								href='/'>
								Home
							</Breadcrumb.Item>
							<Breadcrumb.Item className='pt-3' active>
								Result
							</Breadcrumb.Item>
						</Breadcrumb>
					</Container>

					<Result vinInfo={vinInfo} vinnumber={vinnumber} />
				</Container>
			)}
		</div>
	);
}

export default Results;
