function Contact() {
    return (
        <div id="Contact" className="flex justify-center items-center my-10">
            <form
                className="w-full max-w-md bg-gradient-to-br from-violet-300 to-violet-900 p-8 rounded-2xl shadow-lg shadow-violet-500 border-2 border-violet-700 flex flex-col gap-4"
                autoComplete="off"
            >
                <h2 className="text-2xl font-bold text-violet-300 mb-2 text-center">Contact Me</h2>
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-gray-200 mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="rounded-lg p-2 bg-black/60 text-white border border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-200 mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="rounded-lg p-2 bg-black/60 text-white border border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
                        placeholder="you@email.com"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="text-gray-200 mb-1">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="rounded-lg p-2 bg-black/60 text-white border border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition resize-none"
                        placeholder="Type your message..."
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-violet-400 hover:bg-violet-600 text-white font-semibold py-2 rounded-lg shadow-md transition duration-200"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Contact;