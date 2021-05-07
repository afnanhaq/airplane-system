import {useState} from 'react';

const Login = (props) => {
	function useInput({ type, className, id /*...*/ }) {
	   const [value, setValue] = useState("");
	   const input = <input value={value} id={id} onChange={e => setValue(e.target.value)} 
	   type={type} className={className} name={id} />;
	   return [value, input];
 	}

 	const [usernameValue, setUsernameValue] = useInput({ type: "text", className: "form-control", id: "username" });
 	const [passwordValue, setPasswordValue] = useInput({ type: "password", className: "form-control", id: "password" })

 	const [type, setType] = useState('');

    const onClick = (typeChosen) => {
    	setType(typeChosen);
	};

	return (
		<div className="col-md-4 mx-auto mt-5">
			<h2 class="mt-3">Login</h2>
			<form>
				<p className="mb-1"> Choose user type: </p>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="CustomerLogin" onClick={() => onClick("Customer")}/>
				  <label class="form-check-label" for="CustomerLogin">Customer</label>
				</div>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="BookingAgentLogin" onClick={() => onClick("BookingAgent")} />
				  <label class="form-check-label" for="BookingAgentLogin">Booking Agent</label>
				</div>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="flexRadioDefault" id="StaffLogin" onClick={() => onClick("Staff")}/>
				  <label class="form-check-label" for="StaffLogin">Staff</label>
				</div>
				<div class="mb-3">
			    	<label for="username" class="form-label">Username</label>
			    	{setUsernameValue}
			  	</div>
			  	<div class="mb-3">
			    	<label for="password" class="form-label">Password</label>
			    	{setPasswordValue}
			  	</div>
			  	<button type="submit" class="btn btn-primary">Login</button>
			</form>
		</div>

	)
}

export default Login;