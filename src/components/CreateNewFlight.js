import {useState} from 'react';

const CreateNewFlight = (props) => {
	function useInput({ type, className, id /*...*/ }) {
	   const [value, setValue] = useState("");
	   const input = <input value={value} id={id} onChange={e => setValue(e.target.value)} 
	   type={type} className={className} name={id} />;
	   return [value, input];
 	}

 	const [flightNumberValue, setFlightNumberValue] = useInput({ type: "text", className: "form-control", id: "flightNumber" });
 	const [basePriceValue, setBasePriceValue] = useInput({ type: "number", className: "form-control", id: "basePrice" });
 	const [departureDateValue, setDepartureDateValue] = useInput({ type: "date", className: "form-control", id: "departureDate" });
 	const [departureTimeValue, setDepartureTimeValue] = useInput({ type: "time", className: "form-control", id: "departureTime" });
 	const [arrivalDateValue, setArrivalDateValue] = useInput({ type: "date", className: "form-control", id: "arrivalDate" });
 	const [arrivalTimeValue, setArrivalTimeValue] = useInput({ type: "time", className: "form-control", id: "arrivalTime" });
 	
	return(
	<div className="col-md-4 mx-auto my-5">
		<h2 class="mt-3">Add new flight</h2>
		<form>
			<div class="mb-3">
		    	<label for="Flight Number" class="form-label">Flight Number</label>
		    	{setFlightNumberValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="Base Price" class="form-label">Base Price</label>
		    	{setBasePriceValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="Departure date" className="mt-4">Departure date&emsp;</label>
				{setDepartureDateValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="Departure Time" class="form-label">Departure time</label>
		    	{setDepartureTimeValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="Arrival Date" className="mt-4">Arrival Date&emsp;</label>
				{setArrivalDateValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="Arrival Time" class="form-label">Arrival Time</label>
		    	{setArrivalTimeValue}
		  	</div>
		  	<button type="submit" class="btn btn-primary">Create</button>
		</form>
	</div>
	)
}

export default CreateNewFlight;