import {useState} from 'react';

const FlightSearchTool = (props) => {
	return (
		<div className="mx-auto mt-5 mx-auto col-md-6">
			<h2 class="mt-3">{props.title}</h2>
			<form className="row">
				<div>
				<p className="mb-1"> Choose user type: </p>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="OneWay" onClick={() => props.onClick("OneWay")}/>
				  <label class="form-check-label" for="OneWay">One Way</label>
				</div>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="RoundTrip" onClick={() => props.onClick("RoundTrip")}/>
				  <label class="form-check-label" for="RoundTrip">Round trip</label>
				</div>
				</div>
				<div class="mb-3">
			    	<label for="Departure date" className="mt-4">Departure date&emsp;</label>
					{props.setDepartureDateValue}
			  	</div>
			  	<div class="mb-3">
			    	<label for="Arrival Date" className="mt-4">Arrival Date&emsp;</label>
					{props.setArrivalDateValue}
			  	</div>
				<div class="mb-3 col-md-6">
			    	<label for="Source Airport" class="form-label">Source Airport</label>
			    	{props.setSourceAirportValue}
			  	</div>
			  	<div class="mb-3 col-md-6">
			    	<label for="Destination Airport" class="form-label">Destination Airport</label>
			    	{props.setDestinationAirportValue}
			  	</div> 
			  	<button type="submit" class="btn btn-primary" onClick={props.handleSearch}>Search</button>	
			</form>
		</div>
	)
}

export default FlightSearchTool;