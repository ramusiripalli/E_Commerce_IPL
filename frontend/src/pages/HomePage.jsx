import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";


const categories = [
	{ href: "/bats", name: "Bats", imageUrl: "/bats.png" },
	{ href: "/t-shirts", name: "IPL T-shirts", imageUrl: "/iplteaShirts.jpg" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes.png" },
	{ href: "/kit", name: "Cricket Kit", imageUrl: "/cricketKit.png" },
	{ href: "/helmets", name: "Helmets", imageUrl: "/helmet.png" },
	{ href: "/caps", name: "Caps", imageUrl: "/caps.png" },
	
];

const HomePage = () => {

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					Explore Our Categories
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					Discover the latest trends in eco-friendly fashion
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>
			</div>
		</div>
	);
};
export default HomePage;