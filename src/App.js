import React, { useState, useEffect } from 'react'

import StartScreen from './components/StartScreen'

import './App.css'

function App() {
  const [isQuizzActive, setIsQuizzActive] = useState(false)
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    console.log('effect ran')

    fetch('https://opentdb.com/api.php?amount=5&category=11&type=multiple')
      .then((res) => res.json())
      .then((data) => setQuestions(data.results))
  }, [])

  return (
    <div className='App'>
      <h1>Quizz App</h1>

      {!isQuizzActive && <StartScreen />}
    </div>
  )
}

export default App
