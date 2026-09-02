import React from "react";
import Task from "./Task"


function CreateTaskCompo({taskList, deleteTask}) {
  return (
    <div id="created_task_container">
      {taskList.map((task, index) => (
        <Task task={task} deleteTask={() => deleteTask(index)} />
      ))}
    </div>
  );
}

export default CreateTaskCompo;