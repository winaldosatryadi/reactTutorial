import { Fragment } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  return (
    <Fragment>
      {props.items.map((todoItem) => (
        <ToDoItem
          todoActivity={todoItem.activity}
          todoTimeStart={todoItem.timeStart}
          todoTimeEnd={todoItem.timeEnd}
          todoDate={todoItem.date}
        />
      ))}
    </Fragment>
  );
}

export default ToDoList;
