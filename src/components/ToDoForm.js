import "./ToDoForm.css";
import Card from "./UI/Card";

const ToDoForm = () => {
  return (
    <Card className="form__card">
      <form className="form__controls">
        <div className="form__date-time">
          <div className="form__control">
            <label>Date</label>
            <input
              type="date"
              min={new Date().toISOString().slice(0, 10)}
              max="2023-12-31"
            ></input>
          </div>

          <div className="form__control">
            <label>From</label>
            <input type="time"></input>
          </div>

          <div className="form__control">
            <label>To</label>
            <input type="time"></input>
          </div>
        </div>

        <div className="form__control">
          <label>Activity</label>
          <input type="text"></input>
        </div>
        <div>
          <button className="form__btn" type="submit">
            Add To Do Item
          </button>
        </div>
      </form>
    </Card>
  );
};

export default ToDoForm;
