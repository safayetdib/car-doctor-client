import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const BookService = () => {
	const { _id, title, price, img } = useLoaderData();

	const { user } = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const name = form.name.value;
		const email = (user && user?.email) || form.email.value;
		const date = form.date.value;
		const due = form.due.value;

		const booking = {
			customerName: name,
			email,
			date,
			img,
			service: title,
			service_id: _id,
			price: price,
			due,
		};

		fetch('http://localhost:5000/bookings', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(booking),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					alert('Service Booked Successfully!');
				}
			});
	};

	return (
		<div>
			<div className="hero min-h-[80vh] bg-gray-100 text-gray-800">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-3xl font-bold">Book Service: {title}</h1>
						<p className="py-6 text-xl">Price: ${price}</p>
					</div>
					<div className="card w-full max-w-sm flex-shrink-0 bg-white shadow-2xl">
						<form onSubmit={handleSubmit} className="card-body">
							{/* name */}
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									type="text"
									name="name"
									placeholder="Name"
									defaultValue={user && user?.displayName}
									className="input-bordered input"
								/>
							</div>
							{/* email */}
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									name="email"
									placeholder="email"
									defaultValue={user && user?.email}
									className="input-bordered input"
								/>
							</div>
							{/* date */}
							<div className="form-control">
								<label className="label">
									<span className="label-text">Date</span>
								</label>
								<input
									type="date"
									name="date"
									placeholder="Date"
									className="input-bordered input"
								/>
							</div>
							{/* due amount */}
							<div className="form-control">
								<label className="label">
									<span className="label-text">Due Amount</span>
								</label>
								<input
									type="text"
									name="due"
									placeholder="$20.00"
									className="input-bordered input"
								/>
							</div>
							{/* book now */}
							<div className="form-control mt-6">
								<button type="submit" className="btn-primary btn">
									Book Now
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookService;
