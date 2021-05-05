const AddAirplane = (props) => {
	return(
		<div className="col-md-4 mx-auto mt-5">
			<h2 className="mt-3"> Add Airplane </h2>
			<form>
				<div class="mb-3">
			    	<label for="ID" class="form-label">ID</label>
			    	<input type="text" class="form-control" id="ID"/>
			  	</div>
			  	<div class="mb-3">
			    	<label for="seats" class="form-label">Seats</label>
			    	<input type="text" class="form-control" id="seats" />
			  	</div>
			  	<button type="submit" class="btn btn-primary">Submit</button>
		  	</form>
	  	</div>
	)
}

export default AddAirplane;