import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
	const { service_id, title, price } = useLoaderData();

	return (
		<div>
			<h1>Checkout</h1>
			<p>{service_id}</p>
			<p>{title}</p>
			<p>{price}</p>
		</div>
	);
};

export default Checkout;
