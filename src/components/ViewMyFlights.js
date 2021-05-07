import {useState} from 'react';

import SearchFlightCards from './SearchFlightCards';

const ViewMyFlights = (props) => {
	const [type, setType] = useState(false);

    const onClick = () => {
    	setType(!type);
	};
	return (
		<div className="container">
		<h1> My flights </h1>
		<div class="form-check">
		  <input class="form-check-input" type="checkbox" id="defaultCheck1" onClick={onClick} />
		  <label class="form-check-label" for="defaultCheck1">
		    Show past flights?
		  </label>
		</div>
		<SearchFlightCards />
		</div>
	)

}

export default ViewMyFlights;