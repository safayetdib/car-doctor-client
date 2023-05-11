import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
	const bannerImages = [
		{ src: img1 },
		{ src: img2 },
		{ src: img3 },
		{ src: img4 },
		{ src: img5 },
		{ src: img6 },
	];

	return (
		<section className="relative mb-10">
			<div className="carousel h-[80vh] w-full rounded-md">
				{bannerImages.map((img, idx) => (
					<div
						key={idx}
						id={`slide${idx + 1}`}
						className="carousel-item relative w-full">
						{/* image */}
						<img src={img.src} className="w-full object-cover" />
						{/* buttons */}
						<div className="absolute bottom-0 left-5 right-5 z-50 flex -translate-y-1/2 transform justify-end gap-4">
							<a
								href={
									idx === 0 ? `#slide${bannerImages.length}` : `#slide${idx}`
								}
								className="btn-ghost btn-circle btn  bg-slate-500 bg-opacity-60 transition hover:bg-accent">
								❮
							</a>
							<a
								href={
									idx + 1 !== bannerImages.length
										? `#slide${idx + 2}`
										: `#slide1`
								}
								className="btn-ghost btn-circle btn  bg-slate-500 bg-opacity-60 transition hover:bg-accent">
								❯
							</a>
						</div>
					</div>
				))}
				<div className="pb-22 absolute h-full w-full rounded-md bg-gradient-to-r from-[#151515] to-[#15151500]">
					<div className="ml-4 flex h-full max-w-sm flex-col justify-center gap-4 sm:gap-6 md:ml-10 lg:ml-16">
						<h2 className="text-4xl font-bold text-gray-50 sm:text-5xl lg:text-6xl">
							Affordable Price For Car Servicing
						</h2>
						<p className="text-sm text-gray-100">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
							aliquid, illum possimus qui at eos molestiae eveniet facilis minus
							omnis?
						</p>
						<div className="item-center flex flex-wrap gap-2 sm:gap-4">
							<button className="btn-accent btn rounded text-xs">
								Discover More
							</button>
							<button className="btn-outline btn rounded text-xs">
								Latest Project
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
