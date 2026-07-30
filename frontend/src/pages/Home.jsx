import Search from "../components/Search";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Home() {
    const [popularRecipes, setPopularRecipes] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/recipe/popular`)
            .then((res) => res.json())
            .then((data) => setPopularRecipes(data))
            .catch((err) => console.error(err));
    }, []);
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-black text-white">
                <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                    <span className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-5">
                        🍽️ Fresh & Delicious Recipes
                    </span>

                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        Discover
                        <span className="text-red-500"> Amazing Recipes </span>
                        Every Day
                    </h1>

                    <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
                        Search your favourite recipes and explore delicious dishes with
                        beautiful images, simple ingredients, and easy cooking steps.
                    </p>

                    <div className="mt-10 max-w-2xl mx-auto">
                        <Search />
                    </div>
                </div>
            </section>

            {/* Popular Recipes */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-4xl font-bold text-black">
                            Popular <span className="text-red-600">Recipes</span>
                        </h2>
                        <div className="w-24 h-1 bg-red-600 rounded mt-2"></div>
                    </div>

                    <Link
                        to="/recipes"
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition"
                    >
                        View All
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {popularRecipes.map((recipe) => (
                        <div
                            key={recipe.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-red-300 hover:-translate-y-2 transition-all duration-300"
                        >
                            <img
                                src={recipe.imageUrl}
                                alt={recipe.title}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-4">
                                <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                                    {recipe.ingredients}
                                </span>

                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {recipe.title}
                                </h3>

                                <p className="text-gray-600 text-sm line-clamp-3">
                                    {recipe.instructions}
                                </p>

                                <Link
                                    to={`/recipe/${recipe.id}`}
                                    className="inline-block mt-4 bg-black hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                                >
                                    View Recipe →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;