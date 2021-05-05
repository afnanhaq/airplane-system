const FlightRatingCard = (props) => {
	return (
		<div class="card col-md-12 mb-3">
		  <div class="card-body">
		    <h5 class="card-title">Username</h5>
		    <h6 class="card-subtitle mb-2 text-muted">Rating: 5</h6>
		    <p class="card-text">Some example text. Some example text. lorem ipsum yeahhh</p>

		  </div>
		</div>
	)
}

const FlightRatings = (props) => {
	return (
		<div className="col-md-8 mx-auto">
			<h1> Reviews for flight MG 370 </h1>
			<h2> Average rating: 3.6 </h2>
			<div className="card-deck">
				<FlightRatingCard />
				<FlightRatingCard />
				<FlightRatingCard />
			</div>
		</div>
	)
}

export default FlightRatings;