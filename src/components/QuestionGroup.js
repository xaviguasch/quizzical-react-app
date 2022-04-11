import React from 'react'

import QuestionItem from './QuestionItem'

import './QuestionGroup.css'

const QuestionGroup = ({ questions, onCountPoints, points, isGameFinished }) => {
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

      {isGameFinished && (
        <p>
          You scored {points}/{questions.length} correct answers
        </p>
      )}
    </div>
  )
}

export default QuestionGroup
