import Card from './Card';
import CardHolder from './CardHolder';

const EntrancePage = (props) => {
	return (
			<CardHolder personType="Welcome!">
			    <Card titleicon="fa fa-search fa-3x" title="Search for flights" link="/searchforflights" />
		        {/*<Card titleicon="fa fa-map-marker-alt fa-3x" title="Check flight status" link="/seeflightstatus" />*/}
		    </CardHolder>
	)
}

export default EntrancePage;