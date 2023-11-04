import toast from "react-hot-toast";
import "./Task.scss";

export default function Task({ task, index, data, setData }) {
  const removeTodoHandler = (todoId) => {
    //filter out and remove it from data
    const newTodo = data?.todo?.filter((todo) => todo.id !== todoId);
    console.log({ ...data, todo: newTodo });
    setData({ ...data, todo: newTodo });
    toast.success("Successfuly removed task!", {
      duration: 3000,
    });
  };
  return (
    <div className="task">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Task {index + 1}</h5>
          <input type="checkbox" />
        </div>
        <div className="modal-body">
          <p>{task.text}.</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-success"
            data-bs-dismiss="modal"
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => removeTodoHandler(task.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

// <div className="left">
//   <input type="checkbox" />
// </div>
// <div className="center">{task.desc}</div>
// <div className="right">
//   <button type="button">Edit</button>
//   <button type="button">Delete</button>
// </div>
