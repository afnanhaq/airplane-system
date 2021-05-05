const SearchFlightCard = (props) => {


	return (
		<div class="card col-md-4 mb-5 border border-dark">
		  <div class="card-body">
		    <h5 class="card-title">{props.startingLocation}  -->  {props.destinationLocation}</h5>
		    <h6 class="card-subtitle mb-2 text-muted">{props.flightNumber} | {props.departureDate}, {props.departureTime}</h6>
		    {props.isRoundTrip ? (
		    <div>
		    	<hr />
		    	<h5 class="card-title">{props.destinationLocation}  -->  {props.startingLocation}</h5>
		    	<h6 class="card-subtitle mb-2 text-muted">{props.returnFlightNumber} | {props.returnDate}, {props.returnTime}</h6> 
		    </div>
		    ): null}
		    {props.isPurchaseable ? <a href="#" class="card-link">Buy</a> : null }
		    {props.isForRateAndComment ? <a href="#" class="card-link">Rate and comment</a> : null }
		    {props.isShowingStatus? <div class="card-footer bg-danger">{props.flightStatus}</div> : null }
		    {props.canChangeStatus? <div class="card-footer bg-danger">Change status</div> : null }

		  </div>
		</div>
	)
}

export default SearchFlightCard;