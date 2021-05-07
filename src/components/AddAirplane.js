import { useState } from 'react';

const AddAirplane = (props) => {

	function useInput({ type, className, id /*...*/ }) {
	   const [value, setValue] = useState("");
	   const input = <input value={value} id={id} onChange={e => setValue(e.target.value)} 
	   type={type} className={className} name={id} />;
	   return [value, input];
 	}

 	const [seatsValue, setSeatsValue] = useInput({ type: "number", className: "form-control", id: "seats" });
 	const [idValue, setIDValue] = useInput({ type: "number", className: "form-control", id: "ID" });
	const runSubmit = (e) => {
		e.preventDefault()
		console.log(seatsValue, idValue);
	}
	return(
		<div className="col-md-4 mx-auto mt-5">
			<h2 className="mt-3"> Add Airplane </h2>
			<form>
				<div class="mb-3">
			    	<label for="ID" class="form-label">ID</label>
			    	{setIDValue}
			  	</div>
			  	<div class="mb-3">
			    	<label for="seats" class="form-label">Seats</label>
			    	{setSeatsValue}
			  	</div>
			  	<button type="submit" class="btn btn-primary" onClick={runSubmit}>Submit</button>
		  	</form>
	  	</div>
	)
}

export default AddAirplane;