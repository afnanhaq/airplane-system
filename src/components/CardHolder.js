const CardHolder = (props) => {
	return (
		<div class="container">
			<h2 class="text-center mt-3">{props.personType}</h2>
    		<div class="row my-3">
    			{props.children}
    		</div>
    	</div>
	)
}

export default CardHolder;