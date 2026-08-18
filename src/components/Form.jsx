import React, {useState, useTransition} from 'react'
import './Form.css'

function Form() {
    const [text, setText] = useState("");
  return (
    <div id="formContainer">
        <form id="form">
            <input onChange={(e) => setText(e.target.value)} type="text" value={text}/>
        </form>
    </div>
  )
}

export default Form