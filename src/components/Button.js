import React, { useState, useEffect } from 'react'

import './Button.css'

const Button = ({
  children,
  onChoseAnswer,
  isAnswerClicked,
  onIsGameFinished,
  correctAnswer,
}) => {
  const [isClicked, setIsClicked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const qBtnClickHandler = () => {
    setIsClicked(true)
    onChoseAnswer(children)
  }

  useEffect(() => {
    if (onIsGameFinished) {
      if (correctAnswer === children) {
        setIsCorrect(true)
      }
    }
  }, [onIsGameFinished])

  return (
    <button
      className={`Button ${isClicked ? 'clicked' : ''}  ${isCorrect ? 'correct' : ''} ${
        onIsGameFinished && isClicked && !isCorrect ? 'fail' : ''
      }`}
      onClick={qBtnClickHandler}
      disabled={isAnswerClicked}
    >
      {children}
    </button>
  )
}

export default Button