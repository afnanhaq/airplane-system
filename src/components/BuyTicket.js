import {useState} from 'react';
const axios = require('axios');
const BuyTicket = (props) => {
	function useInput({ type, className, id /*...*/ }) {
	   const [value, setValue] = useState("");
	   const input = <input value={value} id={id} onChange={e => setValue(e.target.value)} 
	   type={type} className={className} name={id} />;
	   return [value, input];
 	}

 	const [cardNumberValue, setCardNumberValue] = useInput({ type: "number", className: "form-control", id: "card" });
 	const [nameOnCardValue, setNameOnCardValue] = useInput({ type: "text", className: "form-control", id: "nameoncard" });
 	const [expirationDateValue, setExpirationDateValue] = useInput({ type: "date", className: "form-control", id: "expiration" });

 	const [type, setType] = useState('');

    const onClick = (typeChosen) => {
    	setType(typeChosen);
	};

	const handleSubmit = (e) => {
		e.preventDefault()
		const values = { type, cardNumberValue, nameOnCardValue, expirationDateValue }
		axios.post('/buyticket', values)
		.then(response => console.log(response))
	}

	return (
		<div>
		<button onClick={props.handleGoBack} className="btn btn-danger">  GO BACK </button>
		<div className="col-md-4 mx-auto mt-5 mb-5">
			<h2> Buy Ticket </h2>
			<h4> Ticket details </h4>
			<p> Flight number: {props.chosenFlight.flightNumber} </p>
			<p> {props.chosenFlight.date}, {props.chosenFlight.time} </p>
			<p> Sold price:  $450 </p>
			<p className="mb-1"> Choose card type: </p>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="Debit" onClick={() => onClick("Debit")}/>
				  <label class="form-check-label" for="Debit">Debit</label>
				</div>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="Credit" onClick={() => onClick("Credit")}/>
				  <label class="form-check-label" for="Credit">Credit</label>
				</div>
		  	<div class="mb-3">
		    	<label for="Card number" class="form-label">Card number</label>
		    	{setCardNumberValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="Name on card" class="form-label">Name on card</label>
		    	{setNameOnCardValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="Expiration date" class="form-label">Expiration date</label>
		    	{setExpirationDateValue}
		  	</div>
		  	<hr />
			<button type="submit" class="btn btn-primary" onClick={handleSubmit}>Buy</button>
		</div>
		</div>

	)
}

export default BuyTicket;