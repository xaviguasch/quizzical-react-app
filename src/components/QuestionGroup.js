import React, { useState } from 'react'

import QuestionItem from './QuestionItem'

import './QuestionGroup.css'

const QuestionGroup = ({ questions }) => {
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
        />
      ))}

      <br />
      <br />
      <br />
      <br />

      <button onClick={checkAnswerHandler}>Check answers</button>
    </div>
  )
}

export default QuestionGroup
