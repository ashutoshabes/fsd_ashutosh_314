import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetch('/questions.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load questions');
        }
        return response.json();
      })
      .then((data) => setQuestions(data))
      .catch((error) => console.error(error));
  }, []);

  const handleOptionClick = (option) => {
    if (selectedOption !== '') return;

    setSelectedOption(option);

    if (option === questions[currentIndex].correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setSelectedOption('');
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption('');
    setScore(0);
    setShowResult(false);
  };

  if (questions.length === 0) {
    return <h2>Loading questions...</h2>;
  }

  if (showResult) {
    return (
      <div className="quiz-container">
        <h1>Quiz Completed!</h1>
        <h2>
          Your Score: {score} / {questions.length}
        </h2>
        <button onClick={handleRestart}>Restart Quiz</button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="quiz-container">
      <h1>React Quiz App</h1>

      <p>
        Question {currentIndex + 1} of {questions.length}
      </p>

      <p>Category: {currentQuestion.category}</p>
      <p>Difficulty: {currentQuestion.difficulty}</p>

      <h3>{currentQuestion.question}</h3>

      <div className="options">
        {currentQuestion.options.map((option, index) => {
          let buttonClass = '';

          if (selectedOption !== '') {
            if (option === currentQuestion.correct_answer) {
              buttonClass = 'correct';
            } else if (option === selectedOption) {
              buttonClass = 'incorrect';
            }
          }

          return (
            <button
              key={index}
              className={buttonClass}
              onClick={() => handleOptionClick(option)}
              disabled={selectedOption !== ''}
            >
              {option}
            </button>
          );
        })}
      </div>

      <button
        className="next-btn"
        onClick={handleNext}
        disabled={selectedOption === ''}
      >
        {currentIndex === questions.length - 1
          ? 'Finish Quiz'
          : 'Next Question'}
      </button>

      <p>Current Score: {score}</p>
    </div>
  );
};

export default App;