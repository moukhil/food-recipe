function Contact() {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-black">
                        Contact <span className="text-red-600">Us</span>
                    </h1>

                    <p className="text-gray-600 mt-4 text-lg">
                        We'd love to hear from you! Send us your questions, feedback, or recipe suggestions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    {/* Contact Information */}
                    <div className="bg-black text-white rounded-3xl p-8 shadow-xl">

                        <h2 className="text-3xl font-bold mb-8">
                            Get In Touch
                        </h2>

                        <div className="space-y-6">

                            <div className="flex items-center gap-4">
                                <div className="bg-red-600 p-3 rounded-full text-xl">
                                    📧
                                </div>

                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-gray-300">
                                        support@foodrecipe.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-red-600 p-3 rounded-full text-xl">
                                    📞
                                </div>

                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <p className="text-gray-300">
                                        +91 98765 43210
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-red-600 p-3 rounded-full text-xl">
                                    📍
                                </div>

                                <div>
                                    <h3 className="font-semibold">Location</h3>
                                    <p className="text-gray-300">
                                        Hyderabad, Telangana, India
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl shadow-xl p-8">

                        <h2 className="text-3xl font-bold text-black mb-6">
                            Send a Message
                        </h2>

                        <form className="space-y-5">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />

                            <textarea
                                rows="6"
                                placeholder="Write your message..."
                                className="w-full border border-gray-300 rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold text-lg transition duration-300"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Contact;