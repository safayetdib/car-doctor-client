import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<main>
			<section className="flex h-screen items-center bg-gray-100 p-16 text-gray-900">
				<div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
					<div className="max-w-md text-center">
						<h2 className="mb-8 text-9xl font-extrabold text-gray-600">
							<span className="sr-only">Error</span>404
						</h2>
						<p className="text-2xl font-semibold md:text-3xl">
							Sorry, we couldn't find this page.
						</p>
						<p className="mb-8 mt-4 text-gray-400">
							But dont worry, you can find plenty of other things on our
							homepage.
						</p>
						<Link
							rel="noopener noreferrer"
							href="/"
							className="L-Affiliate-Tagged rounded bg-violet-400 px-8 py-3 font-semibold text-gray-900">
							Back to homepage
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ErrorPage;
