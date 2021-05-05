import SearchFlightCard from './SearchFlightCard';

const SearchFlightCards = (props) => {

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

	const flightCardList = data.map((flight) => 
		<SearchFlightCard key={flight.flightNumber} 
		isRoundTrip={props.isRoundTrip} isPurchaseable={props.isPurchaseable} 
		isForRateAndComment={props.isForRateAndComment} canChangeStatus={props.canChangeStatus} isShowingStatus={props.isShowingStatus}
      	startingLocation={flight.startingLocation} destinationLocation={flight.destinationLocation} flightNumber={flight.flightNumber}
      	departureDate={flight.departureDate} departureTime={flight.departureTime} returnDate={flight.returnDate} returnTime={flight.returnTime} 
      	returnFlightNumber={flight.returnFlightNumber}
      	flightStatus={flight.flightStatus} />
	);
	return (
		<div className="row card-deck my-3">
		{flightCardList}
		</div>
	)
}

export default SearchFlightCards;