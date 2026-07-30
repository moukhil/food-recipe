import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/recipe`)
            .then((res) => res.json())
            .then((data) => {
                setRecipes(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <h1 className="text-center text-3xl text-red-600 mt-10">
                Loading Recipes...
            </h1>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-6">

                <h1 className="text-5xl font-bold text-center mb-12">
                    <span className="text-black">All</span>{" "}
                    <span className="text-red-600">Recipes</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {recipes.map((recipe) => (
                        <div
                            key={recipe.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-red-300 transition-all duration-300"
                        >
                            <img
                                src={recipe.imageUrl}
                                alt={recipe.title}
                                className="w-full h-52 object-cover"
                            />

                            <div className="p-5">

                                <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                                    {recipe.ingredients}
                                </span>

                                <h2 className="text-2xl font-bold mb-3">
                                    {recipe.title}
                                </h2>

                                <p className="text-gray-600 line-clamp-3">
                                    {recipe.instructions}
                                </p>

                                <Link
                                    to={`/recipe/${recipe.id}`}
                                    className="inline-block mt-5 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
                                >
                                    View Recipe →
                                </Link>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
}

export default Recipes;