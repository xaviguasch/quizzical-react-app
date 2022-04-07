import React, { useState, useEffect } from 'react'

import StartScreen from './components/StartScreen'
import QuestionGroup from './components/QuestionGroup'

import './App.css'

function App() {
  const [isQuizzActive, setIsQuizzActive] = useState(false)
  const [questions, setQuestions] = useState([])
  const [points, setPoints] = useState(0)

  const startGameHandler = () => {
    setIsQuizzActive(true)
  }

  const countPointsHandler = () => {
    console.log('counting')
    setPoints((prevState) => prevState + 1)
  }

  useEffect(() => {
    console.log('effect ran')

    fetch('https://opentdb.com/api.php?amount=5&category=11&type=multiple')
      .then((res) => res.json())
      .then((data) => setQuestions(data.results))
  }, [])

  return (
    <div className='App'>
      <h1>Quizz App</h1>

      {!isQuizzActive && <StartScreen onStartGame={startGameHandler} />}

      {isQuizzActive && (
        <QuestionGroup
          questions={questions}
          onCountPoints={countPointsHandler}
          points={points}
        />
      )}
    </div>
  )
}

export default App
