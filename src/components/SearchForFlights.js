import {useState} from 'react';

import FlightSearchTool from './FlightSearchTool';
import SearchFlightCards from './SearchFlightCards';

const SearchForFlights = (props) => {
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

	function useInput({ type, className, id /*...*/ }) {
	   const [value, setValue] = useState("");
	   const input = <input value={value} id={id} onChange={e => setValue(e.target.value)} 
	   type={type} className={className} name={id} />;
	   return [value, input];
 	}

 	const [departureDateValue, setDepartureDateValue] = useInput({ type: "date", className: "form-control", id: "departureDate" })
 	const [arrivalDateValue, setArrivalDateValue] = useInput({ type: "date", className: "form-control", id: "arrivalDate" });
  	const [sourceAirportValue, setSourceAirportValue] = useInput({ type: "text", className: "form-control", id: "sourceAirport" });
  	const [destinationAirportValue, setDestinationAirportValue] = useInput({ type: "text", className: "form-control", id: "destinationAirport" });

  	const [type, setType] = useState('');

    const onClick = (typeChosen) => {
    	setType(typeChosen);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		console.log("hello");
	}

	return (
		<div className="container">
			<FlightSearchTool title="Search for flights" onClick={onClick} 
			setDepartureDateValue={setDepartureDateValue}
			setArrivalDateValue={setArrivalDateValue}
			setSourceAirportValue={setSourceAirportValue}
			setDestinationAirportValue={setDestinationAirportValue} handleSearch={handleSearch}/>
			<SearchFlightCards data={data} isShowingStatus={true} />
		</div>
	)
}

export default SearchForFlights;