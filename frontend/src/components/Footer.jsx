import { Link } from "react-router-dom";
import foodlogo from "../assets/foodlogo.png";

function Footer() {
    return (
        <footer className="bg-black text-white mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Logo & Description */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src={foodlogo}
                                alt="Food Recipe Logo"
                                className="w-10 h-10 rounded-full border-2 border-red-600"
                            />

                            <h2 className="text-2xl font-bold">
                                Food<span className="text-red-500">Recipe</span>
                            </h2>
                        </div>

                        <p className="text-gray-400 leading-7">
                            Discover delicious recipes from around the world.
                            Search your favourite meals and cook with confidence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-red-500 mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="hover:text-red-500 transition">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/recipes" className="hover:text-red-500 transition">
                                    Recipes
                                </Link>
                            </li>

                            <li>
                                <Link to="/about" className="hover:text-red-500 transition">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact" className="hover:text-red-500 transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-semibold text-red-500 mb-4">
                            Contact
                        </h3>

                        <div className="space-y-3 text-gray-400">
                            <p>📧 support@foodrecipe.com</p>
                            <p>📍 Hyderabad, India</p>
                            <p>📞 +91 98765 43210</p>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} FoodRecipe. All Rights Reserved.
                    </p>

                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-red-500 transition">
                            Privacy Policy
                        </a>

                        <a href="#" className="hover:text-red-500 transition">
                            Terms of Service
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;