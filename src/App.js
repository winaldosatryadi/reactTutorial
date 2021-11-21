import "./App.css";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import { useState } from "react";
import ToDoFilter from "./components/ToDoFilter";
import Card from "./components/UI/Card";
import EditForm from "./components/EditForm";

let todoId, todoActivity, todoDate, todoTimeStart, todoTimeEnd;

function App() {
  const todoList = [
    {
      date: new Date(2021, 0, 23),
      activity: "Belajar React",
      timeStart: "10:00",
      timeEnd: "11:00",
      id: 1,
      isComplete: false,
    },
    {
      date: new Date(2021, 0, 24),
      activity: "Belajar Math",
      timeStart: "20:00",
      timeEnd: "21:00",
      id: 2,
      isComplete: false,
    },
    {
      date: new Date(2021, 0, 25),
      activity: "Mandiin kucing",
      timeStart: "23:00",
      timeEnd: "24:00",
      id: 3,
      isComplete: false,
    },
  ];

  const [todo, setTodo] = useState(todoList);
  const [isEditing, setIsEditing] = useState(false);

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

  const editTodoHandler = (id, activity, date, timeStart, timeEnd) => {
    setIsEditing(true);
    // console.log(isEditing);
    // console.log(activity);

    function formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    }

    todoId = id;
    todoActivity = activity;
    todoDate = formatDate(date);
    todoTimeStart = timeStart;
    todoTimeEnd = timeEnd;
  };

  function onConfirmEdit(updatedToDoItem) {
    // console.log(updatedToDoItem);
    const filteredList = todo.filter(
      (todoItem) => todoItem.id !== updatedToDoItem.id
    );

    setTodo(() => {
      return [updatedToDoItem, ...filteredList];
    });
  }

  return (
    <div className="App">
      {isEditing && (
        <EditForm
          onClose={() => {
            setIsEditing(false);
          }}
          onConfirmEdit={onConfirmEdit}
          todoId={todoId}
          todoActivity={todoActivity}
          todoDate={todoDate}
          todoTimeStart={todoTimeStart}
          todoTimeEnd={todoTimeEnd}
        />
      )}

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
          onEdit={editTodoHandler}
          onComplete={completeToDoHandler}
        />
      )}
    </div>
  );
}

export default App;
