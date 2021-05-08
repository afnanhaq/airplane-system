import {useState, useEffect } from 'react';
import { Link} from "react-router-dom";

const Login = (props) => {

	var success = null;
	if (window.sessionStorage.getItem('type') === "customer") {
		success = (
			<div>
				<p> Logged in successfully as customer! </p>
				<Link to="/customer"> Visit dashboard here </Link>
			</div>
		)
	} 
	else if (window.sessionStorage.getItem('type') === "bookingAgent") {
		success = (
			<div>
				<p> Logged in successfully as booking agent! </p>
				<Link to="/bookingagent"> Visit dashboard here </Link>
			</div>
		)
	} 
	if (window.sessionStorage.getItem('type') === "staff") {
		success = (
			<div>
				<p> Logged in successfully as staff! </p>
				<Link to="/staff"> Visit dashboard here </Link>
			</div>
		)
	} 

	return (
		<div className="col-md-4 mx-auto mt-5">
			{window.sessionStorage.getItem('type') ? success : (
			<div>
			<h2 class="mt-3">Login</h2>
			<form>
				<p className="mb-1"> Choose user type: </p>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="CustomerLogin" onClick={() => props.setType("customer")}/>
				  <label class="form-check-label" for="CustomerLogin">Customer</label>
				</div>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="BookingAgentLogin" onClick={() => props.setType("bookingAgent")} />
				  <label class="form-check-label" for="BookingAgentLogin">Booking Agent</label>
				</div>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="StaffLogin" onClick={() => props.setType("staff")}/>
				  <label class="form-check-label" for="StaffLogin">Staff</label>
				</div>
				<div class="mb-3">
			    	<label for="username" class="form-label">Username</label>
			    	<input value={props.username} id="username" onChange={e => props.setUsername(e.target.value)} type="text" className="form-control" name="username" />
			  	</div>
			  	<div class="mb-3">
			    	<label for="password" class="form-label">Password</label>
			    	<input value={props.password} id="password" onChange={e => props.setPassword(e.target.value)} type="password" className="form-control" name="password" />
			  	</div>
			  	<button type="submit" class="btn btn-primary" onClick={props.handleSubmit}>Login</button>
			</form>
			</div>
			) }
			
		</div>

	)
}

export default Login;