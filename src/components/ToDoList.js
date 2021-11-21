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
          key={todoItem.id}
          id={todoItem.id}
          onRemove={props.onRemove}
          onEdit={props.onEdit}
          onComplete={props.onComplete}
          isComplete={todoItem.isComplete}
        />
      ))}
    </Fragment>
  );
}

export default ToDoList;
