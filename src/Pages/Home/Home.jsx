import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Services from './Services/Services';
import Contact from './Contact/Contact';

const Home = () => {
	return (
		<main className="mx-auto max-w-7xl px-4">
			<Banner />
			<About />
			<Services />
			<Contact />
		</main>
	);
};

export default Home;
