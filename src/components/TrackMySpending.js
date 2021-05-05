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
	return (
		<div className="col-md-4 mx-auto my-5">
			<h2> Track my spending </h2>
			<div class="form-check mb-3">
			  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
			  <label class="form-check-label" for="flexCheckDefault">
			    Set custom dates
			  </label>
			</div>
			<label for="start">Start date:&emsp;</label>
			<input type="date" id="start" name="start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
			<br/>
			<label for="end" className="mt-4">End date:&emsp;</label>
			<input type="date" id="end" name="end" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
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