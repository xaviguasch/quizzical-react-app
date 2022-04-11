import React, { useState, useEffect } from 'react'

import StartScreen from './components/StartScreen'
import QuestionGroup from './components/QuestionGroup'

import './App.css'

function App() {
  const [isQuizzActive, setIsQuizzActive] = useState(false)
  const [questionsData, setQuestionsData] = useState([])
  const [points, setPoints] = useState(0)
  const [isGameFinished, setIsGameFinished] = useState(false)
  const [answers, setAnswers] = useState([])

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

  // Helper function, it shuffles the order a given arry
  const shuffle = (originalArray) => {
    const array = [].concat(originalArray)
    let currentIndex = array.length,
      temporaryValue,
      randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  const fetchBatchOfQuestions = () => {
    fetch('https://opentdb.com/api.php?amount=5&category=11&type=multiple')
      .then((res) => res.json())
      .then((data) => {
        const resultArr = data.results.map((obj) => {
          let answersArr = [obj.correct_answer, ...obj.incorrect_answers]

          let shuffledAnswers = shuffle(answersArr)

          let wholeObj = { ...obj, shuffledAnswers }

          return wholeObj
        })

        setQuestionsData(resultArr)
      })
  }

  const resetGameHandler = () => {
    // setIsQuizzActive(false)
    setPoints(0)
    setIsGameFinished(false)

    fetchBatchOfQuestions()
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
            questions={questionsData}
            onCountPoints={countPointsHandler}
            points={points}
            isGameFinished={isGameFinished}
          />
          {!isGameFinished && <button onClick={checkAnswerHandler}>Check answers</button>}
          {isGameFinished && <button onClick={resetGameHandler}>Play Again</button>}
        </div>
      )}
    </div>
  )
}

export default App
