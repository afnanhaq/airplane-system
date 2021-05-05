import SearchFlightCards from './SearchFlightCards';

const ViewMyFlights = (props) => {
	return (
		<div className="container">
		<h1> My flights </h1>
		<div class="form-check">
		  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
		  <label class="form-check-label" for="defaultCheck1">
		    Show past flights?
		  </label>
		</div>
		<SearchFlightCards />
		</div>
	)

}

export default ViewMyFlights;