import {useState, useEffect } from 'react';
const axios = require('axios');

const ViewCommission = (props) => {
	function useInput({ type, className, id /*...*/ }) {
	   const [value, setValue] = useState("");
	   const input = <input value={value} id={id} onChange={e => setValue(e.target.value)} 
	   type={type} className={className} name={id} />;
	   return [value, input];
 	}

 	const [startDateValue, setStartDateValue] = useInput({ type: "date", className: "form-control", id: "startDate" });
 	const [endDateValue, setEndDateValue] = useInput({ type: "date", className: "form-control", id: "endDate" });

 	const [totalCommission, setTotalCommission] = useState('700');
 	const [averageCommission, setAverageCommission] = useState('33');
 	const [ticketsSold, setTicketsSold] = useState('400');
 	
	useEffect(() => {
		axios.get("/viewcommission")
		.then(response => console.log(response))
	}, [])
	return (
		<div className=" row border border-primary col-md-6 p-4 my-4 mx-auto">
		<h1> View commission </h1>
		<div class="mb-3">
			    <label for="Start date of commission" className="mt-4">Start date of commission&emsp;</label>
				{setStartDateValue}
			</div>
			<div class="mb-3">
			    <label for="Last date of commission" className="mt-4">Last date of commission&emsp;</label>
				{setEndDateValue}
		</div>
		<h3> Total Commission: {totalCommission} </h3>
		<h3> Average Commission per Ticket: {averageCommission} </h3>
		<h3> Total number of tickets sold: {ticketsSold} </h3> 
		</div>
	)
}

export default ViewCommission;