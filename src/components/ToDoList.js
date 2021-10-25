import { Fragment, useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  let todoActivity = "Bersihkan kamar";
  const [selesai, setSelesai] = useState(todoActivity);

  const handler = () => {
    setSelesai("SELESAI");
  };
  return (
    <Fragment>
      <ToDoItem
        todoActivity="Belajar React"
        todoTime="10.00 - 11.00"
        todoDate={new Date(2021, 0, 23)}
      />
      ;
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
      <ToDoItem
        todoActivity={selesai}
        todoTime="10.00 - 11.00"
        todoDate={new Date(2021, 0, 23)}
      />
      <button onClick={handler}>Selesai</button>;
    </Fragment>
  );
}

export default ToDoList;
