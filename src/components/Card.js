import './Card.css';
import { Link } from 'react-router-dom';
const Card = (props) => {
	return (
		<div className="col-md-4 my-2">
			<Link to={props.link} className="none">
        	<div className="card card-special text-center h-100 py-5">
	            <div className="card-block">
	                <h2><i className={props.titleicon} ></i></h2>
	                <h2 className="card-title">{props.title}</h2>
	            </div>
        	</div>
        	</Link>
    	</div>
	)
	
}

export default Card;
