import { Link } from "react-router-dom";
import foodlogo from "../assets/foodlogo.png";

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-black shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src={foodlogo}
                        alt="Food Recipe Logo"
                        className="w-10 h-10 rounded-full border-2 border-red-500"
                    />

                    <h1 className="text-2xl font-extrabold text-white">
                        Food<span className="text-red-500">Recipe</span>
                    </h1>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8 text-white font-medium">
                    <Link
                        to="/"
                        className="hover:text-red-500 transition duration-300"
                    >
                        Home
                    </Link>

                    <Link
                        to="/recipes"
                        className="hover:text-red-500 transition duration-300"
                    >
                        Recipes
                    </Link>

                    <Link
                        to="/AddRecipe"
                        className="hover:text-red-500 transition duration-300"
                    >
                        AddRecipe
                    </Link>

                    <Link
                        to="/contact"
                        className="hover:text-red-500 transition duration-300"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;