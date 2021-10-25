import "./App.css";
import ToDoItem from "./components/ToDoItem";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

function App() {
  return (
    <div className="App">
      <ToDoForm />
      <ToDoList />
    </div>
  );
}

export default App;
