const AddAirport = (props) => {
	return(
		<div className="col-md-4 mx-auto mt-5">
			<h2 className="mt-3"> Add Airport </h2>
			<form>
				<div class="mb-3">
			    	<label for="Name" class="form-label">Name</label>
			    	<input type="text" class="form-control" id="Name"/>
			  	</div>
			  	<div class="mb-3">
			    	<label for="City" class="form-label">City</label>
			    	<input type="text" class="form-control" id="City" />
			  	</div>
			  	<button type="submit" class="btn btn-primary">Submit</button>
		  	</form>
	  	</div>
	)
}

export default AddAirport;