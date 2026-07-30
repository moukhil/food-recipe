import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card({ finalName }) {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        fetch(`http://localhost:8080/recipe/${finalName}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 0) {
                    setRecipe(data[0]);
                } else {
                    setRecipe(null);
                }

                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [finalName]);

    if (loading) {
        return (
            <div className="text-center py-10">
                <h2 className="text-2xl font-semibold text-red-600">
                    Loading Recipe...
                </h2>
            </div>
        );
    }

    if (!recipe) {
        return (
            <div className="text-center py-10">
                <h2 className="text-3xl font-bold text-red-600">
                    🍽 Recipe Not Found
                </h2>
                <p className="text-gray-600 mt-2">
                    Try searching for another recipe.
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-red-300 transition-all duration-300 mt-10">

            <div className="grid md:grid-cols-2">

                {/* Image */}
                <div className="bg-black flex items-center justify-center p-6">
                    <img
                        src={recipe.imageUrl}
                        alt={recipe.title}
                        className="w-full max-w-md rounded-2xl object-cover hover:scale-105 transition duration-300"
                    />
                </div>

                {/* Details */}
                <div className="p-8 flex flex-col justify-center">

                    <span className="bg-red-600 text-white w-fit px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        {recipe.ingredients}
                    </span>

                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                        {recipe.title}
                    </h1>

                    <Link to={`/recipe/${recipe.id}`}>
                        <button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 w-fit">
                            View Full Recipe →
                        </button>
                    </Link>

                </div>

            </div>
        </div>
    );
}

export default Card;