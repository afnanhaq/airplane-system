const BuyTicket = (props) => {
	return (
		<div className="col-md-4 mx-auto mt-5">
			<h2> Buy Ticket </h2>
			<h4> Ticket details </h4>
			<p> Airlines: Etihad </p>
			<p> Flight number: MG 370 </p>
			<p> Mar 13 2019, 6:00PM </p>
			<p> Sold price:  $450 </p>
			<p className="mb-1"> Choose card type: </p>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="Debit"/>
				  <label class="form-check-label" for="Debit">Debit</label>
				</div>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="Credit"/>
				  <label class="form-check-label" for="Credit">Credit</label>
				</div>
		  	<div class="mb-3">
		    	<label for="Card type" class="form-label">Card type</label>
		    	<input type="text" class="form-control" id="Card type" />
		  	</div>
		  	<div class="mb-3">
		    	<label for="Card number" class="form-label">Card number</label>
		    	<input type="text" class="form-control" id="Card number" />
		  	</div>
		  	<div class="mb-3">
		    	<label for="Name on card" class="form-label">Name on card</label>
		    	<input type="text" class="form-control" id="Name on card" />
		  	</div>
		  	<div class="mb-3">
		    	<label for="Expiration date" class="form-label">Expiration date</label>
		    	<input type="text" class="form-control" id="Expiration date" />
		  	</div>
		  	<hr />
			<button type="submit" class="btn btn-primary">Buy</button>
		</div>

	)
}

export default BuyTicket;