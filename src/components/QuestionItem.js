import React, { useState, useEffect } from 'react'

import Button from './Button'

import './QuestionItem.css'

const QuestionItem = ({ qData, onIsGameFinished }) => {
  const [isAnswerClicked, setIsAnswerClicked] = useState(false)

  const [pickedAnswer, setPickedAnswer] = useState('')
  const [winningRound, setWinningRound] = useState(false)

  const correctAnswer = qData.correct_answer

  const choseAnswer = (pickedAns) => {
    console.log('pickedAns from the button: ', pickedAns)
    setIsAnswerClicked(true)
    setPickedAnswer(pickedAns)
  }

  const answers = [qData.correct_answer, ...qData.incorrect_answers]

  useEffect(() => {
    if (onIsGameFinished) {
      if (pickedAnswer === correctAnswer) {
        setWinningRound(true)
      }
    }
  }, [onIsGameFinished])

  return (
    <div className='QuestionItem'>
      <h2>{qData.question}</h2>

      {answers.map((ans) => (
        <Button
          key={ans}
          onChoseAnswer={choseAnswer}
          isAnswerClicked={isAnswerClicked}
          onIsGameFinished={onIsGameFinished}
          correctAnswer={correctAnswer}
        >
          {ans}
        </Button>
      ))}
    </div>
  )
}

export default QuestionItem
