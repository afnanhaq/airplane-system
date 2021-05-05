const FlightSearchTool = (props) => {
	return (
		<div className="mx-auto mt-5 mx-auto col-md-6">
			<h2 class="mt-3">{props.title}</h2>
			<form className="row">
				<div>
				<p className="mb-1"> Choose user type: </p>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="OneWay"/>
				  <label class="form-check-label" for="OneWay">One Way</label>
				</div>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="RoundTrip"/>
				  <label class="form-check-label" for="RoundTrip">Round trip</label>
				</div>
				</div>
				<div class="mb-3">
			    	<label for="Departure date" className="mt-4">Departure date&emsp;</label>
					<input type="date" id="end" name="Departure date" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
			  	</div>
			  	<div class="mb-3">
			    	<label for="Arrival Date" className="mt-4">Arrival Date&emsp;</label>
					<input type="date" id="Arrival Date" name="Arrival Date" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
			  	</div>
				<div class="mb-3 col-md-6">
			    	<label for="Source Airport" class="form-label">Source Airport</label>
			    	<input type="text" class="form-control" id="Source Airport" />
			  	</div>
			  	<div class="mb-3 col-md-6">
			    	<label for="Destination Airport" class="form-label">Destination Airport</label>
			    	<input type="text" class="form-control" id="Destination Airport" />
			  	</div>

			  	
			</form>
		</div>
	)
}

export default FlightSearchTool;