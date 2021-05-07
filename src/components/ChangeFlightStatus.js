import {useState} from 'react';
const ChangeFlightStatus = (props) => {

	const [type, setType] = useState('');

    const onClick = (typeChosen) => {
    	setType(typeChosen);
	};

	return (
		<div className="col-md-4 mx-auto mt-5">
		<h1> Change flight status </h1>
		<p> Flight title: MH 370 </p>
		<p> Flight time and date: Mar 13, 2019, 6:00PM </p>
		<p> Current flight status: Delayed </p>
		<form>
			<p className="mb-1"> Change flight status: </p>
			<div class="form-check form-check-inline">
			  <input class="form-check-input" type="radio" name="flexRadioDefault" id="On time" onClick={() => onClick("onTime")}/>
			  <label class="form-check-label" for="On time">On time</label>
			</div>
			<div class="form-check form-check-inline">
			  <input class="form-check-input" type="radio" name="flexRadioDefault" id="Delayed" onClick={() => onClick("Delayed")}/>
			  <label class="form-check-label" for="Delayed">Delayed</label>
			</div>
			<hr />
		  	<button type="submit" class="btn btn-primary">Change</button>
		</form>
		</div>

	)
}

export default ChangeFlightStatus;