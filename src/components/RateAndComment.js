const RateAndComment = (props) => {
	return (
	<div className="col-md-4 mx-auto mt-5">
		<h1> Rate and comment flight </h1>
		<p> Flight title: MH 370 </p>
		<p> Flight time and date: Mar 13, 2019, 6:00PM </p>
		<form>
			<p className="mb-1"> Rate (5 =  best, 1 = worst) </p>
			<div class="form-check form-check-inline">
			  <input class="form-check-input" type="radio" name="flexRadioDefault" id="1"/>
			  <label class="form-check-label" for="1">1</label>
			</div>
			<div class="form-check form-check-inline">
			  <input class="form-check-input" type="radio" name="flexRadioDefault" id="2"/>
			  <label class="form-check-label" for="2">2</label>
			</div>
			<div class="form-check form-check-inline">
			  <input class="form-check-input" type="radio" name="flexRadioDefault" id="3"/>
			  <label class="form-check-label" for="3">3</label>
			</div>
			<div class="form-check form-check-inline">
			  <input class="form-check-input" type="radio" name="flexRadioDefault" id="4"/>
			  <label class="form-check-label" for="4">4</label>
			</div>
			<div class="form-check form-check-inline">
			  <input class="form-check-input" type="radio" name="flexRadioDefault" id="5"/>
			  <label class="form-check-label" for="5">5</label>
			</div>
			<div class="mb-3">
		    	<label for="Comment" class="form-label">Comment</label>
		    	<textarea type="textarea"  rows="5" class="form-control" id="Comment"></textarea>
		  	</div>
		  	
		  	<hr />
		  	<button type="submit" class="btn btn-primary">Search</button>
		</form>
	</div>
	)
	


}

export default RateAndComment;