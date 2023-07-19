import React, {useState} from "react";
import "./App.css";

function App() {
  const [todoList, setTodolist] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const addtask = () => {
    setTodolist([...todoList, {task:currentTask, completed: false}]);
  };
  const deleteTask = (taskToDelete) => {
    setTodolist(
      todoList.filter((task) => {
        return task.task !== taskToDelete;
      })
    )
  }
  const completeTask = (taskTocomplete) => {
    setTodolist(todoList.map((task)=>{
      return task.task == taskTocomplete ? {task: taskTocomplete, completed: true} : {task: task.task, completed: task.completed ? true : false}
    }))
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
              <div id="task">
              <li key={key}> {val.task} </li>
            <button onClick={()=>{deleteTask(val.task)}}>X</button>
            <button onClick={() => {completeTask(val.task)}}>Completed</button>
            {val.completed ? <h1>Task Completed</h1> : <h1>Task Not completed</h1>}
           </div> );
        })}
      </ul>
      </header>

    </div>
  );
}

export default App;
