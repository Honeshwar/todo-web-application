import { useEffect, useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Navbar, Footer, Task } from "../../components";
import "./Home.scss";

export default function Home() {
  // const [data, setData] = useState(-1);
  let [user, setUser] = useState(-1);
  useEffect(() => {
    // if (localStorage.getItem("toastShownHome") === null) {
    //   // toast.success("Successfully SignIN");
    //   localStorage.setItem("toastShownHome", "false"); // Set the flag in localStorage
    //   localStorage.setItem("toastShownOnSignOut", "true");
    // } else
    if (localStorage.getItem("toastShownHome") === "true") {
      toast.success("Successfully SignIN");
      localStorage.setItem("toastShownHome", "false"); // Set the flag in localStorage
      localStorage.setItem("toastShownOnSignOut", "true");
    }
  }, []);

  const userDATA = JSON.parse(localStorage.getItem("users"));
  //find user with help of session
  const session = JSON.parse(localStorage.getItem("userSession"));
  useEffect(() => {
    if (user === -1) {
      let user = userDATA?.find((D) => D.user.id === session.id);
      //separate/ move to last isComplete todo
      // const markedTodo = user?.todo?.filter(
      //   (todo) => todo.isCompleted === true,
      // );
      // const unMarkedTodo = user?.todo?.filter(
      //   (todo) => todo.isCompleted === false,
      // );
      // user = { ...user, todo: [...unMarkedTodo, ...markedTodo] };
      console.log("user", user);
      setUser(user);
      // setData(userDATA);
    } else {
      const data = userDATA?.map((D) => {
        if (D.user.id === session.id) {
          return user;
        }
        return D;
      });
      console.log("d", data);
      localStorage.setItem("users", JSON.stringify(data));
    }
  }, [user]);

  console.log("user out", user);
  // const [todoText, setTodoText] = useState("");
  const inputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault(); //by default submit action remove current clcik k liya
    // console.log(inputRef?.current?.value);
    // return;
    //separate/ move to last isComplete todo
    // const markedTodo = user?.todo?.filter((todo) => todo.isCompleted === true);
    // const unMarkedTodo = user?.todo?.filter(
    //   (todo) => todo.isCompleted === false,
    // );
    let findMaxId = 0;
    user.todo.forEach((todo) => {
      findMaxId = Math.max(todo.id, findMaxId);
    });
    const newTodo = {
      id: findMaxId + 1,
      text: inputRef?.current?.value,
      isCompleted: false,
    };
    // user = { ...user, todo: [...unMarkedTodo, newTodo, ...markedTodo] };
    console.log("user", user);
    setUser((p) => ({ ...p, todo: [...p.todo, newTodo] }));
    // setData((prevState) => ({
    //   ...prevState,
    //   user,
    // }));
    inputRef.current.value = "";
    toast.success("Successfuly added new task!");
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="homepage">
        {/* <div className="todo"> */}
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
        {/* </div> */}
      </div>
      {/* <Footer /> */}
    </>
  );
}
