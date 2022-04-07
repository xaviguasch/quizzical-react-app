import React, { useState, useEffect } from 'react'

import StartScreen from './components/StartScreen'
import QuestionGroup from './components/QuestionGroup'

import './App.css'

function App() {
  const [isQuizzActive, setIsQuizzActive] = useState(false)
  const [questions, setQuestions] = useState([])
  const [points, setPoints] = useState(0)
  const [isGameFinished, setIsGameFinished] = useState(false)

  const checkAnswerHandler = () => {
    setIsGameFinished(true)
  }

  const startGameHandler = () => {
    setIsQuizzActive(true)
  }

  const countPointsHandler = () => {
    console.log('counting')
    setPoints((prevState) => prevState + 1)
  }

  const fetchBatchOfQuestions = () => {
    fetch('https://opentdb.com/api.php?amount=5&category=11&type=multiple')
      .then((res) => res.json())
      .then((data) => setQuestions(data.results))
  }

  useEffect(() => {
    console.log('effect ran')

    fetchBatchOfQuestions()
  }, [])

  return (
    <div className='App'>
      <h1>Quizz App</h1>

      {!isQuizzActive && <StartScreen onStartGame={startGameHandler} />}

      {isQuizzActive && (
        <div>
          <QuestionGroup
            questions={questions}
            onCountPoints={countPointsHandler}
            points={points}
            isGameFinished={isGameFinished}
          />
          <button onClick={checkAnswerHandler}>Check answers</button>
        </div>
      )}
    </div>
  )
}

export default App
