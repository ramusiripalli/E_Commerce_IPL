import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useUserStore } from "../stores/useUserStore";


const categories = [
	{ href: "/bats", name: "Bats", imageUrl: "/bats.png" },
	{ href: "/t-shirts", name: "IPL T-shirts", imageUrl: "/iplteaShirts.jpg" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes.png" },
	{ href: "/kits", name: "Cricket Kit", imageUrl: "/cricketKit.png" },
	{ href: "/helmets", name: "Helmets", imageUrl: "/helmet.png" },
	{ href: "/caps", name: "Caps", imageUrl: "/caps.png" },
];

const HomePage = () => {
	const { user } = useUserStore();
	const teamColors = {
		RCB: 'text-red-600',
		KKR: 'text-purple-700', 
		MI: 'text-blue-100', 
		CSK: 'text-yellow-500', 
		SRH: 'text-orange-500', 
		DC: 'text-blue-700', 
		RR: 'text-pink-500', 
		PBKS: 'text-red-500', 
		LSG: 'text-blue-500',
		GT: 'text-blue-900'
	  };
	  
	  const teamColorClass = teamColors[user.team] || 'text-emerald-400';
	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				 <h1 className={`text-center text-3xl sm:text-4xl font-bold ${teamColorClass} mb-4`}>
					Hi {user.name}!  Welcome to the {user.team} Fan Store!
				</h1>
			
				<p className={`text-center text-xl ${teamColorClass} mb-12`}>
				Explore Our Categories !
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