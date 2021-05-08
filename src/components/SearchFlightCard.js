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
		    {props.isPurchaseable ? <button onClick={props.handleBuy} class="btn btn-primary">Buy</button> : null }
		    {props.isForRateAndComment ? <button onClick={props.handleRate} class="btn btn-primary">Rate and comment</button> : null }
		    {props.isShowingStatus? <div class="card-footer bg-danger">{props.flightStatus}</div> : null }
		    {props.canChangeStatus? <button onClick={props.handleChangeStatus} class="btn btn-primary">Change status</button> : null }
		  </div>
		</div>
	)
}

export default SearchFlightCard;