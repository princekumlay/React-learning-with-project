import React, {useState} from 'react'
import InputCompo from './components/InputCompo'
import CreateTaskCompo from './components/CreateTaskCompo'
import './App.css'
import ThemeToggle from './components/Themetoggle'


function App() {

  const [inputVal, setInputVal] = useState("");
  const [taskList, setTaskList] = useState([]);

  const writeToInput = (e) => {
    setInputVal(e.target.value);
  }

  const addTask = () => {
    if(inputVal !== ""){
      setTaskList((prevList) => [...prevList, inputVal]);
      setInputVal("");
    }
  };

  const deleteTask = (index) => {
    setTaskList(prevList => prevList.filter((_, i) => i !== index));
  }

  return (
    <div id="main">
      <h1>To-Do List</h1>
      <ThemeToggle />
      <InputCompo inputVal={inputVal} writeToInput={writeToInput} addTask={addTask} />
      <CreateTaskCompo taskList={taskList} deleteTask={deleteTask} />
    </div>
  )
}

export default App