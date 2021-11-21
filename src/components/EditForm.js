import { useState } from "react";
import "./ToDoForm.css";
import "./EditForm.css";
import Card from "./UI/Card";

const EditForm = (props) => {
  const [enteredActivity, setEnteredActivity] = useState(props.todoActivity);
  const [enteredDate, setEnteredDate] = useState(props.todoDate);
  const [enteredTimeStart, setEnteredTimeStart] = useState(props.todoTimeStart);
  const [enteredTimeEnd, setEnteredTimeEnd] = useState(props.todoTimeEnd);

  // console.log(enteredTimeEnd);

  const activityHandler = (event) => {
    setEnteredActivity(event.target.value);
  };

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const timeStartHandler = (event) => {
    setEnteredTimeStart(event.target.value);
  };

  const timeEndHandler = (event) => {
    setEnteredTimeEnd(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const todoData = {
      activity: enteredActivity,
      date: new Date(enteredDate),
      timeStart: enteredTimeStart,
      timeEnd: enteredTimeEnd,
      id: props.todoId,
      isComplete: false,
    };

    // console.log(todoData);

    setEnteredActivity("");
    setEnteredDate("");
    setEnteredTimeStart("");
    setEnteredTimeEnd("");

    props.onConfirmEdit(todoData);
  };

  return (
    <>
      <div className="backdrop" onClick={props.onClose}></div>
      <Card className="modal">
        <form className="form__controls" onSubmit={submitHandler}>
          <div className="form__date-time">
            <div className="form__control">
              <label>Date</label>
              <input
                type="date"
                min={new Date().toISOString().slice(0, 10)}
                max="2023-12-31"
                onChange={dateHandler}
                value={enteredDate}
              ></input>
            </div>

            <div className="form__control">
              <label>From</label>
              <input
                type="time"
                onChange={timeStartHandler}
                value={enteredTimeStart}
              ></input>
            </div>

            <div className="form__control">
              <label>To</label>
              <input
                type="time"
                onChange={timeEndHandler}
                value={enteredTimeEnd}
              ></input>
            </div>
          </div>

          <div className="form__control">
            <label>Activity</label>
            <input
              type="text"
              onChange={activityHandler}
              value={enteredActivity}
            ></input>
          </div>
          <div>
            <button className="form__btn" type="submit">
              Confirm
            </button>
            <button
              className="form__btn close"
              type="button"
              onClick={props.onClose}
            >
              Close
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default EditForm;
