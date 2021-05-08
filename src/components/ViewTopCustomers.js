import {useState, useEffect } from 'react';
import { VictoryBar, VictoryChart,  VictoryTheme, VictoryLabel} from "victory";
const axios = require('axios');



const ViewTopCustomers = (props) => {
	const ticketsSoldData = [
    { x: "aaron", y: 2 },
    { x: "barron", y: 3 },
    { x: "charlie", y: 5 },
    { x: "james", y: 4 },
    { x: "elijah", y: 9 }
  ]

  const commissionData = [
    { x: "corporate", y: 2 },
    { x: "jersey", y: 3 },
    { x: "form", y: 5 },
    { x: "jeneziah", y: 4 },
    { x: "horry", y: 9 }
  ]
  useEffect(() => {
		axios.get("/viewreports")
		.then(response => console.log(response))
	}, [])
  
  const commissionPeople = commissionData.map(data => {return <li> {data.x} </li>})
  const ticketsSoldPeople = ticketsSoldData.map(data => {return <li> {data.x} </li>})
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
			    data={ticketsSoldData}
			  />
			</VictoryChart>
			<ol>
			  {ticketsSoldPeople}
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
			  {commissionPeople}
			</ol>
		</div>
	)
}

export default ViewTopCustomers;