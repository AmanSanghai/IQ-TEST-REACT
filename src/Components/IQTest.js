import { useState } from "react";
import Questions from "./Questions";
function IQTest() {
  const [currentIndex, setIndex] = useState(0);
  const [scorearray, setScorearray] = useState([]);
  
  const data = [
    {
      question: "1. What would correctly fit in the right most box?",
      qimg: <img src={require('./Q1img.png')} alt="q1.logo" />,
      correct_ans: <img src={require('./q1cans.png')} alt="q1.logo" />,
      incorrect_ans1: <img src={require('./q1ians1.png')} alt="op1.logo" />,
      incorrect_ans2: <img src={require('./q1ians2.png')} alt="op2.logo" />,
      incorrect_ans3: <img src={require('./q1ians3.png')} alt="op3.logo" />,
      incorrect_ans4: <img src={require('./q1ians4.png')} alt="op4.logo" />,
      incorrect_ans5: <img src={require('./q1ians5.png')} alt="op5.logo" />,
    },
    {
      question: "2. What would correctly fit in the right most box?",
      qimg: <img src={require('./Q2img.png')} alt="q2.logo" />,
      correct_ans: <img src={require('./q2cans.png')} alt="q1.logo" />,
      incorrect_ans1: <img src={require('./q2ians1.png')} alt="op1.logo" />,
      incorrect_ans2: <img src={require('./q2ians2.png')} alt="op2.logo" />,
      incorrect_ans3: <img src={require('./q2ians3.png')} alt="op3.logo" />,
      incorrect_ans4: <img src={require('./q2ians4.png')} alt="op4.logo" />,
      incorrect_ans5: <img src={require('./q2ians5.png')} alt="op5.logo" />,
    },
    {
      question: "3. What would correctly fit in the right most box?",
      qimg: <img src={require('./Q3img.png')} alt="q3.logo" />,
      correct_ans: <img src={require('./q3cans.png')} alt="q1.logo" />,
      incorrect_ans1: <img src={require('./q3ians1.png')} alt="op1.logo" />,
      incorrect_ans2: <img src={require('./q3ians2.png')} alt="op2.logo" />,
      incorrect_ans3: <img src={require('./q3ians3.png')} alt="op3.logo" />,
      incorrect_ans4: <img src={require('./q3ians4.png')} alt="op4.logo" />,
      incorrect_ans5: <img src={require('./q3ians5.png')} alt="op5.logo" />,
    },
    {
      question: "4. What would correctly fit in the right most box?",
      qimg: <img src={require('./Q4img.png')} alt="q4.logo" />,
      correct_ans: <img src={require('./q4cans.png')} alt="q1.logo" />,
      incorrect_ans1: <img src={require('./q4ians1.png')} alt="op1.logo" />,
      incorrect_ans2: <img src={require('./q4ians2.png')} alt="op2.logo" />,
      incorrect_ans3: <img src={require('./q4ians3.png')} alt="op3.logo" />,
      incorrect_ans4: <img src={require('./q4ians4.png')} alt="op4.logo" />,
      incorrect_ans5: <img src={require('./q4ians5.png')} alt="op5.logo" />,
    },
    {
      question: "5. What would correctly fit in the right most box?",
      qimg: <img src={require('./Q5img.png')} alt="q5.logo" />,
      correct_ans: <img src={require('./q5cans.png')} alt="q1.logo" />,
      incorrect_ans1: <img src={require('./q5ians1.png')} alt="op1.logo" />,
      incorrect_ans2: <img src={require('./q5ians2.png')} alt="op2.logo" />,
      incorrect_ans3: <img src={require('./q5ians3.png')} alt="op3.logo" />,
      incorrect_ans4: <img src={require('./q5ians4.png')} alt="op4.logo" />,
      incorrect_ans5: <img src={require('./q5ians5.png')} alt="op5.logo" />,
    },
  ];
  const handleAnswer = (answer) => {
    let currentScore=0
    if (answer === data[currentIndex].correct_ans) {
       currentScore=5
      }
      setScorearray((prevState)=>{
        return [...prevState,currentScore]
    })

    setIndex(currentIndex + 1);
  };
  const handlePrevious = () => {
    setScorearray((prevState)=>{
      const newState=prevState;
      newState.pop();
      return newState
  })
    setIndex(currentIndex - 1);
  };

  return currentIndex >= data.length ? (
    <div><h1>Your IQ is {scorearray.reduce((x,y)=>x+y)}</h1></div>
  ) : (
    <div>
      <Questions onhandleAnswer={handleAnswer} data={data[currentIndex]} />
      {currentIndex > 0 && <button style={{backgroundColor: "gray", fontSize: "2rem", padding: "10px"}}onClick={handlePrevious}>Previous</button>}
    </div>
  );
}

export default IQTest;
