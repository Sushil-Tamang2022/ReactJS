import React, { useState } from 'react'
import Question from './components/Question';
import Options from './components/Options';

const questions = [
    {
      id: 1,
      question: "What is React?",
      options: [
        { id: "1a", text: "A JavaScript library" },
        { id: "1b", text: "A CSS framework" },
        { id: "1c", text: "A database" },
        { id: "1d", text: "A programming language" },
      ],
      answer: "A JavaScript library",
    },
    {
      id: 2,
      question: "Who developed React?",
      options: [
        { id: "2a", text: "Google" },
        { id: "2b", text: "Facebook" },
        { id: "2c", text: "Microsoft" },
        { id: "2d", text: "Amazon" },
      ],
      answer: "Facebook",
    },
    {
      id: 3,
      question: "What hook is used for state in React?",
      options: [
        { id: "3a", text: "useEffect" },
        { id: "3b", text: "useState" },
        { id: "3c", text: "useContext" },
        { id: "3d", text: "useRef" },
      ],
      answer: "useState",
    },
  ];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAnswerCheck = (option) => {
    const newIndex = currentIndex + 1;
    if (newIndex < questions.length) {
      setCurrentIndex(newIndex);
    }
  }

  return (
    <div>
      <h1>Quize App</h1>
      <Question question={questions[currentIndex].question}/>
      <Options onAnswerCheck={handleAnswerCheck} options={questions[currentIndex].options}/>
    </div>
  )
}

export default App