import {useState} from 'react';

const ViewTopDestinations = (props) => {
	return(
		<div className="col-md-5 mx-auto mt-5">
			<h1> Top destinations (based on number of tickets sold)</h1>
			<h4> Top 3 destinations (last three months)</h4>
			<ol>
			  <li>Coffee</li>
			  <li>Tea</li>
			  <li>Milk</li>
			</ol>  
			<h4> Top 3 destinations (last year) </h4>
			<ol>
			  <li>Coffee</li>
			  <li>Tea</li>
			  <li>Milk</li>
			</ol>
		</div>
	)
}

export default ViewTopDestinations;