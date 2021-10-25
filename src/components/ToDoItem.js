import { Date as DateItem } from "./Date";

import "./ToDoItem.css";
import Card from "./UI/Card";

function ToDoItem(props) {
  return (
    <Card className="todo-item">
      <DateItem
        tanggal={props.todoDate.getDate()}
        bulan={props.todoDate.toLocaleString("default", { month: "long" })}
        tahun={props.todoDate.getFullYear()}
      />
      <div className="todo-item__description">
        <h2>{props.todoActivity}</h2>
        <div className="todo-item__time">{props.todoTime}</div>
      </div>
    </Card>
  );
}

export default ToDoItem;
