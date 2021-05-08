import {useState} from 'react';
import {useHistory} from 'react-router-dom';
const axios = require('axios');

const RateAndComment = (props) => {
	const [type, setType] = useState('');
	const [comment, setComment] = useState('')

    const onClick = (typeChosen) => {
    	setType(typeChosen);
	};

	const onChange = (event) => {
		setComment(event.target.value);
	}
	
	let history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post("/rateandcomment", {
			type,
			comment
		})
		history.push('/customer')
	}

	return (
	<div>
	<button onClick={props.handleGoBack} className="btn btn-danger">  GO BACK </button>
	<div className="col-md-4 mx-auto mt-5 mb-5">
		<h1> Rate and comment flight </h1>
		<p> Flight number: {props.chosenFlight.flightNumber}</p>
		<p> Flight time and date: {props.chosenFlight.date}, {props.chosenFlight.time} </p>
		<form>
			<p className="mb-1"> Rate (5 =  best, 1 = worst) </p>
			<div class="form-check form-check-inline">
			  <input class="form-check-input" type="radio" name="flexRadioDefault" id="1" onClick={() => onClick("1")}/>
			  <label class="form-check-label" for="1">1</label>
			</div>
			<div class="form-check form-check-inline">
			  <input class="form-check-input" type="radio" name="flexRadioDefault" id="2" onClick={() => onClick("2")}/>
			  <label class="form-check-label" for="2">2</label>
			</div>
			<div class="form-check form-check-inline">
			  <input class="form-check-input" type="radio" name="flexRadioDefault" id="3" onClick={() => onClick("3")}/>
			  <label class="form-check-label" for="3">3</label>
			</div>
			<div class="form-check form-check-inline">
			  <input class="form-check-input" type="radio" name="flexRadioDefault" id="4" onClick={() => onClick("4")}/>
			  <label class="form-check-label" for="4">4</label>
			</div>
			<div class="form-check form-check-inline">
			  <input class="form-check-input" type="radio" name="flexRadioDefault" id="5" onClick={() => onClick("5")}/>
			  <label class="form-check-label" for="5">5</label>
			</div>
			<div class="mb-3">
		    	<label for="Comment" class="form-label">Comment</label>
		    	<textarea type="textarea"  rows="5" class="form-control" id="Comment" onChange={onChange}></textarea>
		  	</div>
		  	
		  	<hr />
		  	<button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
		</form>
	</div>
	</div>
	)
	


}

export default RateAndComment;