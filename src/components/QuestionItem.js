import React, { useState, useEffect } from 'react'

import Button from './Button'

import './QuestionItem.css'

const QuestionItem = ({ qData, onIsGameFinished, onCountPoints }) => {
  const [isAnswerSelected, setIsAnswerSelected] = useState(false)

  const correctAnswer = qData.correct_answer

  const choseAnswer = (pickedAns) => {
    setIsAnswerSelected(true)
  }

  const answers = [qData.correct_answer, ...qData.incorrect_answers]

  return (
    <div className='QuestionItem'>
      <h2>{qData.question}</h2>

      {answers.map((ans) => (
        <Button
          key={ans}
          onChoseAnswer={choseAnswer}
          isAnswerSelected={isAnswerSelected}
          onIsGameFinished={onIsGameFinished}
          correctAnswer={correctAnswer}
          onCountPoints={onCountPoints}
        >
          {ans}
        </Button>
      ))}
    </div>
  )
}

export default QuestionItem
