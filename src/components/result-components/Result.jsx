import React from 'react';
import ResultTable from './ResultTable';
import { Container } from 'react-bootstrap';

function Result({vinInfo, vinnumber}) {

	return (
		<Container>
			<h1 className='text-center py-5'>
				Results for {vinnumber}
			</h1>
      {vinInfo.map((veh)=>{
        return <ResultTable veh={veh} vinnumber={vinnumber}/>
      })}
		</Container>
	);
}

export default Result;
