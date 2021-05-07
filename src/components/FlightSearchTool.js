import {useState} from 'react';

const FlightSearchTool = (props) => {
	function useInput({ type, className, id /*...*/ }) {
	   const [value, setValue] = useState("");
	   const input = <input value={value} id={id} onChange={e => setValue(e.target.value)} 
	   type={type} className={className} name={id} />;
	   return [value, input];
 	}

 	const [departureDateValue, setDepartureDateValue] = useInput({ type: "date", className: "form-control", id: "departureDate" })
 	const [arrivalDateValue, setArrivalDateValue] = useInput({ type: "date", className: "form-control", id: "arrivalDate" });
  	const [sourceAirportValue, setSourceAirportValue] = useInput({ type: "text", className: "form-control", id: "sourceAirport" });
  	const [destinationAirportValue, setDestinationAirportValue] = useInput({ type: "text", className: "form-control", id: "destinationAirport" });

  	const [type, setType] = useState('');

    const onClick = (typeChosen) => {
    	setType(typeChosen);
	};

	return (
		<div className="mx-auto mt-5 mx-auto col-md-6">
			<h2 class="mt-3">{props.title}</h2>
			<form className="row">
				<div>
				<p className="mb-1"> Choose user type: </p>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="OneWay" onClick={() => onClick("OneWay")}/>
				  <label class="form-check-label" for="OneWay">One Way</label>
				</div>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="RoundTrip" onClick={() => onClick("RoundTrip")}/>
				  <label class="form-check-label" for="RoundTrip">Round trip</label>
				</div>
				</div>
				<div class="mb-3">
			    	<label for="Departure date" className="mt-4">Departure date&emsp;</label>
					{setDepartureDateValue}
			  	</div>
			  	<div class="mb-3">
			    	<label for="Arrival Date" className="mt-4">Arrival Date&emsp;</label>
					{setArrivalDateValue}
			  	</div>
				<div class="mb-3 col-md-6">
			    	<label for="Source Airport" class="form-label">Source Airport</label>
			    	{setSourceAirportValue}
			  	</div>
			  	<div class="mb-3 col-md-6">
			    	<label for="Destination Airport" class="form-label">Destination Airport</label>
			    	{setDestinationAirportValue}
			  	</div>  	
			</form>
		</div>
	)
}

export default FlightSearchTool;