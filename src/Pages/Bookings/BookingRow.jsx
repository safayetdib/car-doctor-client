const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
	const { _id, img, customerName, price, date, email, service, status } =
		booking;

	return (
		<tr>
			<td>
				<img src={img} alt="" className="h-16 w-16 object-cover" />
			</td>
			<td>{service}</td>
			<td>{customerName}</td>
			<td>{email}</td>
			<td>{price}</td>
			<td>
				{status === 'confirm' ? (
					<span className="font-bold text-primary">Confirmed</span>
				) : (
					<button
						onClick={() => handleConfirm(_id)}
						className="btn-outline btn-md btn">
						Confirm
					</button>
				)}
			</td>
			<td>
				<button
					className="btn-sm btn-circle btn"
					onClick={() => handleDelete(_id)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</td>
		</tr>
	);
};

export default BookingRow;
