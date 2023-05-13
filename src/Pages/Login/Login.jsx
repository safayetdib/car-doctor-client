import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg';
import { FaFacebookF, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
	const { signIn } = useContext(AuthContext);

	const handleLogin = (e) => {
		e.preventDefault();

		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		signIn(email, password)
			.then((res) => {
				const user = res.user;
			})
			.catch((err) => console.log(err.message));
	};

	return (
		<main className="mx-auto max-w-7xl px-4">
			<section className="mb-20 mt-10 flex flex-col-reverse items-center justify-center gap-16 text-gray-800 md:flex-row md:gap-8">
				{/* left-image */}
				<div className=" w-full  md:w-1/2">
					<img src={image} alt="" className="mx-auto max-w-md object-cover" />
				</div>
				{/* right-form */}
				<div className="w-full md:w-1/2">
					<div className=" max-w-md rounded-md border p-6 shadow-md sm:p-12 ">
						<form onSubmit={handleLogin}>
							<h4 className="mb-8 text-center text-3xl font-bold">Login</h4>
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
								className="btn-accent btn mt-8 w-full text-gray-50">
								Sign In
							</button>
						</form>

						<div className="mt-6 flex items-center justify-center gap-4 text-gray-700">
							<hr className="w-full border border-gray-300" />
							<p>Or</p>
							<hr className="w-full border border-gray-300" />
						</div>

						<div className="mt-4 space-y-4 text-center">
							<p>Sign In With</p>
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
								<Link to="/signup" className="font-bold text-accent">
									Sign Up
								</Link>
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Login;
