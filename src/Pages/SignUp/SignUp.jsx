import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg';
import { FaFacebookF, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
	const { createUser } = useContext(AuthContext);

	const handleSignUp = (e) => {
		e.preventDefault();

		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;

		createUser(email, password)
			.then((res) => {
				const user = res.user;
				console.log(user);
			})
			.catch((err) => console.log(err.message));
	};

	return (
		<main className="mx-auto max-w-7xl px-4">
			<section className="mb-20 mt-10 flex flex-col-reverse items-center justify-center gap-16 text-gray-800 md:flex-row md:gap-8">
				{/* left-image */}
				<div className="mx-auto w-full max-w-lg md:w-1/2">
					<img src={image} alt="" className="object-cover" />
				</div>
				{/* right-form */}
				<div className="w-full max-w-md rounded-md border p-6 shadow-md sm:p-12 md:w-1/2">
					<form onSubmit={handleSignUp}>
						<h4 className="mb-8 text-center text-3xl font-bold">Sign Up</h4>
						{/* name */}
						<div>
							<label htmlFor="name" className="font-semibold">
								Name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								required
								placeholder="Your Name"
								className="input-bordered input mt-2 w-full border-gray-500 ring-accent transition focus:ring-1"
							/>
						</div>
						{/* email */}
						<div className="mt-4">
							<label htmlFor="email" className="font-semibold">
								Email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								required
								placeholder="Your Email"
								className="input-bordered input mt-2 w-full border-gray-500 ring-accent transition focus:ring-1"
							/>
						</div>
						{/* password */}
						<div className="mt-4">
							<label htmlFor="password" className="font-semibold">
								Password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								required
								placeholder="Your Password"
								className="input-bordered input mt-2 w-full border-gray-500 ring-accent transition focus:ring-1"
							/>
						</div>

						<button
							type="submit"
							className="btn-accent btn mt-8 w-full text-white">
							Sign Up
						</button>
					</form>

					<div className="mt-6 flex items-center justify-center gap-4 text-gray-700">
						<hr className="w-full border border-gray-300" />
						<p>Or</p>
						<hr className="w-full border border-gray-300" />
					</div>

					<div className="mt-4 space-y-4 text-center">
						<p>Sign Up With</p>
						<div className="flex items-center justify-center gap-6">
							<Link className="rounded-full bg-gray-200 p-2 text-xl focus:ring-1">
								<FaFacebookF />
							</Link>
							<Link className="rounded-full bg-gray-200 p-2 text-xl focus:ring-1">
								<FaLinkedinIn />
							</Link>
							<Link className="rounded-full bg-gray-200 p-2 text-xl focus:ring-1">
								<FaGoogle />
							</Link>
						</div>
					</div>
					<div className="mt-6 text-center">
						<p>
							Already have an account?{' '}
							<Link to="/login" className="font-bold text-accent">
								Login
							</Link>
						</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default SignUp;
