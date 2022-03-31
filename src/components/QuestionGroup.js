import React from 'react'

import QuestionItem from './QuestionItem'

import './QuestionGroup.css'

const QuestionGroup = ({ questions }) => {
  return (
    <div className='QuestionGroup'>
      {questions.map((q) => (
        <QuestionItem key={q.correct_answer} qData={q} />
      ))}
    </div>
  )
}

export default QuestionGroup
