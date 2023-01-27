import React from 'react';
import ResultTable from './ResultTable';
import { Container } from 'react-bootstrap';

function Result({vinInfo, vinnumber}) {

	return (
		<Container>
      {vinInfo.map((veh)=>{
        return <ResultTable key={vinnumber} veh={veh} vinnumber={vinnumber}/>
      })}
		</Container>
	);
}

export default Result;
