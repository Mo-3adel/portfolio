function Pcard({name, description, image, link}) {
    return (  
        <div className="flex flex-shrink-0 items-center p-2 m-3 rounded-2xl bg-gradient-to-r from-teal-800 to-violet-900 shadow-sm shadow-violet-500 transition-transform duration-300  hover:scale-[1.02] w-80 h-48 border-2 border-violet-700">
            <div className="flex">
                <img src={image} alt={name} className="w-20 h-20 rounded-full object-cover" />

            </div>
            <div className="ml-4">
                <h3 className="text-lg font-semibold text-violet-300">{name}</h3>
                <p className="text-gray-400">{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">
                    View Project
                </a>    
            </div>

        </div>

    );
}

export default Pcard;