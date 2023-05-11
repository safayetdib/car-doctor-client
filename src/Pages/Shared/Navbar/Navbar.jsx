import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { HiOutlineShoppingBag, HiOutlineSearch } from 'react-icons/hi';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
	const navigation = [
		{ title: 'Home', path: '/' },
		{ title: 'About', path: '/about' },
		{ title: 'Services', path: '/services' },
		{ title: 'Blog', path: '/blog' },
		{ title: 'Contact', path: '/contact' },
	];

	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut().then(() => {
			console.log('Signed Out Successfully!');
		});
	};

	return (
		<div className="navbar mx-auto max-w-7xl px-4 py-6 text-gray-800">
			<div className="navbar-start">
				<Link to="/" className="text-xl normal-case">
					<img src={logo} alt="" />
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					{navigation.map((nav, idx) => (
						<li key={idx}>
							<Link to={nav.path}>{nav.title}</Link>
						</li>
					))}

					<li>
						{user ? (
							<div className="avatar border">
								<div className="w-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
									<img src="/src/assets/images/team/2.jpg" />
								</div>
								<button onClick={handleLogOut} className="btn-sm btn">
									Logout
								</button>
							</div>
						) : (
							<Link to="/login">Login</Link>
						)}
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<div className="hidden items-center lg:flex">
					<Link to="/cart" className="mr-8 text-2xl text-gray-700">
						<HiOutlineShoppingBag />
					</Link>
					<Link to="/search" className="mr-8 text-2xl text-gray-700">
						<HiOutlineSearch />
					</Link>
					<a className="btn-outline btn-accent btn rounded px-6 text-base font-semibold capitalize">
						Appointment
					</a>
				</div>
				<div className="dropdown-bottom dropdown-end dropdown">
					<label tabIndex={0} className="btn-ghost btn m-1 lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow">
						{navigation.map((nav, idx) => (
							<li key={idx}>
								<Link to={nav.path}>{nav.title}</Link>
							</li>
						))}

						<li>
							<Link to="/cart">
								<HiOutlineShoppingBag /> Cart
							</Link>
						</li>
						<li>
							<Link to="/search">
								<HiOutlineSearch /> Search
							</Link>
						</li>

						<li>
							{user ? (
								<div className="avatar border">
									<div className="w-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
										<img src="/src/assets/images/team/2.jpg" />
									</div>
									<button onClick={handleLogOut} className="btn-sm btn">
										Logout
									</button>
								</div>
							) : (
								<Link to="/login">Login</Link>
							)}
						</li>

						<li className="mt-4">
							<a className="btn-outline btn-accent btn rounded px-6 text-base font-semibold capitalize">
								Appointment
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
