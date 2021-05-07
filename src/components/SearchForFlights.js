import {useState} from 'react';

import FlightSearchTool from './FlightSearchTool';
import SearchFlightCards from './SearchFlightCards';

const SearchForFlights = (props) => {
	return (
		<div className="container">
			<FlightSearchTool title="Search for flights" />
			<SearchFlightCards />
		</div>
	)
}

export default SearchForFlights;