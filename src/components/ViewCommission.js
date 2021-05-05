const ViewCommission = (props) => {
	return (
		<div className=" row border border-primary col-md-6 p-4 my-4 mx-auto">
		<h1> View commission </h1>
		<div class="mb-3">
			    <label for="Start date of commission" className="mt-4">Start date of commission&emsp;</label>
				<input type="date" id="end" name="Start date of commission" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
			</div>
			<div class="mb-3">
			    <label for="Last date of commission" className="mt-4">Last date of commission&emsp;</label>
				<input type="date" id="end" name="Last date of commission" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
		</div>
		<h3> Total Commission: $500000 </h3>
		<h3> Average Commission per Ticket: 5500 </h3>
		<h3> Total number of tickets sold: 65 </h3> 
		</div>
	)
}

export default ViewCommission;