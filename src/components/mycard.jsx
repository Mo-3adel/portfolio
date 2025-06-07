import About from "./about";
import mypic from "../assets/IMG_6933.jpeg"; // Adjust the path as necessary

function Mycard() {
    return (  
        <div className="flex flex-col items-center justify-center h-2/3 ">
        <div className="w-fit h-fit grid grid-cols-3 grid-rows-2 rounded-t-3xl mt-5  gap-2 bg-transparent backdrop-blur-sm ">
            <div className="flex flex-col row-start-1 col-start-1 col-span-2 row-span-2 items-center font-sans p-3 m-3 text-shadow-violet-300 text-shadow-sm ">
                <p>
                    <span className="text-4xl text-violet-400 font-bold">Hello,</span>
                    <span className="text-xl text-gray-300 "> I'm Mohamed Adel </span> 
                    <br /> 
                    <span className="text-lg text-gray-300 font-serif">a Software and AI Developer.</span>
                    <hr />
                    <span className="text-sm text-gray-400 text-shadow-none">specialized Full-Stack Engineer with a blend of AI and ML experiance and genuine Interest.</span>
                    <br />
                    <span className="text-sm text-gray-400 text-shadow-none">This is my personal website, where I share my projects and ideas.</span>
                    <div className="gap-x-3 m-1 p-1">
                        <About />
                    </div>
                </p>

            </div>
            
            <div className="col-span-1 row-span-2 m-3">
                <img className="w-60 h-60 rounded-full border-4 border-violet-400 shadow-lg shadow-violet-500" src={mypic} alt="Profile" /> 
            </div>
            
            
            

        </div>
        <div id="About" className="flex flex-col items-center justify-center mt-5 w-3/4 h-fit border-2 border-violet-400 rounded-2xl bg-black shadow-lg shadow-violet-300 p-5 ">
            <p className="text-2xl -translate-x-1/3 text-gray-400">About Me.</p>  
            <p className=" text-md text-white text-justify p-2 font-sans"> 
                I have a passion for software development and artificial intelligence.
                <br />
                Graduated from the faculty of Engineer Meachatronics department, I have a strong foundation in programming and problem-solving.
                <br />
                Although my field of study is not directly related to software development, I have always been looking to be a software developer and getting into mechatronics give me more than a head start to self devolep and improve my skills.
                <br />
                I have worked on various projects that involve AI and software development, and I am always eager to learn new technologies and improve my skills.
                <br />
                I believe that technology can be used to solve real-world problems and make a positive impact on society.
                <br />
                I am excited to share my journey and projects with you through this website.
            </p>

        </div>  

    <div className="flex flex-col lg:flex-row items-center">

        <div className="flex flex-row items-center justify-center mt-5 max-w-full w-auto h-fit border-2 border-violet-500 rounded-2xl bg-black backdrop-blur-md shadow-lg shadow-violet-300 p-4 hover:scale-[1.02] transition-all duration-300">    

            <h1 className="text-gray-400">Tech Stack.</h1>
            <vr className="w-0.5 bg-white" />


            <div className="flex flex-col w-fit h-fit bg-gradient-to-r from-green-900/60 to-violet-900/60 rounded-xl p-4 border border-violet-600 shadow-md m-1">
                <p className="text-2xl text text-gray-200">Backend</p>
                <br />
                <p className="text-md text-gray-100">- Python <br/>- C#<br/>- .Net Core<br/>- Django<br/>- FastApi<br/>- Flask</p>
            </div>
            <div className="flex flex-col w-fit h-fit bg-gradient-to-r from-green-900/60 to-violet-900/60 rounded-xl p-4 border border-violet-600 shadow-md m-1">
                <p className="text-2xl text text-gray-200">Frontend</p>
                <br />
                <p className="text-md text-gray-100">- ReactJS<br/>- TailwindCSS<br/>- Bootstrap<br/>- HTML5<br/>- CSS</p>
            </div>
            <div className="flex flex-col w-fit h-fit bg-gradient-to-r from-green-900/60 to-violet-900/60 rounded-xl p-4 border border-violet-600 shadow-md m-1">
                <p className="text-2xl text text-gray-200">AI/ML</p>
                <br />
                <p className="text-md text-gray-100">- Python<br/>- TensorFlow<br/>- PyTorch<br/>- OpenCV<br/>- Scikit-learn</p>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 w-full max-w-2xl px-4">
                <div className="w-full bg-black border-2 border-violet-700 rounded-2xl shadow-lg shadow-violet-400 p-6 md:p-8 transition-all duration-300 hover:scale-[1.02]">
                    <h2 className="text-2xl md:text-3xl font-bold text-violet-300 mb-4 text-center">Education</h2>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-gradient-to-r from-violet-900/60 to-blue-900/60 rounded-xl p-4 border border-violet-600 shadow-md mb-2">
                            <div>
                                <p className="text-lg md:text-xl font-semibold text-white">B.Sc. in Mechatronics Engineering</p>
                                <p className="text-md text-gray-300">University of Greenwich (UK)</p>
                            </div>
                            <span className="text-sm text-violet-400 mt-2 md:mt-0">2018 - 2024</span>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-gradient-to-r from-violet-900/60 to-blue-900/60 rounded-xl p-4 border border-violet-600 shadow-md mb-2">
                            <div>
                                <p className="text-lg md:text-xl font-semibold text-white">B.Sc. in Mechatronics Engineering</p>
                                <p className="text-md text-gray-300">October University for Modern Sciences and Arts (MSA)</p>
                            </div>
                            <span className="text-sm text-violet-400 mt-2 md:mt-0">2018 - 2024</span>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
      
        </div>
    );
}

export default Mycard;