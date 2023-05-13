import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
	const { user } = useContext(AuthContext);
	const [bookings, setBookings] = useState([]);

	const url = `http://localhost:5000/bookings?email=${user.email}`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setBookings(data);
			});
	}, [url]);

	const handleDelete = (id) => {
		const proceed = confirm('Are You Sure?');
		if (proceed) {
			fetch(`http://localhost:5000/bookings/${id}`, {
				method: 'DELETE',
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.deletedCount > 0) {
						alert('Deleted Successfully!');
						const remaining = bookings.filter((booking) => booking._id !== id);
						setBookings(remaining);
					}
				});
		}
	};

	const handleConfirm = (id) => {
		fetch(`http://localhost:5000/bookings/${id}`, {
			method: 'PATCH',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ status: 'confirm' }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					//update state
					const remaining = bookings.filter((booking) => booking._id !== id);
					const updated = bookings.find((booking) => booking._id === id);
					updated.status = 'confirm';
					const newBookings = [updated, ...remaining];
					setBookings(newBookings);
				}
			});
	};
	return (
		<div className="mx-auto mb-10 min-h-[80vh] max-w-7xl text-gray-800">
			<h2 className="text-center text-3xl ">
				Your Bookings: {bookings.length}
			</h2>

			<div className="mt-6 w-full overflow-x-auto">
				<table className="table w-full">
					{/* head */}
					<thead className="text-gray-50">
						<tr>
							<th>Image</th>
							<th>Service</th>
							<th>Name</th>
							<th>Email</th>
							<th>Price</th>
							<th>Status</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{bookings.map((booking) => (
							<BookingRow
								key={booking._id}
								booking={booking}
								handleDelete={handleDelete}
								handleConfirm={handleConfirm}
							/>
						))}
						<td></td>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Bookings;
