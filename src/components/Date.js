import "./Date.css";

export const Date = (props) => {
  return (
    <div className="todo-date">
      <div className="todo-date__month">{props.bulan}</div>
      <div className="todo-date__year">{props.tahun}</div>
      <div className="todo-date__day">{props.tanggal}</div>
    </div>
  );
};
