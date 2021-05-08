import {useState, useEffect } from 'react';
const axios = require('axios');


const ViewBookingAgents = (props) => {
	// FOR AIRLINE STAFF
	const [rankings, setRankings] = useState('');
	const pastMonthTickets = [
	{
		customer: "adam",
		number: "4"
	},
	{
		customer: "jimmy",
		number: "3"
	},
	{
		customer: "arabella",
		number: "1"
	}
	]

	const pastYearTickets = [
	{
		customer: "adam",
		number: "4"
	},
	{
		customer: "jimmy",
		number: "3"
	},
	{
		customer: "arabella",
		number: "1"
	}
	]

	const pastYearCommission = [
	{
		customer: "adam",
		number: "4"
	},
	{
		customer: "jimmy",
		number: "3"
	},
	{
		customer: "arabella",
		number: "1"
	}
	]
	useEffect(() => {
		axios.get("/viewbookingagents")
		.then(response => console.log(response))
	}, [])
	const pastMonthPeople = pastMonthTickets.map(data => {return <li> {data.customer} </li>})
	const pastYearPeople = pastYearTickets.map(data => {return <li> {data.customer} </li>})
	const pastYearCommissionPeople = pastYearCommission.map(data => {return <li> {data.customer} </li>})
	return(
		<div className="col-md-4 mx-auto mt-5">
			<h1> Top booking agents </h1>
			<h4> Top 5 booking agents (based on number of tickets sold for the past month) </h4>
			<ol>
			  {pastMonthPeople}
			</ol>  
			<h4> Top 5 booking agents (based on number of tickets sold for the past year) </h4>
			<ol>
			  {pastMonthPeople}
			</ol> 
			<h4> Top 5 customers (based on amount of commission received for the past year) </h4>
			<ol>
			  {pastYearCommissionPeople}
			</ol>
		</div>
	)
}

export default ViewBookingAgents;