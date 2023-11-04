import { useEffect, useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Task } from "../../components";
import "./Home.scss";

export default function Home() {
  let [user, setUser] = useState(-1);
  const inputRef = useRef();
  useEffect(() => {
    if (localStorage.getItem("toastShownHome") === "true") {
      toast.success("Successfully SignIN");
      localStorage.setItem("toastShownHome", "false"); // Set the flag in localStorage
      localStorage.setItem("toastShownOnSignOut", "true");
    }
  }, []);

  useEffect(() => {
    const userDATA = JSON.parse(localStorage.getItem("users"));
    const session = JSON.parse(localStorage.getItem("userSession")); // //find user with help of session
    if (user === -1) {
      let user = userDATA?.find((D) => D.user.id === session.id);
      setUser(user);
    } else {
      const data = userDATA?.map((D) => {
        if (D.user.id === session.id) {
          return user;
        }
        return D;
      });
      localStorage.setItem("users", JSON.stringify(data));
    }
  }, [user]);

  const submitHandler = (event) => {
    event.preventDefault(); //by default submit action remove for current click
    let findMaxId = 0;
    user.todo.forEach((todo) => {
      findMaxId = Math.max(todo.id, findMaxId);
    });
    const newTodo = {
      id: findMaxId + 1,
      text: inputRef?.current?.value,
      isCompleted: false,
    };
    setUser((p) => ({ ...p, todo: [...p.todo, newTodo] }));
    inputRef.current.value = "";
    toast.success("Successfuly added new task!");
  };
  return (
    <>
      <div className="homepage">
        <Toaster />
        <div className="top">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Write your task..."
              required
              ref={inputRef}
            />
            <button type="submit" className="btn btn-primary">
              Add Task
            </button>
          </form>
        </div>

        <div className="bottom">
          {user?.todo?.map((task, index) => (
            <Task task={task} user={user} setUser={setUser} key={task.id} />
          ))}
          {user?.todo?.length === 0 && (
            <span>Tasks will be display here...</span>
          )}
        </div>
      </div>
    </>
  );
}
