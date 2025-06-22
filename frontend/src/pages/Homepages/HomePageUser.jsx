import { useEffect } from "react";
import CategoryItem from "../../components/CategoryItem";
// import { useProductStore } from "../../stores/useProductStore";
import FeaturedProducts from "../../components/FeaturedProducts";
import { useProductStore } from "../../stores/useProductStore";


const categories = [
	{ href: "/agri-Products", name: "Agri Products", imageUrl: "/agriproduce.jpg" },
	{ href: "/dairy-Products", name: "Dairy Products", imageUrl: "/dairyproducts.jpg" },
	{ href: "/honey", name: "Honey", imageUrl: "/honey.jpg" },
	{ href: "/poultry-Products", name: "Poultry Products", imageUrl: "/poultry.jpg" },
]
const HomePageUser = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					Explore Our Categories
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					Discover the freshness of Pantnagar Produce....
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePageUser;
