import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetails() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [msg, setMsg] = useState("");

    useEffect(() => {
        fetch(`http://localhost:8080/recipe/id/${id}`)
            .then((res) => res.json())
            .then((data) => setRecipe(data))
            .catch((err) => console.log(err));
    }, [id]);

    if (!recipe) {
        return <h1>Loading...</h1>;
    }
    const handleSaveRecipe = () => {
        const content = `
        Title: 
        ${recipe.title}
        Ingredients:
        ${recipe.ingredients}
        Instructions:
        ${recipe.instructions}`;

        const blob = new Blob([content], { type: "text/plain" });
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `${recipe.title}.txt`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        window.URL.revokeObjectURL(url);
    };

    const handleShare = async () => {
        const shareData = {
            title: recipe.title,
            text: `Check out this recipe: ${recipe.title}`,
            url: window.location.href
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log(err);
            }
        } else {
            await navigator.clipboard.writeText(window.location.href);
            setMsg("Recipe link copied to clipboard!");
        }
    };
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-6">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                {msg && (
                    <div className="mt-4 p-3 rounded-lg bg-green-100 text-green-700 border border-green-300">
                        {msg}
                    </div>
                )}
                <div className="grid md:grid-cols-2">

                    {/* Left - Recipe Image */}
                    <div className="bg-black flex items-center justify-center p-8">
                        <img
                            src={recipe.imageUrl}
                            alt={recipe.title}
                            className="w-full max-w-lg rounded-2xl shadow-xl hover:scale-105 transition duration-300"
                        />
                    </div>

                    {/* Right - Recipe Information */}
                    <div className="p-10 flex flex-col justify-center">

                        <span className="bg-red-600 text-white px-4 py-2 rounded-full w-fit font-semibold mb-4">
                            {recipe.ingredients}
                        </span>

                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            {recipe.title}
                        </h1>

                        <p className="text-gray-600 text-lg leading-8 text-justify">
                            {recipe.instructions}
                        </p>

                        {/* Extra Information */}
                        <div className="grid grid-cols-2 gap-4 mt-10">

                            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                                <h3 className="text-red-600 font-bold text-lg">
                                    ingredients
                                </h3>
                                <p className="text-gray-700 mt-2">
                                    {recipe.ingredients}
                                </p>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                                <h3 className="text-red-600 font-bold text-lg">
                                    Recipe ID
                                </h3>
                                <p className="text-gray-700 mt-2">
                                    #{recipe.id}
                                </p>
                            </div>

                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 mt-10">

                            <button
                                onClick={handleSaveRecipe}
                                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition"
                            >
                                Save Recipe
                            </button>

                            <button
                                onClick={handleShare}
                                className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold transition"
                            >
                                Share
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RecipeDetails;