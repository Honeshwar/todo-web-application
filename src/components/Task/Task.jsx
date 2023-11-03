import "./Task.scss";
export default function Task({ task }) {
  return (
    <div className="task">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Task {task.id}</h5>
          <input type="checkbox" />
        </div>
        <div className="modal-body">
          <p>{task.desc}.</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-success"
            data-bs-dismiss="modal"
          >
            Edit
          </button>
          <button type="button" className="btn btn-danger">
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
