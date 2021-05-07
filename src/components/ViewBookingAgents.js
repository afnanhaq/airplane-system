import {useState} from 'react';


const ViewBookingAgents = (props) => {
	// FOR AIRLINE STAFF
	return(
		<div className="col-md-4 mx-auto mt-5">
			<h1> Top booking agents </h1>
			<h4> Top 5 booking agents (based on number of tickets sold for the past month) </h4>
			<ol>
			  <li>Coffee</li>
			  <li>Tea</li>
			  <li>Milk</li>
			  <li>Tea</li>
			  <li>Milk</li>
			</ol>  
			<h4> Top 5 booking agents (based on number of tickets sold for the past year) </h4>
			<ol>
			  <li>Coffee</li>
			  <li>Tea</li>
			  <li>Milk</li>
			  <li>Tea</li>
			  <li>Milk</li>
			</ol> 
			<h4> Top 5 customers (based on amount of commission received for the past year) </h4>
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

export default ViewBookingAgents;