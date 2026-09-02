import React from "react";
import deleteIcon from "../assets/delete.png";

function Task({task, deleteTask}) {
  return (
    <div id="created_task">
      <p>{task}</p>        

      <div id="input-delete">
        <input type="checkbox" />
        <button onClick={deleteTask}>
          <img id="delete-icon" src={deleteIcon} alt="delete Icon" />
        </button>
      </div>
    </div>
  );
}

export default Task;