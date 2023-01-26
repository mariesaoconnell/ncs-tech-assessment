import React from 'react';
import { Table, Container, Col, Row } from 'react-bootstrap';
import GoogleSearch from '../image-search-components';


function ResultTable({vinnumber, veh}) {
  return (
		<Container className='vertically-align'>
			<h1 className='text-center pb-4'>Results for {vinnumber}</h1>
			<Row>
				<Col>
					<GoogleSearch veh={veh} />
				</Col>
				<Col>
					<Container>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th></th>
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
									<td>{veh.years[0].year}</td>
								</tr>
								<tr>
									<td>Make</td>
									<td> {veh.make.name}</td>
								</tr>
								<tr>
									<td>Model</td>
									<td> {veh.model.name}</td>
								</tr>
								<tr>
									<td>Style</td>
									<td>{veh.categories.primaryBodyType}</td>
								</tr>
								<tr>
									<td>Trim</td>
									<td>{veh.years[0].styles[0].trim}</td>
								</tr>
								<tr>
									<td>Highway Mileage</td>
									<td>{veh.mpg.highway}</td>
								</tr>
								<tr>
									<td>City Mileage</td>
									<td>{veh.mpg.city}</td>
								</tr>
								<tr>
									<td>Engine</td>
									<td>{veh.engine.name}</td>
								</tr>
								<tr>
									<td>Horsepower</td>
									<td>{veh.engine.horsepower}</td>
								</tr>
								<tr>
									<td>Torque</td>
									<td>{veh.engine.torque}</td>
								</tr>
							</tbody>
						</Table>
					</Container>
				</Col>
			</Row>
		</Container>
	);
}

export default ResultTable;
