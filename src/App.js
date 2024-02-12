import { useState } from "react";
import TaskList from "./components/TaskList";
import TodoInput from "./components/TodoInput";

function App() {
  const [tasks,setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const deleteTask = (index) => {
    const updatedTask = [...tasks];
    updatedTask.splice(index,1);
    setTasks(updatedTask);
  }
  return (
    <>
    <h1 className="text-center text-3xl mt-5">Todo List App</h1>
    <TodoInput addTask={addTask} />
    <h1 className="text-center text-2xl mt-5">Tasks Information</h1>
    <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
};

export default App;