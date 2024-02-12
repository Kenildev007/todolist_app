import TaskList from "./components/TaskList";
import TodoInput from "./components/TodoInput";

function App() {
  return (
    <>
    <h1 className="text-center text-3xl mt-5">Todo List App</h1>
    <TodoInput />
    <h1 className="text-center text-2xl mt-5">Tasks Information</h1>
    <TaskList />
    </>
  );
}

export default App;
