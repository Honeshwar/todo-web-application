import { useEffect, useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Navbar, Footer, Task } from "../../components";
import "./Home.scss";

export default function Home() {
  const [data, setData] = useState(-1);

  useEffect(() => {
    if (localStorage.getItem("toastShownHome") === null) {
      toast.success("Successfully SignIN");
      localStorage.setItem("toastShownHome", "false"); // Set the flag in localStorage
      localStorage.setItem("toastShownOnSignOut", "true");
    } else if (localStorage.getItem("toastShownHome") === "false") {
      localStorage.setItem("toastShownHome", "false"); // Set the flag in localStorage
      localStorage.setItem("toastShownOnSignOut", "true");
    } else if (localStorage.getItem("toastShownHome") === "true") {
      toast.success("Successfully SignIN");
      localStorage.setItem("toastShownHome", "false"); // Set the flag in localStorage
      localStorage.setItem("toastShownOnSignOut", "true");
    }
  }, []);

  useEffect(() => {
    if (data === -1) {
      const userData = localStorage.getItem("users"); //userData
      const userDATA = JSON.parse(userData);
      //separate/ move to last isComplete todo
      const markedTodo = userDATA?.todo?.filter(
        (todo) => todo.isComplete === true,
      );
      const unMarkedTodo = userDATA?.todo?.filter(
        (todo) => todo.isComplete === false,
      );

      setData({ ...userDATA, todo: [...unMarkedTodo, ...markedTodo] });
    } else {
      localStorage.setItem("users", JSON.stringify(data));
    }
  }, [data]);

  console.log(data);
  // const [todoText, setTodoText] = useState("");
  const inputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault(); //by default submit action remove current clcik k liya
    // console.log(inputRef?.current?.value);
    // return;
    //separate/ move to last isComplete todo
    const markedTodo = data?.todo?.filter((todo) => todo.isComplete === true);
    const unMarkedTodo = data?.todo?.filter(
      (todo) => todo.isComplete === false,
    );
    const newTodo = {
      id: data?.todo?.length + 1,
      text: inputRef?.current?.value,
      isComplete: false,
    };
    setData((prevState) => ({
      ...prevState,
      todo: [...unMarkedTodo, newTodo, ...markedTodo],
    }));
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
          {data?.todo?.map((task, index) => (
            <Task task={task} data={data} setData={setData} key={index} />
          ))}
          {data?.todo?.length === 0 && (
            <span>Tasks will be display here...</span>
          )}
        </div>
        {/* </div> */}
      </div>
      {/* <Footer /> */}
    </>
  );
}
