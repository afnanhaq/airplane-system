
const Login = (props) => {

	return (
		<div className="col-md-4 mx-auto mt-5">
			<h2 class="mt-3">Login</h2>
			<form>
				<p className="mb-1"> Choose user type: </p>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="CustomerLogin"/>
				  <label class="form-check-label" for="CustomerLogin">Customer</label>
				</div>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="BookingAgentLogin" />
				  <label class="form-check-label" for="BookingAgentLogin">Booking Agent</label>
				</div>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="StaffLogin"/>
				  <label class="form-check-label" for="StaffLogin">Staff</label>
				</div>
				<div class="mb-3">
			    	<label for="exampleInputEmail1" class="form-label">Username</label>
			    	<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
			  	</div>
			  	<div class="mb-3">
			    	<label for="exampleInputPassword1" class="form-label">Password</label>
			    	<input type="password" class="form-control" id="exampleInputPassword1" />
			  	</div>
			  	<button type="submit" class="btn btn-primary">Login</button>
			</form>
		</div>

	)
}

export default Login;