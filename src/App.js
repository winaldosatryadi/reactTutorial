import "./App.css";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import { useState } from "react";
import ToDoFilter from "./components/ToDoFilter";
import Card from "./components/UI/Card";

function App() {
  const todoList = [
    {
      date: new Date(2021, 0, 23),
      activity: "Belajar React",
      timeStart: "10.00",
      timeEnd: "11.00",
      id: 1,
      isComplete: false,
    },
    {
      date: new Date(2021, 0, 24),
      activity: "Belajar Math",
      timeStart: "20.00",
      timeEnd: "21.00",
      id: 2,
      isComplete: false,
    },
    {
      date: new Date(2021, 0, 25),
      activity: "Mandiin kucing",
      timeStart: "23.00",
      timeEnd: "24.00",
      id: 3,
      isComplete: false,
    },
  ];

  const [todo, setTodo] = useState(todoList);

  const addToDoHandler = (newTodo) => {
    setTodo((todo) => {
      return [newTodo, ...todo];
    });
  };

  const [filteredMonth, setFilteredMonth] = useState("January");

  const filterChangeHandler = (selectedMonth) => {
    // console.log("selectedMonth: ", selectedMonth);
    setFilteredMonth(selectedMonth);
  };

  const filteredToDo = todo.filter((todo) => {
    return (
      todo.date.toLocaleString("default", { month: "long" }) === filteredMonth
    );
  });

  const removeTodoHandler = (id) => {
    const removedArr = [...filteredToDo].filter((todo) => todo.id !== id);
    setTodo(removedArr);
  };

  const completeToDoHandler = (id) => {
    // console.log("Saya dari App.js, sudah menyelesaikan task ke ", id);
    let updatedTodos = filteredToDo.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        // console.log(todo.id, todo.isComplete);
      }
      return todo;
    });
    setTodo(updatedTodos);
  };

  return (
    <div className="App">
      <ToDoForm onAddData={addToDoHandler} />
      <ToDoFilter onChangeFilter={filterChangeHandler} />
      {filteredToDo.length === 0 ? (
        <Card>
          <p style={{ color: "#fff", padding: "2rem", textAlign: "center" }}>
            No To Do Items Found!
          </p>
        </Card>
      ) : (
        <ToDoList
          items={filteredToDo}
          onRemove={removeTodoHandler}
          onComplete={completeToDoHandler}
        />
      )}
    </div>
  );
}

export default App;
