import { Link } from 'react-router-dom';
import './../App.css';

const Navbar = (props) => {
	return (
		<nav class="navbar navbar-light navbar-expand-lg bg-primary py-3">
		  	<div class="container-fluid">
		    	<Link to="/" class="mb-0 h1 display-3 none">Afnan's Travels</Link>
		  	</div>
		  	<div class="collapse navbar-collapse" id="navbarNav">
		      	<ul class="navbar-nav ml-auto">
		      		<Link to="/register" className="none">
			        <li class="nav-item">
			          <a class="nav-link" aria-current="page" href="#"><h2>Register</h2></a>
			        </li>
			        </Link>
			        <Link to="/login" className="none">
			        <li class="nav-item">
			          <a class="nav-link" href="#"><h2>Login</h2></a>
			        </li>
			        </Link>
		        </ul>
	    	</div>
		</nav>
	)
}

export default Navbar;