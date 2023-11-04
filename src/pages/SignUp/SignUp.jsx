import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./SignUp.scss";
import { useRef, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function SignUp() {
  const [users, setUsers] = useState({});
  const navigate = useNavigate();
  const inputRef = useRef();
  const [visible, setVisible] = useState(false);

  //form input
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    console.log(users);
    const userData = JSON.stringify(users); //for checking for empty
    if (userData === "{}") {
      const data = localStorage.getItem("users");
      console.log(data);
      if (data) {
        setUsers(data);
      }
    } else {
      //data
      localStorage.setItem("users", userData);
      navigate("/signin");
    }
  }, [users]);

  function ShowPassword() {
    var input1 = document.getElementById("pass");
    var input2 = document.getElementById("conPass");

    if (input1.type === "password") {
      input1.type = "text";
      input2.type = "text";
    } else {
      input1.type = "password";
      input2.type = "password";
    }
    setVisible((ps) => !ps);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password and confirm password does not Matched!");
      // toast notification
      return;
    }
    if (users?.user?.userName === userName) {
      //notification
      toast.error(`This UserName:${userName} is already Taken`);
      return;
    }
    const newUser = {
      id: 1,
      user: {
        id: 1,
        userName,
        password,
      },
      todo: [],
    };
    setUsers(newUser);
  };
  return (
    <div className="signUp">
      <div className="signUpCard">
        <div className="left">
          <h1>SignUp</h1>
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
            {/* <div className="inputItems">
              <input type="email" name="" id="" placeholder="Email" required />
            </div> */}
            <div className="inputItems">
              <input
                type="password"
                placeholder="Password"
                required
                id="pass"
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
            <div className="inputItems">
              <input
                type="password"
                placeholder="Confirm Password"
                id="conPass"
                required
                ref={inputRef}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
            <div className="signUpBtn">
              <button type="submit">SignUp</button>
            </div>
          </form>
        </div>
        <div className="right">
          <h1>To-DO Hub.</h1>
          <Link to="/signin">SignIn</Link>
        </div>
      </div>
    </div>
  );
}
