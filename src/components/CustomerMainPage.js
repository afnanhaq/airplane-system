import Card from './Card';
import CardHolder from './CardHolder';
import Navbar from './Navbar';

const CustomerMainPage = (props) => {
	return (
		<div>
		<Navbar />
		<CardHolder personType="Customer Dashboard">
			<Card titleicon="fa fa-plane fa-3x" title="View my flights" link="/viewmyflights" />
			<Card titleicon="fa fa-search-dollar fa-3x" title="Search & purchase" link="/searchforflights" />
			<Card titleicon="fa fa-star fa-3x" title="Rate & comment" link="/rateandcomment" />
			<Card titleicon="fa fa-comments-dollar fa-3x" title="Track spending" link="/trackmyspending" />
		</CardHolder>
		</div>
	)
}

export default CustomerMainPage;