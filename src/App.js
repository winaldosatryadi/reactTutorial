import "./App.css";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import { useState } from "react";

function App() {
  const todoList = [
    {
      date: new Date(2021, 0, 23),
      activity: "Belajar React",
      timeStart: "10.00",
      timeEnd: "11.00",
    },
    {
      date: new Date(2021, 0, 24),
      activity: "Belajar Math",
      timeStart: "20.00",
      timeEnd: "21.00",
    },
    {
      date: new Date(2021, 0, 25),
      activity: "Mandiin kucing",
      timeStart: "23.00",
      timeEnd: "24.00",
    },
  ];

  const [todo, setTodo] = useState(todoList);

  const addToDoHandler = (newTodo) => {
    setTodo((todo) => {
      return [newTodo, ...todo];
    });
  };

  return (
    <div className="App">
      <ToDoForm onAddData={addToDoHandler} />
      <ToDoList items={todo} />
    </div>
  );
}

export default App;
