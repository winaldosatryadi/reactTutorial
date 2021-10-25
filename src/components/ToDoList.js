import { Fragment } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  return (
    <Fragment>
      <ToDoItem
        todoActivity="Belajar React"
        todoTime="10.00 - 11.00"
        todoDate={new Date(2021, 0, 23)}
      />
      <ToDoItem
        todoActivity="Belajar Math"
        todoTime="20.00 - 21.00"
        todoDate={new Date(2021, 0, 24)}
      />
      <ToDoItem
        todoActivity="Mandiin kucing"
        todoTime="23.00 - 24.00"
        todoDate={new Date(2021, 0, 25)}
      />
    </Fragment>
  );
}

export default ToDoList;
