import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
	return (
		<section className="my-20">
			<div className="hero">
				<div className="hero-content flex-col gap-16 p-0 md:gap-8 lg:flex-row">
					<div className="relative w-full lg:w-1/2">
						<img src={person} className="w-4/5 rounded-lg" />
						<img
							src={parts}
							className="absolute right-0 top-2/3 w-2/5 rounded-lg border-8 border-white"
						/>
					</div>
					<div className="space-y-4 lg:w-1/2">
						<p className="text-lg font-bold text-accent">About Us</p>
						<h4 className="text-3xl font-extrabold text-gray-800 md:text-4xl">
							We are qualified <br /> & of experience <br /> in this field
						</h4>
						<p className="text-gray-700">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
							assumenda inventore iste, perspiciatis doloremque non, alias eos,
							natus soluta molestiae aut eius obcaecati velit culpa rem in.
							Dolores, harum omnis?
						</p>
						<button className="btn-accent btn rounded capitalize">
							Get More Info
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
