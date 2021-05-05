const CreateNewFlight = (props) => {
	return(
		<div className="col-md-4 mx-auto my-5">
			<h2 class="mt-3">Add new flight</h2>
			<form>
				<div class="mb-3">
			    	<label for="Flight Number" class="form-label">Flight Number</label>
			    	<input type="text" class="form-control" id="Flight Number" />
			  	</div>
			  	<div class="mb-3">
			    	<label for="Base Price" class="form-label">Base Price</label>
			    	<input type="number" class="form-control" id="Base Price" />
			  	</div>
			  	<div class="mb-3">
			    	<label for="Departure date" className="mt-4">Departure date&emsp;</label>
					<input type="date" id="end" name="Departure date" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
			  	</div>
			  	<div class="mb-3">
			    	<label for="Departure Time" class="form-label">Return Date</label>
			    	<input type="time" id="Departure Time" name="Departure Time" />
			  	</div>
			  	<div class="mb-3">
			    	<label for="Arrival Date" className="mt-4">Arrival Date&emsp;</label>
					<input type="date" id="Arrival Date" name="Arrival Date" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
			  	</div>
			  	<div class="mb-3">
			    	<label for="Arrival Time" class="form-label">Arrival Time</label>
			    	<input type="time" id="Arrival Time" name="Arrival Time" />
			  	</div>
			  	<button type="submit" class="btn btn-primary">Create</button>
			</form>
		</div>
	)
}

export default CreateNewFlight;