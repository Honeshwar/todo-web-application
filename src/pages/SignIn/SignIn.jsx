import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./SignIn.scss";
import toast, { Toaster } from "react-hot-toast";

export default function SignIn({ setUserSession }) {
  const [data, setData] = useState({});
  const [visible, setVisible] = useState(false);
  function ShowPassword() {
    var input = document.getElementById("password");

    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
    setVisible((ps) => !ps);
  }
  useEffect(() => {
    //first setup m
    if (localStorage.getItem("toastShownOnSignOut") === null) {
      toast.success("Successfully SignOut");
      localStorage.setItem("toastShownOnSignOut", "false");
      localStorage.setItem("toastShownHome", "true"); // Set the flag in localStorage
    } else if (localStorage.getItem("toastShownOnSignOut") === "true")
      toast.success("Successfully SignOut");
    localStorage.setItem("toastShownOnSignOut", "false");
    localStorage.setItem("toastShownHome", "true");
  }, []);
  useEffect(() => {
    //data:[{user:{},todo:[]}]
    console.log(data);
    const data = localStorage.getItem("users");
    console.log(JSON.parse(data));
    if (data) {
      setData(JSON.parse(data));
    }
  }, []);

  //form input
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(data);
    // const findUserData = data?.find((data) => data.user.userName === userName);
    if (data?.user?.userName !== userName) {
      //notification
      toast.error("User with this name does not exist!");
      return;
    }
    if (data?.user?.password !== password) {
      toast.error("Invalid userName/Password!");
      // toast notification
      return;
    }
    setUserSession(true);
  };

  return (
    <div className="signIn">
      <div className="signInCard">
        <div className="left">
          <h1>To-Do World.</h1>
          <p>
            A to-do app is like a personal task manager that helps you stay
            organized, manage your tasks, and boost your productivity. It keeps
            track of what you need to do and helps you get things done
            efficiently.
          </p>
          <p>Do you have an account ?</p>
          <Link to="/signup">Register</Link>
        </div>
        <div className="right">
          <h1>SignIn</h1>
          <Toaster />
          <form onSubmit={submitHandler} className="loginForm">
            <div className="inputItems">
              <input
                type="text"
                placeholder="Username"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="inputItems">
              <input
                type="password"
                placeholder="password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              {visible ? (
                <AiOutlineEyeInvisible
                  className="eyeIcon"
                  onClick={ShowPassword}
                />
              ) : (
                <AiOutlineEye className="eyeIcon" onClick={ShowPassword} />
              )}
            </div>
            <div className="signInBtn">
              <button type="submit">SignIn</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
