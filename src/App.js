import "./App.css";
import { useState } from "react";
import IQTest from "./Components/IQTest";

function App() 
{
  const [quizStarted, setquizStarted]=useState(false)
  const startQuiz=()=>setquizStarted(true)
  return(quizStarted? <div><IQTest></IQTest></div>:
    (<div><h1>IQ Test for kids from 7 to 16 Years Old</h1>
    <h3>Start below to take the quiz</h3>
    <button style={{backgroundColor: "#555555", fontSize: "2rem"}}onClick={startQuiz}>Start</button>
    </div>)
    
  )
}
export default App;
