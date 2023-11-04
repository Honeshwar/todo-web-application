import { useRef } from "react";
import toast from "react-hot-toast";
import "./Task.scss";

export default function Task({ task, index, user, setUser }) {
  const inputRef = useRef();
  const checkboxRef = useRef();

  const removeTodoHandler = (todoId) => {
    //filter out and remove it from data
    const newTodo = user?.todo?.filter((todo) => todo.id !== todoId);
    console.log("new user()", { ...user, todo: newTodo });
    setUser({ ...user, todo: newTodo });
    toast.success("Successfuly removed task!", {
      duration: 3000,
    });
  };
  const todoEditHandler = (todoId) => {
    //filter out and remove it from data
    const newTodo = user?.todo?.map((todo) => {
      if (todo.id === todoId) {
        todo.text = inputRef?.current?.value;
      }
      return todo;
    });
    console.log({ ...user, todo: newTodo });
    setUser({ ...user, todo: newTodo });
    toast.success("Successfuly edited task!", {
      duration: 3000,
    });
  };
  const markAsCompletedHandler = (todoId) => {
    //filter out and remove it from data
    const newTodo = user?.todo?.map((todo) => {
      if (todo.id === todoId) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    console.log({ ...user, todo: newTodo });
    setUser({ ...user, todo: newTodo });
    toast.success(
      `Successfuly mark as ${task.isComplete ? "completed" : "UnCompleted"}!`,
      {
        duration: 3000,
      },
    );
  };
  return (
    <>
      <div className="task">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className={`modal-title ${task.isCompleted && "disabled"}`}>
              Task
            </h5>
            <input
              type="checkbox"
              title="Mark as complete"
              defaultChecked={task.isCompleted}
              onClick={() => markAsCompletedHandler(task.id)}
            />
          </div>
          <div className="modal-body">
            <p className={task.isCompleted && "disabled"}>{task.text}.</p>
          </div>
          <div className="modal-footer">
            {/* <!-- Button trigger edit todo modal --> */}
            <button
              type="button"
              className="btn btn-primary removeTodo"
              data-bs-toggle="modal"
              data-bs-target={`#editTodo-${task.id}`}
              disabled={task.isCompleted}
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
      {/* // modal for each task to edit todo task */}
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
