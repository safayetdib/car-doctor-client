import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
	const { title, price, img } = service;
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
					<button className="btn-ghost btn text-xl text-accent">
						<FaArrowRight />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
