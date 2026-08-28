import { useState } from 'react'
import './App.css'
import Hello from './components/Hello.jsx'
import Fruits from './components/Fruits'
// import Fruit from './components/Fruit'
// import Fruits from './components/Fruits.jsx'
import SetFactor from './components/SetFactor.jsx'
import Form from './components/Form.jsx'

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
        <p id="count-para">{count}</p>
        
        <div id="buttons">
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
        </div>
        <p id="factor-para">{factor}</p>

        <SetFactor factor={factor} setFactor={setFactor} />
        <div>
          <Fruits click={count} />
        </div>
        <div>
          <Hello />
        </div>
        <div>
          <Form/>
        </div>
        
        
      </section>
    </>
  )
}

export default App
