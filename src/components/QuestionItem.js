import React from 'react'

import './QuestionItem.css'

const QuestionItem = ({ qData }) => {
  const answers = [qData.correct_answer, ...qData.incorrect_answers]

  console.log(answers)

  return (
    <div className='QuestionItem'>
      <h2>{qData.question}</h2>
      {answers.map((ans) => (
        <button key={ans}>{ans}</button>
      ))}
    </div>
  )
}

export default QuestionItem
