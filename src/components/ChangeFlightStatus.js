import {useState} from 'react';
import SearchFlightCards from './SearchFlightCards';
const axios = require('axios');
const ChangeFlightStatus = (props) => {
	return (
		<div>
			<button onClick={props.handleGoBack} className="btn btn-danger">GO BACK</button>
			<div className="col-md-4 mx-auto mt-5">
			<h1> Change flight status </h1>
			<p> Flight number: {props.chosenFlight.flightNumber}</p>
			<p> Flight time and date: {props.chosenFlight.date}, {props.chosenFlight.time} </p>
			<p> Current flight status: Delayed </p>
			<form>
				<p className="mb-1"> Change flight status: </p>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="On time" onClick={() => props.onClick("onTime")}/>
				  <label class="form-check-label" for="On time">On time</label>
				</div>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="Delayed" onClick={() => props.onClick("Delayed")}/>
				  <label class="form-check-label" for="Delayed">Delayed</label>
				</div>
				<hr />
			  	<button type="submit" class="btn btn-primary" onClick={props.handleSubmit}>Change</button>
			</form>
			</div>
		</div>
	)
}

const ChangeFlightStatusHandler = (props) => {
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

	const [type, setType] = useState('');

    const onClick = (typeChosen) => {
    	setType(typeChosen);
	};

	const [chosenFlight, setChosenFlight] = useState('');

	const handleChangeStatus = (flight) => {
		setChosenFlight({
			flightNumber: flight.flightNumber,
			time: flight.departureTime,
			date: flight.departureDate
		})
	}

	const handleGoBack = () => {
		setChosenFlight('');
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const values = {flightNumber: chosenFlight.flightNumber, type: type}
		axios.post('/changeflightstatus', values)
		.then(response => console.log(response))
	}

	return (
		<div>
		{chosenFlight ? 
		<ChangeFlightStatus onClick={onClick} chosenFlight={chosenFlight} handleGoBack={handleGoBack} handleSubmit={handleSubmit} />	 : 
		(
		<div className="container mt-3 mb-5">
		<h1> Change flight status </h1>
		<SearchFlightCards data={data} canChangeStatus={true} handleChangeStatus={handleChangeStatus} />	
		</div>
		)}
		</div>
	)
}

export default ChangeFlightStatusHandler;