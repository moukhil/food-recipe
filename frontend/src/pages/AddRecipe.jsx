import { useState } from "react";

function AddRecipe() {
    const [msg, setMsg] = useState("");
    const [recipe, setRecipe] = useState({
        id: "",
        title: "",
        ingredients: "",
        instructions: "",
        imageUrl: "",
    });

    function handleChange(e) {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value,
        });
    }

    function saveRecipe() {
        fetch(`${import.meta.env.VITE_API_URL}/recipe`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recipe),
        })
            .then((res) => res.json())
            .then(() => {
                setMsg("Recipe Saved Successfully!");

                setRecipe({
                    title: "",
                    ingredients: "",
                    instructions: "",
                    imageUrl: "",
                });
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-6">
            <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
                {msg && (
                    <div className="mt-4 p-3 rounded-lg bg-green-100 text-green-700 border border-green-300">
                        {msg}
                    </div>
                )}
                {/* Header */}
                <div className="bg-black text-white text-center py-6">
                    <h1 className="text-4xl font-bold">
                        Add <span className="text-red-500">New Recipe</span>
                    </h1>
                    <p className="text-gray-300 mt-2">
                        Fill in the details to add a delicious recipe.
                    </p>
                </div>

                {/* Form */}
                <div className="p-8 space-y-6">

                    <div>
                        <label className="font-semibold text-gray-700">
                            title
                        </label>
                        <input
                            type="text"
                            name="strMeal"
                            value={recipe.title}
                            onChange={handleChange}
                            className="w-full mt-2 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter Meal Name"
                        />
                    </div>

                    <div>
                        <label className="font-semibold text-gray-700">
                            ingredients
                        </label>
                        <input
                            type="text"
                            name="strCategory"
                            value={recipe.ingredients}
                            onChange={handleChange}
                            className="w-full mt-2 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter Category"
                        />
                    </div>

                    <div>
                        <label className="font-semibold text-gray-700">
                            instructions
                        </label>
                        <textarea
                            rows="5"
                            name="recipe.instructions"
                            value={recipe.instructions}
                            onChange={handleChange}
                            className="w-full mt-2 border border-gray-300 rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter Recipe Description"
                        />
                    </div>

                    <div>
                        <label className="font-semibold text-gray-700">
                            Image URL
                        </label>
                        <input
                            type="text"
                            name="strImg"
                            value={recipe.imageUrl}
                            onChange={handleChange}
                            className="w-full mt-2 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter Image URL"
                        />
                    </div>

                    {/* Preview */}
                    {recipe.imageUrl && (
                        <div>
                            <p className="font-semibold mb-3">Image Preview</p>
                            <img
                                src={recipe.imageUrl}
                                alt="Preview"
                                className="w-full h-64 object-cover rounded-xl border"
                            />
                        </div>
                    )}

                    <button
                        onClick={saveRecipe}
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold text-lg transition duration-300"
                    >
                        Save Recipe
                    </button>

                </div>
            </div>
        </div>
    );
}

export default AddRecipe;