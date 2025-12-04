import React, { useState } from 'react'
// const answer = {1: "Paris", 2: "CSS", 3: "Java"}
// acc - initial value - must be given by us
const quizeData = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "Which language run in a browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    id: 3,
    question: "What does css stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets", 
      "Cascading Simple Sheets", 
      "Computer Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
];

const App = () => {
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)

  const handleSubmitAnswers = (questionId, option) => {
    setAnswers({...answers, [questionId]: option})
  }

  const handleResult = () => {
    const finalScore = quizeData.reduce((acc, item) =>  {

      return acc + (item.answer === answers[item.id] ? 1 : 0);
    }, 0);
    setResult(finalScore)
  }

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>Quize App</h1>
      {quizeData.map((question, index) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginBottom: "10px" }} key={question.id}>
          <h3 style={{ marginBottom: "3px" }}>{index + 1}. {question.question}</h3>
          {question.options.map((option) => (
            <label key={option}>
              <input
                value={option}
                type='radio'
                name={`question-${question.id}`}
                onChange={() => handleSubmitAnswers(question.id, option)} 
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleResult}>Submit</button>
      {(result !== null && <h2>Your Scores: {result}</h2>)}
    </div> 
  )
}

export default App