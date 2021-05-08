import Card from './Card';
import CardHolder from './CardHolder';
import Navbar from './Navbar';

const StaffMainPage = (props) => {
	return (
		<div>
		<CardHolder personType="Staff Dashboard">
			<Card titleicon="fa fa-location-arrow fa-3x" title="View flights" link="/viewmyflights" />
			<Card titleicon="fa fa-plane-departure fa-3x" title="Create new flight" link="/createnewflight" />
			<Card titleicon="fa fa-plane fa-3x" title="Add airplane" link="/addairplane" />
			<Card titleicon="fa fa-project-diagram fa-3x" title="Add airport" link="/addairport" />
			<Card titleicon="fa fa-star-half-alt fa-3x" title="View flight ratings" link="/viewflightratings" />
			<Card titleicon="fa fa-users fa-3x" title="View booking agents" link="/viewbookingagents" />
			<Card titleicon="fa fa-list-ol fa-3x" title="View frequent customers" link="/viewfrequentcustomers" />
			<Card titleicon="fa fa-book fa-3x" title="View reports" link="/viewreports" />
			<Card titleicon="fa fa-chart-pie fa-3x" title="View revenue chart" link="/comparisonofrevenue" />
			<Card titleicon="fa fa-passport fa-3x" title="View top destinations" link="/viewtopdestinations" />
		</CardHolder>
		</div>
	)
}

export default StaffMainPage;