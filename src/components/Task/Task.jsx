import { useRef } from "react";
import toast from "react-hot-toast";
import "./Task.scss";

export default function Task({ task, index, data, setData }) {
  const inputRef = useRef();

  const removeTodoHandler = (todoId) => {
    //filter out and remove it from data
    const newTodo = data?.todo?.filter((todo) => todo.id !== todoId);
    console.log({ ...data, todo: newTodo });
    setData({ ...data, todo: newTodo });
    toast.success("Successfuly removed task!", {
      duration: 3000,
    });
  };
  const todoEditHandler = (todoId) => {
    //filter out and remove it from data
    const newTodo = data?.todo?.map((todo) => {
      if (todo.id === todoId) {
        todo.text = inputRef?.current?.value;
      }
      return todo;
    });
    console.log({ ...data, todo: newTodo });
    setData({ ...data, todo: newTodo });
    toast.success("Successfuly edited task!", {
      duration: 3000,
    });
  };
  return (
    <>
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
            {/* <!-- Button trigger edit todo modal --> */}
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target={`#editTodo-${task.id}`}
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
      {/* // modal f
      or each task to edit todo task */}
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={`editTodo-${task.id}`}
        tabIndex="-1"
        aria-labelledby="editTodoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Todo Text
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                className="form-control"
                type="text"
                defaultValue={task.text}
                placeholder="Write todo text here..."
                ref={inputRef}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => todoEditHandler(task.id)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
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
