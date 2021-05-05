import { VictoryBar, VictoryChart,  VictoryTheme, VictoryLabel} from "victory";


const ViewTopCustomers = (props) => {
	const TicketsSoldData = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 9 },
    { x: 6, y: 4 }
  ]

  const commissionData = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 9 },
    { x: 6, y: 4 }
  ]
	//FOR BOOKING AGENT
	return (
		<div className="col-md-4 mx-auto mt-5">
			<h1> Top customers </h1>
			<h4> Top 5 customers (based on number of tickets sold in past six months) </h4>
			<VictoryChart
			  theme={VictoryTheme.material}
			  domainPadding={20}
			 style={{marginTop: 100, paddingTop: 100}}
			>
			  <VictoryBar
			    barWidth={25}
			    style={{ data: { fill: "#c43a31" } }}
			    data={TicketsSoldData}
			  />
			</VictoryChart>
			<ol>
			  <li>Coffee</li>
			  <li>Tea</li>
			  <li>Milk</li>
			  <li>Tea</li>
			  <li>Milk</li>
			</ol>  

			<h4> Top 5 customers (based on amount of commission in past year) </h4>
			<VictoryChart
			  theme={VictoryTheme.material}
			  domainPadding={20}
			 style={{marginTop: 100, paddingTop: 100}}
			>
			  <VictoryBar
			    barWidth={25}
			    style={{ data: { fill: "#c43a31" } }}
			    data={commissionData}
			  />
			</VictoryChart>
			<ol>
			  <li>Coffee</li>
			  <li>Tea</li>
			  <li>Milk</li>
			  <li>Tea</li>
			  <li>Milk</li>
			</ol>
		</div>
	)
}

export default ViewTopCustomers;