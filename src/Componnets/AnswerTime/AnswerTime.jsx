import "./Answer.scss"; 
import { useEffect, useState, useRef} from "react";

function AnswerTime({duration, onTimeup}) {

    const [counter, setCounter]= useState(0); 
    const [progressloaded, setProgressloaded]= useState(0); 
    const intervalRef = useRef(); 

    useEffect (()=> {

       intervalRef.current = setInterval(()=>{

           setCounter((cur)=> cur + 1); 

        }, 1000); 
         
        // Limpando o intervalo
        return () => clearInterval(intervalRef.current ); 

    }, []); 

    // Actualizando o prgresso 

    useEffect(()=>{

        setProgressloaded(100 *(counter)/ duration)

        // Chegamos ao fim ?
        if(counter === duration) {

            // limpamos o intervalo 

            clearInterval(intervalRef.current)

            setTimeout(()=>{

                onTimeup()

            }, 1000); 
        }

    },[counter])

    return (   
        
        <div className="answer-loader-container">

           

           <div style={{
            width: `${progressloaded}%`,
            backgroundColor: `${
                progressloaded < 40
                ? "lightgreen"
                : progressloaded < 70
                ? "orange"
                :  "red"
            }`
           }} className="progress">

           </div>

       </div>
    
    ); 

}; 

export default AnswerTime; 