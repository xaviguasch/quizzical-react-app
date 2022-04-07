import React, { useState } from 'react'

import QuestionItem from './QuestionItem'

import './QuestionGroup.css'

const QuestionGroup = ({ questions, onCountPoints, points }) => {
  const [isGameFinished, setIsGameFinished] = useState(false)

  const checkAnswerHandler = () => {
    setIsGameFinished(true)
  }

  return (
    <div className='QuestionGroup'>
      {questions.map((q) => (
        <QuestionItem
          key={q.correct_answer}
          qData={q}
          onIsGameFinished={isGameFinished}
          onCountPoints={onCountPoints}
        />
      ))}

      <br />
      <br />
      <br />
      <br />

      <button onClick={checkAnswerHandler}>Check answers</button>

      {isGameFinished && (
        <p>
          You scored {points}/{questions.length} correct answers
        </p>
      )}
    </div>
  )
}

export default QuestionGroup
