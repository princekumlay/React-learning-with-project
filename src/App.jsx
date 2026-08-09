import { useState } from 'react'
import './App.css'
import Hello from './components/Hello.jsx'
import Fruits from './components/Fruits'
// import Fruit from './components/Fruit'
// import Fruits from './components/Fruits.jsx'
import SetFactor from './components/SetFactor.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [factor, setFactor] = useState(1)

  const incrementPrice = () => {
    setCount(prevCount => prevCount + factor)
  }
  const decrementPrice = () => {
    setCount(prevCount => prevCount - factor)
  }

  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
        </div>
        <p>Count: {count}</p>
        <p>Factor: {factor}</p>

        <button
          type="button"
          className="counter"
          onClick={incrementPrice}
        >
          Increase Price
        </button>

        <button
          type="button"
          className="counter"
          onClick={decrementPrice}
        >
          Decrease Price
        </button>

        <SetFactor factor={factor} setFactor={setFactor} />
        <Fruits click={count} />
        <Hello />
      </section>
    </>
  )
}

export default App
