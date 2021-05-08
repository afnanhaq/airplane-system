import SearchFlightCard from './SearchFlightCard';

const SearchFlightCards = (props) => {

	const flightCardList = props.data.map((flight) => 
		<SearchFlightCard key={flight.flightNumber} 
		handleRate={() => props.handleRate(flight)} 
		handleBuy={() => props.handleBuy(flight)}
		handleChangeStatus={() => props.handleChangeStatus(flight)}
		isRoundTrip={props.isRoundTrip} isPurchaseable={props.isPurchaseable} 
		isForRateAndComment={props.isForRateAndComment} canChangeStatus={props.canChangeStatus} isShowingStatus={props.isShowingStatus}
      	startingLocation={flight.startingLocation} destinationLocation={flight.destinationLocation} flightNumber={flight.flightNumber}
      	departureDate={flight.departureDate} departureTime={flight.departureTime} returnDate={flight.returnDate} returnTime={flight.returnTime} 
      	returnFlightNumber={flight.returnFlightNumber}
      	flightStatus={flight.flightStatus} />
	);
	return (
		<div className="row card-deck my-5">
		{flightCardList}
		</div>
	)
}

export default SearchFlightCards;