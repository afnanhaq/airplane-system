import Card from './Card';
import CardHolder from './CardHolder';
import Navbar from './Navbar';
import './../App.css';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ViewCommission from './ViewCommission';

const BookingAgentMainPage = (props) => {
	return (
		<div>
		<Navbar />
		<CardHolder personType="Booking Agent Dashboard">
			<Card titleicon="fa fa-plane fa-3x" title="View my flights" link="/viewmyflights" />
			<Card titleicon="fa fa-search-dollar fa-3x" title="Search & purchase" link="/searchforflights" />
			<Card titleicon="fa fa-funnel-dollar fa-3x" title="View commission" link="/viewcommission" />
			<Card titleicon="fa fa-list-ol fa-3x" title="View top customers" link="/viewtopcustomers" />
		</CardHolder>
		</div>
	)
}

export default BookingAgentMainPage;