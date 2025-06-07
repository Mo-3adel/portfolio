function Work() {
    return (
        <div id="Experiance" className="w-full max-w-xl mx-auto mt-8 px-4 py-6 rounded-2xl shadow-md bg-black shadow-violet-500 font-sans transition-colors border-violet-700 border-2 duration-300 ">
            <h2 className="mb-3 text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
                Work Experience
            </h2>
            <div className="mb-4">
                <span className="inline-block bg-violet-400 text-white rounded-lg px-3 py-1 text-xs md:text-sm">
                    Oct 2022 &ndash; Present
                </span>
            </div>
            <h3 className="mt-2 mb-1 text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-200">
                Software &amp; AI Instructor
            </h3>
            <div className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                MindValley
            </div>
            <ul className="list-disc pl-5 text-gray-800 dark:text-gray-300 space-y-1 text-sm md:text-base">
                <li>Teaching Python and web development from beginner to advanced levels</li>
                <li>Guiding students in machine learning concepts and projects</li>
                <li>Instructing on Arduino and App Inventor for hands-on tech learning</li>
                <li>Empowering teens to build real-world applications and AI solutions</li>
            </ul>
        </div>
    );
}

export default Work;