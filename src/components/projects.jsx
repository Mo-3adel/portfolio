import Pcard from "./proj_card";
import portfolioImage from '../assets/332A9C9D-8694-445C-89AA-AAEC71D0BBED.jpeg';   
import expensesImage from '../assets/8C0BA689-A702-4EE1-BE58-0594EFF3472A_4_5005_c.jpeg';
import saasImage from '../assets/0D5C1890-EC9E-416B-99FC-BD4DE9ECA012_4_5005_c.jpeg';
import faceMaskImage from '../assets/C616391C-9BC3-465E-B2E9-6FA1BE535C3B_4_5005_c.jpeg';
import steelDefectImage from '../assets/9B856CD5-30C6-48B1-9AD8-8B5C91ADCF77_4_5005_c.jpeg';

function Projects() {
    return ( 
        <div id="Projects" className="flex flex-col sm:flex-row items-center sm:items-stretch space-y-2 sm:space-x-2 p-1 my-5 mx-2 sm:mx-0 rounded-2xl bg-black shadow-2xl shadow-violet-500 w-auto h-64 sm:h-fit overflow-y-scroll overflow-x-hidden sm:overflow-x-auto border-2 border-violet-700">

            
            <Pcard
                name="Portfolio Website"
                description="A personal portfolio website showcasing my projects and skills."
                image={portfolioImage}
                link="https://portfolio-chi-vert-41.vercel.app"></Pcard>

            <Pcard
                name="Expenses Tracker"
                description="A web application to track personal expenses and manage budgets."
                image={expensesImage}
                link="https://github.com/Mo-3adel/ExpensesAPP"></Pcard>

            <Pcard
                name="SaaS Image to PDF Converter AI Powered"    
                description="A Saas website to convert images into PDF documents powered by AI (Backend)."
                image={saasImage}
                link="https://github.com/Mo-3adel/SaaS_backend"></Pcard>

            <Pcard
                name="Face Mask Detection"
                description="Building a face mask detection system using machine learning algorithems."
                image={faceMaskImage}
                link="https://github.com/Mo-3adel/FaceMaskDetection"></Pcard>

            <Pcard
                name="Steel Defect Detection"
                description="A machine learning project to detect defects in steel products."
                image={steelDefectImage}    
                link="https://github.com/Mo-3adel/Steel_Defact_Detction"></Pcard>


        </div>
     );
}

export default Projects;