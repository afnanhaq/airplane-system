import {useState} from 'react';

import { VictoryPie, VictoryChart,  VictoryTheme, VictoryLabel} from "victory";

const ComparisonOfRevenue = (props) => {
	const lastMonthData = [
    { x: "Direct", y: 35 },
    { x: "Indirect", y: 40 }];

    const lastYearData = [
    	{ x: "Direct", y: 75 },
    	{ x: "Indirect", y: 150 }
    ]

	return(
		<div className="col-md-6 mx-auto my-5">
			<h1> Comparison of revenue earned</h1>
			<h4> Sources of revenue (last month)</h4>
			  <VictoryPie
			  width={500}
			    data={lastMonthData}
			  />
			<h4> Sources of revenue (last year)</h4>
			<VictoryPie
			  width={500}
			  data={lastYearData}
			/>
		</div>
	)
}

export default ComparisonOfRevenue;