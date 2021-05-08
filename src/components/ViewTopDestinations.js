import {useState, useEffect } from 'react';
const axios = require('axios');

const ViewTopDestinations = (props) => {
	const lastMonthDestination = [
	{
		destination: "appalechea"
	},
	{
		destination: "jersey"
	},
	{
		destination: "munich"
	}]

	const lastYearDestination = [
	{
		destination: "germany"
	},
	{
		destination: "tokyo"
	},
	{
		destination: "dubrovnik"
	}]
	useEffect(() => {
		axios.get("/viewtopdestinations")
		.then(response => console.log(response))
	}, [])

	const lastMonthRank = lastMonthDestination.map(data => {return <li> {data.destination} </li>})
	const lastYearRank = lastYearDestination.map(data => {return <li> {data.destination} </li>})
	return(
		<div className="col-md-5 mx-auto mt-5">
			<h1> Top destinations (based on number of tickets sold)</h1>
			<h4> Top 3 destinations (last three months)</h4>
			<ol>
			  {lastMonthRank}
			</ol>  
			<h4> Top 3 destinations (last year) </h4>
			<ol>
			  {lastYearRank}
			</ol>
		</div>
	)
}

export default ViewTopDestinations;