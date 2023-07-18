import React, {useState} from "react";
import "./App.css";

function App() {
  const [todoList, setTodolist] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const addtask = () => {
    setTodolist([...todoList, currentTask]);
  };
  const deleteTask = (taskToDelete) => {
    setTodolist(
      todoList.filter((task) => {
        return task !== taskToDelete;
      })
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.svg" className="App-logo" alt="logo" />
          <div>
            <h2>Add your task</h2>
            <input type="text"
             placeholder="write your next task" 
             onChange={(event) => {
              setCurrentTask(event.target.value);
              }}
              />
              <button onClick={addtask}>Add task</button>
          </div>
      <ul>
        {todoList.map((val,key)=>{
            return (
              <div>
              <li key={key}> {val} </li>
            <button onClick={(val)=>{deleteTask(val)}}>X</button>
           </div> );
        })}
      </ul>
      </header>

    </div>
  );
}

export default App;
