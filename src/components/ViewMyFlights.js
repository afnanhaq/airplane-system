import {useState, useEffect } from 'react';
import SearchFlightCards from './SearchFlightCards';
import RateAndComment from './RateAndComment';
const axios = require('axios');



const ViewMyFlights = (props) => {
	const data = [
	{
		startingLocation: "Budapest",
		destinationLocation: "London",
		flightNumber: "MG 370",
		departureDate: "Mon, 13 April 2020", 
		departureTime: "6:00PM",
		returnDate: "Sat, 19 April 2020",
		returnTime: "9:00PM",
		returnFlightNumber: "HG 360",
		flightStatus: "Delayed"
	},
	{
		startingLocation: "Paris",
		destinationLocation: "Vienna",
		flightNumber: "MG 450",
		departureDate: "Sun, 15 April 2020", 
		departureTime: "3:00PM",
		returnDate: "Sat, 19 June 2020",
		returnTime: "11:00PM",
		returnFlightNumber: "HG 110",
		flightStatus: "On time"
	},
	{
		startingLocation: "Munich",
		destinationLocation: "Ankara",
		flightNumber: "JZ 4490",
		departureDate: "Tue 4 April 2020", 
		departureTime: "1:00PM",
		returnDate: "Sat, 19 June 2020",
		returnTime: "11:00PM",
		returnFlightNumber: "JK 420",
		flightStatus: "On time"
	},
	{
		startingLocation: "Munich",
		destinationLocation: "Ankara",
		flightNumber: "JZ 4444",
		departureDate: "Tue 4 April 2020", 
		departureTime: "1:00PM",
		returnDate: "Sat, 19 June 2020",
		returnTime: "11:00PM",
		returnFlightNumber: "JK 420",
		flightStatus: "On time"
	},
	];

	const [type, setType] = useState(false);
	const [chosenFlight, setChosenFlight] = useState('');

    const onClick = () => {
    	setType(!type);
	};

	const handleRate = (flight) => {
		setChosenFlight({
			flightNumber: flight.flightNumber,
			time: flight.departureTime,
			date: flight.departureDate
		})
	}

	const handleGoBack = () => {
		setChosenFlight('');
	}

	useEffect(() => {
		axios.get("/viewmyflights")
		.then(response => console.log(response))
	}, [])

	return (
		<div>
		{chosenFlight ? (<RateAndComment chosenFlight={chosenFlight} handleGoBack={handleGoBack} />) :
		(<div className="container">
		<h1> My flights </h1>
		<div class="form-check">
		  <input class="form-check-input" type="checkbox" id="defaultCheck1" onClick={onClick} />
		  <label class="form-check-label" for="defaultCheck1">
		    Show past flights?
		  </label>
		</div>
		<SearchFlightCards isForRateAndComment={sessionStorage.getItem('type') === "customer" ? true : false} data={data} handleRate={handleRate} />
		</div>)
		}
		</div>
	)

}

export default ViewMyFlights;