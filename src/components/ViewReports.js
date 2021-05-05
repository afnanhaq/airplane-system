import { VictoryBar, VictoryChart,  VictoryTheme, VictoryLabel} from "victory";

const ViewReports = (props) => {
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
			<h1> View tickets sold report </h1>
			<div class="mb-3">
			    <label for="Start date" className="mt-4">Start date&emsp;</label>
				<input type="date" id="end" name="Start date" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
			</div>
			<div class="mb-3">
			    <label for="End date" className="mt-4">End date&emsp;</label>
				<input type="date" id="end" name="End date" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
			</div>
			<h4> Tickets sold per month (sold/month) </h4>
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

	)
}

export default ViewReports;