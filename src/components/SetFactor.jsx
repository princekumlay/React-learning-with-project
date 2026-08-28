import React from 'react'
import '../App.css'

function SetFactor({ factor, setFactor }) {
    
  const incrementfactor = () => {
    setFactor(prev => prev + 1)
  }
  const decrementfactor = () => {
    setFactor(prev => prev - 1)
  }

  return (
    <div id="buttons">
      <button
        type="button"
        className="counter"
        onClick={incrementfactor}
      >
        Increment Factor
      </button>
      <button
        type="button"
        className="counter"
        onClick={decrementfactor}
      >
        Decrement Factor
      </button>
    </div>
  )
}

export default SetFactor