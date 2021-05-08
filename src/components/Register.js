import { useState } from 'react';
const axios = require('axios');
const Register = () => {
	const [userType, setUserType] = useState("");

	function useInput({ type, className, id /*...*/ }) {
	   const [value, setValue] = useState("");
	   const input = <input value={value} id={id} onChange={e => setValue(e.target.value)} 
	   type={type} className={className} name={id} />;
	   return [value, input];
 	}

 	const [emailValue, setEmailValue] = useInput({ type: "email", className: "form-control", id: "email" });
 	const [passwordValue, setPasswordValue] = useInput({ type: "password", className: "form-control", id: "password" });

 	const [buildingNameValue, setBuildingNameValue] = useInput({ type: "text", className: "form-control", id: "buildingName" });
 	const [streetValue, setStreetValue] = useInput({ type: "text", className: "form-control", id: "street" });
 	const [cityValue, setCityValue] = useInput({ type: "text", className: "form-control", id: "city" });
 	const [stateValue, setStateValue] = useInput({ type: "text", className: "form-control", id: "state" });
 	const [companyValue, setCompanyValue] = useInput({ type: "text", className: "form-control", id: "company" });
 	const [phoneNumberValue, setPhoneNumberValue] = useInput({ type: "number", className: "form-control", id: "phoneNumber" });
 	const [passportNumberValue, setPassportNumberValue] = useInput({ type: "number", className: "form-control", id: "passportNumber" });
 	const [passportExpirationValue, setPassportExpirationValue] = useInput({ type: "date", className: "form-control", id: "passportExpiration" });
 	const [countryValue, setCountryValue] = useInput({ type: "text", className: "form-control", id: "country" });
 	const [dobValue, setDobValue] = useInput({ type: "date", className: "form-control", id: "dob" });

 	const [idValue, setIdValue] = useInput({ type: "number", className: "form-control", id: "id" });

 	const [firstNameValue, setFirstNameValue] = useInput({ type: "text", className: "form-control", id: "firstName" });
 	const [lastNameValue, setLastNameValue] = useInput({ type: "text", className: "form-control", id: "lastName" });

 	const handleRegister = (e) => {
 		let values = '';
 		if (userType === "customer") {
 			values = {
 				emailValue, passwordValue, buildingNameValue, streetValue, cityValue,
 				stateValue, companyValue, phoneNumberValue, passportNumberValue, passportExpirationValue,
 				countryValue, dobValue
 			}
 		}
 		else if (userType === "bookingAgent") {
 			values = {emailValue, passwordValue, idValue}
 		}
 		else if (userType === "staff") {
 			values = {emailValue, passwordValue, firstNameValue, lastNameValue}
 		}
 		axios.post("/register", values)
 		.then(response => console.log(response))
 	}
	const CustomerForm = (
		<div>
			<div class="mb-3">
		    	<label for="email" class="form-label">Email</label>
		    	{setEmailValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="Password" class="form-label">Password</label>
		    	{setPasswordValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="Building Name" class="form-label">Building Name</label>
		    	{setBuildingNameValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="Street" class="form-label">Street</label>
		    	{setStreetValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="City" class="form-label">City</label>
		    	{setCityValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="State" class="form-label">State</label>
		    	{setStateValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="Phone number" class="form-label">Phone number</label>
		    	{setPhoneNumberValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="Passport number" class="form-label">Passport number</label>
		    	{setPassportNumberValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="Passport expiration" class="form-label">Passport expiration</label>
		    	{setPassportExpirationValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="Passport Country" class="form-label">Passport Country</label>
		    	{setCountryValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="Date of birth" class="form-label">Date of birth</label>
		    	{setDobValue}
		  	</div>
	  	</div>
	)

	const BookingAgentForm = (
		<div>
			<div class="mb-3">
		    	<label for="email" class="form-label">Email</label>
		    	{setEmailValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="Password" class="form-label">Password</label>
		    	{setPasswordValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="ID" class="form-label">ID</label>
		    	{setIdValue}
		  	</div>
		</div>
	)

	const StaffForm = (
		<div>
			<div class="mb-3">
		    	<label for="email" class="form-label">Email</label>
		    	{setEmailValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="Password" class="form-label">Password</label>
		    	{setPasswordValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="Company" class="form-label">Company</label>
		    	{setCompanyValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="First name" class="form-label">First name</label>
		    	{setFirstNameValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="Last name" class="form-label">Last name</label>
		    	{setLastNameValue}
		  	</div>
		  	<div class="mb-3">
		    	<label for="Date of birth" class="form-label">Date of birth</label>
		    	{setDobValue}
		  	</div>
		</div>
	)
	return (
		<div className="col-md-4 mx-auto mt-5">
			<h2 class="mt-3">Register</h2>
			<form>
				<p className="mb-1"> Choose user type: </p>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => setUserType("customer")}/>
				  <label class="form-check-label" for="flexRadioDefault1">Customer</label>
				</div>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => setUserType("bookingAgent")}/>
				  <label class="form-check-label" for="flexRadioDefault2">Booking Agent</label>
				</div>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={() => setUserType("staff")}/>
				  <label class="form-check-label" for="flexRadioDefault3">Staff</label>
				</div>

			  	{userType === "Customer" ? CustomerForm : (userType==="BookingAgent" ? BookingAgentForm : (userType ==="Staff" ? StaffForm : null))}
			  	<hr />
			  	<button type="submit" class="btn btn-primary" onClick={handleRegister}>Register</button>
			</form>
		</div>
	)
}

export default Register;