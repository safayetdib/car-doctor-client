import { FcOvertime, FcCallback, FcLandscape } from 'react-icons/fc';

const Contact = () => {
	return (
		<section className="my-20 grid content-between justify-items-center gap-16 rounded-lg bg-black px-4 py-24 sm:px-8 md:grid-cols-3 md:gap-6 lg:px-16">
			<div className="flex items-center gap-4 text-white">
				<div>
					<FcOvertime className="text-5xl" />
				</div>
				<div>
					<p className="text-sm">We are open monday-friday</p>
					<h6 className="text-lg font-bold md:text-2xl">7:00 am - 9:00 pm</h6>
				</div>
			</div>
			<div className="flex items-center gap-4 text-white">
				<div>
					<FcCallback className="text-5xl" />
				</div>
				<div>
					<p className="text-sm">Have a question?</p>
					<h6 className="text-lg font-bold md:text-2xl">+2546 251 2658</h6>
				</div>
			</div>
			<div className="flex items-center gap-4 text-white">
				<div>
					<FcLandscape className="text-5xl" />
				</div>
				<div>
					<p className="text-sm">Need a repair? our address</p>
					<h6 className="text-lg font-bold md:text-2xl">
						Liza Street, New York
					</h6>
				</div>
			</div>
		</section>
	);
};

export default Contact;
