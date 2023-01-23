import React, { useEffect, useState } from 'react';
import { Table, Container, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import data from '../../src/data';

function Result() {
	let { vinnumber } = useParams();
	const [isLoading, setIsLoading] = useState(false);
  const [vinInfo, setVinInfo] = useState([]);
  const url = `https://auto.dev/api/vin/${vinnumber}`;

	async function fetchVIN() {
	  setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setVinInfo(data)
	}

	useEffect(()=>{
	  fetchVIN()
    console.log(vinInfo)
    setIsLoading(false)
	},[vinnumber])

	return (
		<div>
			<h1>Result</h1>
			{isLoading ? (
				<>
					<p>Loading...</p>
				</>
			) : (
				<Container>
					<Row>
						<Col></Col>
						<Col>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>VIN Search Results</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>VIN</td>
										<td>{vinnumber}</td>
									</tr>
									<tr>
										<td>Year</td>
										<td>{vinInfo.years.year}</td>
									</tr>
									<tr>
										<td>Make</td>
										<td> {vinInfo.make.name}</td>
									</tr>
									<tr>
										<td>Model</td>
										<td> {vinInfo.model.name}</td>
									</tr>
									<tr>
										<td>Style</td>
										<td>{vinInfo.categories.primaryBodyType}</td>
									</tr>
									<tr>
										<td>Trim</td>
										<td>{vinInfo.years.styles.trim}</td>
									</tr>
									<tr>
										<td>Highway Mileage</td>
										<td>{vinInfo.mpg.highway}</td>
									</tr>
									<tr>
										<td>City Mileage</td>
										<td>{vinInfo.mpg.city}</td>
									</tr>
									<tr>
										<td>Engine</td>
										<td>{vinInfo.engine.name}</td>
									</tr>
									<tr>
										<td>Horsepower</td>
										<td>{vinInfo.engine.horsepower}</td>
									</tr>
									<tr>
										<td>Torque</td>
										<td>{vinInfo.engine.torque}</td>
									</tr>
								</tbody>
							</Table>
						</Col>
					</Row>
				</Container>
			)}
		</div>
	);
}

export default Result;
