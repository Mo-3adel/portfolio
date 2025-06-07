
import github from '../assets/0D87BF3B-A96E-474E-B042-EB2648EAD181_4_5005_c.jpeg'
import linkedin from '../assets/2BDB40DA-EEDA-4017-84D1-C2ADC6994659.jpeg'

export const Nav1 = () => {     
    return (  
        
        <div className="flex flex-col sm:flex-row justify-center w-3/4 mx-auto sm:max-w-fit space-x-2.5 bg-gradient-to-r  from-cyan-600 to-violet-400 text-white p-3 font-bold rounded-2xl">
            <ul className="flex content-center justify-center space-x-4">
                <li><a href="#About" className="font-sans">About</a></li>
                <li><a href="#Experiance">Experiance</a></li>
                <li><a href="#Projects">Projects</a></li>                  
                <p1 className="sm:border-r-2 sm:border-blacks"></p1> 
            
                
            </ul>
            <ul className="flex content-center justify-center space-x-4 ">
                <li><a href="#Contact" className="font-sans">Contact</a></li>
                <li><a href="/Mohamed_Adel_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
                <a href="https://www.linkedin.com/in/mohamed-adel-47aa01177/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} width={27} className="rounded-full" alt='LinkedIn'></img>
                </a>
                <a href="https://github.com/Mo-3adel" target="_blank" rel="noopener noreferrer">
                <img src={github} width={27} className="rounded-full" alt='GitHub'></img>
                </a>
            </ul>

        </div>
        
          

    );
}