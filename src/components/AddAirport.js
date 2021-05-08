import {useState} from 'react';
const axios = require('axios');

const AddAirport = (props) => {
	function useInput({ type, className, id /*...*/ }) {
	   const [value, setValue] = useState("");
	   const input = <input value={value} id={id} onChange={e => setValue(e.target.value)} 
	   type={type} className={className} name={id} />;
	   return [value, input];
 	}

 	const [nameValue, setNameValue] = useInput({ type: "text", className: "form-control", id: "Name" });
 	const [cityValue, setCityValue] = useInput({ type: "text", className: "form-control", id: "City" });

 	const runSubmit = (e) => {
 		e.preventDefault();
 		const values = { ap_name: nameValue, city: cityValue}
		axios.post('http://localhost:5000/addairport', values)
		.then(response => console.log(response))
 	}

	return(
		<div className="col-md-4 mx-auto mt-5">
			<h2 className="mt-3"> Add Airport </h2>
			<form>
				<div class="mb-3">
			    	<label for="Name" class="form-label">Name</label>
			    	{setNameValue}
			  	</div>
			  	<div class="mb-3">
			    	<label for="City" class="form-label">City</label>
			    	{setCityValue}
			  	</div>
			  	<button type="submit" class="btn btn-primary" onClick={runSubmit}>Submit</button>
		  	</form>
	  	</div>
	)
}

export default AddAirport;