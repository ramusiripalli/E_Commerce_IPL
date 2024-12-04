import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";

const CategoryItem = ({ category }) => {
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
		<div className='relative overflow-hidden h-96 w-full rounded-lg group'>
			<Link to={"/category" + category.href}>
				<div className='w-full h-full cursor-pointer'>
					<div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50 z-10' />
					<img
						src={category.imageUrl}
						alt={category.name}
						className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110'
						loading='lazy'
					/>
					<div className='absolute bottom-0 left-0 right-0 p-4 z-20'>
						<h3 className={`${teamColorClass} text-2xl font-bold mb-2`}>{category.name}</h3>
						<p className={`${teamColorClass} text-sm`}>Explore {category.name}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CategoryItem;