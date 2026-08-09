import { useState } from 'react'
import './App.css'
import Hello from './components/Hello.jsx'
import Fruits from './components/Fruits'
// import Fruit from './components/Fruit'
// import Fruits from './components/Fruits.jsx'

function App() {
  const [count, setCount] = useState(0)

  const incrementPrice = () => {
    setCount(prevCount => prevCount + 1)
  }
  const decrementPrice = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
        </div>
        <p>{count}</p>

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
        
       <Fruits click={count} />
       <Hello />
      </section>
    </>
  )
}

export default App
