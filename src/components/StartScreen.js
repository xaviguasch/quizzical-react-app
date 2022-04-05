import React from 'react'

import './StartScreen.css'

const StartScreen = ({ onStartGame }) => {
  return (
    <div className='StartScreen'>
      <h1>Quizzical</h1>
      <p>Multiple choice quizz</p>

      <button onClick={() => onStartGame()}>Start Quizz</button>
    </div>
  )
}

export default StartScreen
