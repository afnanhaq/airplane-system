import Card from './Card';
import CardHolder from './CardHolder';
import Navbar from './Navbar';
import {Redirect, Route, Switch} from 'react-router-dom';

import ViewMyFlights from './ViewMyFlights';
import RateAndComment from './RateAndComment';
import TrackMySpending from './TrackMySpending';
import BuyTicket from './BuyTicket';
import SearchForFlights from './SearchForFlights';

const CustomerMainPage = (props) => {
	return (
		<div>
		<Switch>
			
		</Switch>
		<CardHolder personType="Customer Dashboard">
			<Card titleicon="fa fa-plane fa-3x" title="View my flights" link="/viewmyflights" />
			<Card titleicon="fa fa-search-dollar fa-3x" title="Search & purchase" link="/searchandpurchase" />
			<Card titleicon="fa fa-comments-dollar fa-3x" title="Track spending" link="/trackmyspending" />
		</CardHolder>
		</div>
	)
}

export default CustomerMainPage;