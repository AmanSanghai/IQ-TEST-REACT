import './Questions.css'
function Questions({
  onhandleAnswer,
  data: {
    qimg,
    question,
    correct_ans,
    incorrect_ans1,
    incorrect_ans2,
    incorrect_ans3,
    incorrect_ans4,
    incorrect_ans5,
  },
}) {
  const shuffledOptions = [
    correct_ans,
    incorrect_ans1,
    incorrect_ans2,
    incorrect_ans3,
    incorrect_ans4,
    incorrect_ans5,
  ].sort(() => Math.random() - 0.5);
  return (
    <div>
      <div>{qimg}</div>
      <h2>{question}</h2>
      <div>
        {shuffledOptions.map((answer) => {
          return <button className="button" onClick={() => onhandleAnswer(answer)}>{answer}</button>
  })}
      </div>
    </div>
  );
}
export default Questions;
