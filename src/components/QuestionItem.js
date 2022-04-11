import React, { useState } from 'react'

import Button from './Button'

import './QuestionItem.css'

import he from 'he'

const QuestionItem = ({ qData, onIsGameFinished, onCountPoints }) => {
  const [isAnswerSelected, setIsAnswerSelected] = useState(false)

  const correctAnswer = qData.correct_answer

  const choseAnswer = (pickedAns) => {
    setIsAnswerSelected(true)
  }

  const answers = qData.shuffledAnswers

  return (
    <div className='QuestionItem'>
      <h2>{he.decode(qData.question)}</h2>

      {answers.map((ans) => (
        <Button
          key={ans}
          onChoseAnswer={choseAnswer}
          isAnswerSelected={isAnswerSelected}
          onIsGameFinished={onIsGameFinished}
          correctAnswer={correctAnswer}
          onCountPoints={onCountPoints}
        >
          {he.decode(ans)}
        </Button>
      ))}
    </div>
  )
}

export default QuestionItem
