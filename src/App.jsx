import { useState } from "react";
import "./App.css";
import deleteIcon from "./assets/delete.png";

function App() {
  return (
    <div id="main">
      <h1>To do List</h1>

      <div id="input_task">
        <input type="text" value={"add task"} />
      </div>

      {/* <div id="button_div"> */}
        <button id="add_task_button" onClick={(e) => setText(e.target.val)}>
          +
        </button>
      {/* </div> */}

      <div id="created_task">
        <p>{"go to gym"}</p>

        <div id="input-delete">
          <input type="checkbox" />
          <button>
            <img id="delete-icon" src={deleteIcon} alt="delete Icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
