import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
	const { _id, title, price, img } = service;
	return (
		<div className="card w-full rounded-lg border bg-base-100 p-4 shadow-xl">
			<figure>
				<img
					src={img}
					alt={title}
					className="h-60 w-full rounded-lg object-cover"
				/>
			</figure>
			<div className="card-body mt-8 p-0">
				<h2 className="card-title font-bold text-gray-800">{title}</h2>
				<div className="card-actions items-center justify-end">
					<p className="text-lg font-bold text-accent">Price: ${price}</p>
					<Link
						to={`/book/${_id}`}
						className="btn-ghost btn text-base font-bold capitalize text-accent">
						Book Now
						<FaArrowRight className="ml-2" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
