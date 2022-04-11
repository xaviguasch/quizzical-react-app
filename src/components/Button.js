import React, { useState, useEffect } from 'react'

import './Button.css'

const Button = ({
  children,
  onChoseAnswer,
  isAnswerSelected,
  onIsGameFinished,
  correctAnswer,
  onCountPoints,
}) => {
  const [isClicked, setIsClicked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const qBtnClickHandler = () => {
    setIsClicked(true)
    onChoseAnswer(children)
    console.log(children)
  }

  useEffect(() => {
    if (onIsGameFinished) {
      if (correctAnswer === children) {
        setIsCorrect(true)

        if (isClicked) {
          onCountPoints()
        }
      }
    }
  }, [onIsGameFinished])

  return (
    <button
      className={`Button ${isClicked ? 'clicked' : ''}  ${isCorrect ? 'correct' : ''} ${
        onIsGameFinished && isClicked && !isCorrect ? 'fail' : ''
      }`}
      onClick={qBtnClickHandler}
      disabled={isAnswerSelected || onIsGameFinished}
    >
      {children}
    </button>
  )
}

export default Button
