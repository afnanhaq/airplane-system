import {useState, useEffect } from 'react';
const axios = require('axios');
const ViewFrequentCustomers = (props) => {
	const [rankings, setRankings] = useState([
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
	]);


	useEffect(() => {
		axios.get("/viewfrquentcustomers")
		.then(response => console.log(response))
	}, [])

	const rank = rankings.map(ranking => {
		return <li>{ranking.customer} has taken {ranking.number} flights</li>
	})
	return (
		<div className="col-md-4 mx-auto mt-5">
			<h1> View frequent customers </h1>
			<h4> All customers rated by frequency </h4>
			<p> Click a person to see the flights they have taken on the airline </p>
			<ol>
			  {rank}
			</ol>  
		</div>
	)
}

export default ViewFrequentCustomers;