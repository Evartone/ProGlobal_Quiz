import React, { useState, useEffect } from 'react'
import "./Results.scss"

const Results = ({totalquestions, resultado, OntryAgain}) => {

    const [name, setName] = useState("")
    const [highScore, setHighScore] = useState([])
    const [mostrarScore, setMostrarScore] = useState(false)

    useEffect(()=>{

        setHighScore(JSON.parse(localStorage.getItem("highScore")) || [])

    }, [])

    const handlesave =()=>{

        const score ={
            name, 
            score: resultado.score 
        }

        const newhighScore =[ ...highScore, score ].sort((a, b) => b.score -a.score)
        setHighScore(newhighScore); 
        setMostrarScore(true)
        localStorage.setItem("highScore", JSON.stringify(newhighScore))
    }

    const handletryAgain =()=>{

        // fazendo rest
        setMostrarScore(false); 
        setHighScore([])
        OntryAgain();  

    }

  return ( <div className='result'>
        
         <h3>Resultado</h3>

         <p>Total de perguntas: <span>{totalquestions}</span></p>
         <p>Pontuação tota:  <span>{resultado.score}</span></p>
         <p>Respostas corretas: <span>{resultado.correctAnswer}</span></p>
         <p>Respostas incorretas: <span>{resultado.wrongAnswer}</span></p>

         <button onClick={handletryAgain}>Jogar outra vez</button>

        { !mostrarScore ? <>

          
           <h3>Digite seu nome <br /> para registrar a pontuação!</h3>

           <input placeholder='Seu name' value={name}  onChange={(e)=> setName(e.target.value)} />
           <button onClick={handlesave}>salvar</button>
         
         </> :  <>


          <table>

            <thead>


                <tr>

                    <th>Classificação </th>

                    <th>  Nome </th>

                    <th>Pontuação</th>

                </tr>

            </thead>

                <tbody>

                   { highScore.map((highScores, index ) => {

                    return (

                       <tr key={`${highScore.score} ${highScore.name} ${index}`}>
                          <td>{index +1}</td>
                          <td>{highScores.name}</td>
                           <td>{highScores.score}</td>

                       </tr>
                        
                    )
                   })

                    }
                   
                </tbody>

          </table>
         
         </>

          
         
        }

       <footer className="quiz-footer"> Created & designed by EvarTone</footer>
      
      </div>

      ); 

}

export default Results; 