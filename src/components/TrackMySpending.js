 import {useState} from 'react';

import { VictoryBar, VictoryChart,  VictoryTheme, VictoryLabel} from "victory";

const TrackMySpending = (props) => {
	const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 9 },
    { x: 6, y: 4 }
  ]

  	function useInput({ type, className, id /*...*/ }) {
	   const [value, setValue] = useState("");
	   const input = <input value={value} id={id} onChange={e => setValue(e.target.value)} 
	   type={type} className={className} name={id} />;
	   return [value, input];
 	}

 	const [startDateValue, setStartDateValue] = useInput({ type: "date", className: "form-control", id: "startDate" });
 	const [endDateValue, setEndDateValue] = useInput({ type: "date", className: "form-control", id: "endDate" });

 	const [type, setType] = useState(false);

    const onClick = () => {
    	setType(!type);
	};
	return (
		<div className="col-md-4 mx-auto my-5">
			<h2> Track my spending </h2>
			<div class="form-check mb-3">
			  <input class="form-check-input" type="checkbox" id="flexCheckDefault" onClick={onClick} />
			  <label class="form-check-label" for="flexCheckDefault">
			    Set custom dates
			  </label>
			</div>
			<label for="start">Start date:&emsp;</label>
			{setStartDateValue}
			<br/>
			<label for="end" className="mt-4">End date:&emsp;</label>
			{setEndDateValue}
			<hr />
			<h4 className="mb-4"> Total money spent: $500 </h4>
			<div className="border border-danger p-3">
			<h4> Spending per month ($/month) </h4>
			<VictoryChart
			  theme={VictoryTheme.material}
			  domainPadding={20}
			 style={{marginTop: 100, paddingTop: 100}}
			>
			  <VictoryBar
			    barWidth={25}
			    style={{ data: { fill: "#c43a31" } }}
			    data={data}
			  />
			</VictoryChart>
			</div>

		</div>

	)
}

export default TrackMySpending;