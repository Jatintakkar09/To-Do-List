import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task !== "") {
      setTaskList((prev) => [...prev, {task: task, completed: false}]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
setTaskList((prev)=>prev.filter((_,i)=>i!==index))
  };

  const ToggleTask=(index)=>{
 setTaskList(prev=>
  prev.map(((task,i)=>i===index?{...task,completed:!task.completed}:task))
 )

  }
  




  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">To-Do List</h2>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Add a new task..."
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {taskList.map((task, index) => {
            return (
              <li key={index} className="flex items-center justify-between">
               
                <span  className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`} onClick={()=>ToggleTask(index)}>
                    {task.task}                 

                </span>

                <button
                  className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
