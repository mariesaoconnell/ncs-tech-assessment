import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Result from './Result';
// import data from '../../src/data';

function Results() {
	let { vinnumber } = useParams();
	const [isLoading, setIsLoading] = useState(false);
	const [vinInfo, setVinInfo] = useState([]);
	const url = `https://auto.dev/api/vin/${vinnumber}`;

	async function fetchVIN() {
		setIsLoading(true);
		const response = await fetch(url);
		const data = await response.json();
		setVinInfo([data]);
	}

	useEffect(() => {
		fetchVIN();
		setIsLoading(false);
	}, [vinnumber]);

	return (
		<div>
			{isLoading ?
			(
				<>
					<p>Loading...</p>
				</>
			)
			:
			(
				<>
				<Result vinInfo={vinInfo} vinnumber={vinnumber}/>
				</>
			)}
		</div>
	);
}

export default Results;
