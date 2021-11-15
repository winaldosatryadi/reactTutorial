import "./ToDoFilter.css";
import Card from "./UI/Card";

const ToDoFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    // console.log(event.target.value);\
    props.onChangeFilter(event.target.value);
  };
  return (
    <Card>
      <div className="todo-filter">
        <div className="todo-filter__control">
          <label>Filter by Month</label>
          <select onChange={dropdownChangeHandler}>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
      </div>
    </Card>
  );
};

export default ToDoFilter;
