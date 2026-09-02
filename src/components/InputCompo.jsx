import React from 'react'

function InputCompo({inputVal, writeToInput, addTask}) {
  return (
    <div id="input_task">
        <input type="text" value={inputVal} placeholder="Add a task..." onChange={writeToInput} />

        <button id="add_task_button" onClick={addTask}>
          +
        </button>
      </div>
  )
}

export default InputCompo