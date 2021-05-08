import {useState, useEffect} from 'react';
const axios = require('axios');

const FlightRatingCard = (props) => {
	return (
		<div class="card col-md-12 mb-3">
		  <div class="card-body">
		    <h5 class="card-title">{props.username}</h5>
		    <h6 class="card-subtitle mb-2 text-muted">Rating: {props.rating}</h6>
		    <p class="card-text">{props.comment}</p>

		  </div>
		</div>
	)
}
//Some example text. Some example text. lorem ipsum yeahh
const FlightRatings = (props) => {
	const [flightName, setFlightName] = useState('MG 370');
	const [averageRating, setAverageRating] = useState('3.6');
	const [ratings, setRatings] = useState([
	{
		username: "jeremy",
		rating: "4",
		comment: "woww graaaape"
	},
	{
		username: "ringo",
		rating: "3",
		comment: "bad"
	},
	{
		username: "jingo",
		rating: "2",
		comment: "okay"
	}
	]);

	useEffect(() => {
		axios.get("/flightratings")
		.then(response => console.log(response))
	}, [])

	const flightCards = ratings.map(rating => {return <FlightRatingCard username={rating.username} rating={rating.rating} comment={rating.comment} />})
	return (
		<div className="col-md-8 mx-auto">
			<h1> Reviews for flight MG 370 </h1>
			<h2> Average rating: 3.6 </h2>
			<div className="card-deck">
				{flightCards}
			</div>
		</div>
	)
}

export default FlightRatings;