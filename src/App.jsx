import React, {useState} from "react";
import "./App.css";

function App() {
  const [todoList, setTodolist] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const addtask = () => {
    setTodolist([...todoList, currentTask]);
  };
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
            return <li key={key}> {val} </li>;
        })}
      </ul>
      </header>

    </div>
  );
}

export default App;
