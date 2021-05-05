import { useState } from 'react';

const Register = () => {
	const [userType, setUserType] = useState("");
	const CustomerForm = (
		<div>
			<div class="mb-3">
		    	<label for="email" class="form-label">Email</label>
		    	<input type="email" class="form-control" id="email"/>
		  	</div>
		  	<div class="mb-3">
		    	<label for="Password" class="form-label">Password</label>
		    	<input type="password" class="form-control" id="Password" />
		  	</div>
		  	<div class="mb-3">
		    	<label for="Building Name" class="form-label">Building Name</label>
		    	<input type="text" class="form-control" id="Building Name" />
		  	</div>
		  	<div class="mb-3">
		    	<label for="Street" class="form-label">Street</label>
		    	<input type="text" class="form-control" id="Street" />
		  	</div>
		  	<div class="mb-3">
		    	<label for="City" class="form-label">City</label>
		    	<input type="text" class="form-control" id="City" />
		  	</div>
		  	<div class="mb-3">
		    	<label for="State" class="form-label">State</label>
		    	<input type="text" class="form-control" id="State" />
		  	</div>
		  	<div class="mb-3">
		    	<label for="Phone number" class="form-label">Phone number</label>
		    	<input type="text" class="form-control" id="Phone number" />
		  	</div>
		  	<div class="mb-3">
		    	<label for="Passport number" class="form-label">Passport number</label>
		    	<input type="text" class="form-control" id="Passport number1" />
		  	</div>
		  	<div class="mb-3">
		    	<label for="Passport expiration" class="form-label">Passport expiration</label>
		    	<input type="text" class="form-control" id="Passport expiration" />
		  	</div>
		  	<div class="mb-3">
		    	<label for="Passport Country" class="form-label">Passport Country</label>
		    	<input type="text" class="form-control" id="Passport Country" />
		  	</div>
		  	<div class="mb-3">
		    	<label for="Date of birth" class="form-label">Date of birth</label>
		    	<input type="text" class="form-control" id="Date of birth" />
		  	</div>
	  	</div>
	)

	const BookingAgentForm = (
		<div>
			<div class="mb-3">
		    	<label for="email" class="form-label">Email</label>
		    	<input type="email" class="form-control" id="email"/>
		  	</div>
		  	<div class="mb-3">
		    	<label for="Password" class="form-label">Password</label>
		    	<input type="password" class="form-control" id="Password" />
		  	</div>
		  	<div class="mb-3">
		    	<label for="ID" class="form-label">ID</label>
		    	<input type="text" class="form-control" id="ID" />
		  	</div>
		</div>
	)

	const StaffForm = (
		<div>
			<div class="mb-3">
		    	<label for="email" class="form-label">Email</label>
		    	<input type="email" class="form-control" id="email"/>
		  	</div>
		  	<div class="mb-3">
		    	<label for="Password" class="form-label">Password</label>
		    	<input type="password" class="form-control" id="Password" />
		  	</div>
		  	<div class="mb-3">
		    	<label for="First name" class="form-label">First name</label>
		    	<input type="text" class="form-control" id="First name" />
		  	</div>
		  	<div class="mb-3">
		    	<label for="Last name" class="form-label">Last name</label>
		    	<input type="text" class="form-control" id="Last name" />
		  	</div>
		  	<div class="mb-3">
		    	<label for="Date of birth" class="form-label">Date of birth</label>
		    	<input type="text" class="form-control" id="Date of birth" />
		  	</div>
		</div>
	)
	return (
		<div className="col-md-4 mx-auto mt-5">
			<h2 class="mt-3">Register</h2>
			<form>
				<p className="mb-1"> Choose user type: </p>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => setUserType("Customer")}/>
				  <label class="form-check-label" for="flexRadioDefault1">Customer</label>
				</div>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => setUserType("BookingAgent")}/>
				  <label class="form-check-label" for="flexRadioDefault2">Booking Agent</label>
				</div>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={() => setUserType("Staff")}/>
				  <label class="form-check-label" for="flexRadioDefault3">Staff</label>
				</div>

			  	{userType === "Customer" ? CustomerForm : (userType==="BookingAgent" ? BookingAgentForm : (userType ==="Staff" ? StaffForm : null))}
			  	<hr />
			  	<button type="submit" class="btn btn-primary">Register</button>
			</form>
		</div>
	)
}

export default Register;