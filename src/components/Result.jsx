import React from 'react';
import ResultTable from './ResultTable';


function Result({vinInfo, vinnumber}) {

	return (
		<div>
			<h1>Result</h1>
      {vinInfo.map((veh)=>{
        return <ResultTable veh={veh} vinnumber={vinnumber}/>
      })}
		</div>
	);
}

export default Result;
