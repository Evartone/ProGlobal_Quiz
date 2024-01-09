import { useState } from 'react'; 
import './App.css'
import Quiz from './Componnets/Quiz/Quiz'
import { jsQuizz } from "./Constants"; 

function App() {

  return (
    
        <Quiz questions = {jsQuizz.questions}/>
  )
}

export default App; 
