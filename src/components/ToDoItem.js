import { Date as DateItem } from "./Date";

import "./ToDoItem.css";
import Card from "./UI/Card";
// import { RiCloseCircleLine } from "react-icons/ri";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

function ToDoItem(props) {
  return (
    <Card className={props.isComplete ? "todo-item complete" : "todo-item"}>
      <DateItem
        tanggal={props.todoDate.getDate()}
        bulan={props.todoDate.toLocaleString("default", { month: "long" })}
        tahun={props.todoDate.getFullYear()}
      />
      <div className="todo-item__description">
        <h2>{props.todoActivity}</h2>
        <div className="todo-item__time">
          {props.todoTimeStart}-{props.todoTimeEnd}
        </div>
      </div>
      <div className="icons">
        <AiFillCloseCircle
          className="delete-icon"
          onClick={() => {
            // console.log("Saya mau menghapus ", props.id);
            props.onRemove(props.id);
          }}
        />
        <AiFillCheckCircle
          className="complete-icon"
          onClick={() => {
            // console.log("Saya sudah menyelesaikan ", props.id);
            props.onComplete(props.id);
          }}
        />
      </div>
    </Card>
  );
}

export default ToDoItem;
