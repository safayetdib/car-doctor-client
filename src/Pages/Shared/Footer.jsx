import { Link } from 'react-router-dom';
import logo from '../../assets/logo-white.svg';
import {
	AiFillGoogleCircle,
	AiFillTwitterCircle,
	AiFillInstagram,
	AiFillLinkedin,
} from 'react-icons/ai';

const Footer = () => {
	return (
		<footer className="bg-base-200">
			<div className="footer mx-auto max-w-7xl px-4 py-20 text-base-content">
				<div className="space-y-4">
					<img src={logo} alt="" />
					<p className="max-w-xs">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
						quisquam ipsum odit quos exercitationem, velit ab repellendus
						pariatur facere alias?
					</p>
					<div className="flex items-center gap-2 text-3xl">
						<Link to="https://www.google.com/" target="_blank">
							<AiFillGoogleCircle />
						</Link>
						<Link to="https://www.twitter.com/" target="_blank">
							<AiFillTwitterCircle />
						</Link>
						<Link to="https://www.instagram.com/" target="_blank">
							<AiFillInstagram />
						</Link>
						<Link to="https://www.linkedin.com/" target="_blank">
							<AiFillLinkedin />
						</Link>
					</div>
				</div>
				{/* about */}
				<div>
					<span className="footer-title mb-8">About</span>
					<a className="link-hover link">Home</a>
					<a className="link-hover link">Service</a>
					<a className="link-hover link">Contact</a>
				</div>
				{/* company */}
				<div>
					<span className="footer-title mb-8">Company</span>
					<a className="link-hover link">Why Car Doctor</a>
					<a className="link-hover link">About</a>
				</div>
				{/* support */}
				<div>
					<span className="footer-title mb-8">Support</span>
					<a className="link-hover link">Support Center</a>
					<a className="link-hover link">Feedback</a>
					<a className="link-hover link">Accessibility</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
