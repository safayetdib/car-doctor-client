import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch('services.json')
			.then((res) => res.json())
			.then((data) => {
				setServices(data);
			});
	}, []);

	return (
		<section className="mb-10 mt-32">
			<div className="space-y-4 text-center">
				<p className="text-lg font-bold text-accent">Service</p>
				<h4 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
					Our Service Area
				</h4>
				<p className="mx-auto max-w-lg text-gray-700">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea assumenda
					inventore iste, perspiciatis doloremque non, alias eos.
				</p>
			</div>

			<div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{services.map((service, idx) => (
					<ServiceCard key={idx} service={service} />
				))}
			</div>
			<div className="mt-8 text-center">
				<button className="btn-outline btn-accent btn rounded px-6 text-base font-semibold capitalize">
					More Services
				</button>
			</div>
		</section>
	);
};

export default Services;
