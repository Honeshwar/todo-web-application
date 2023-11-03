import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./SignUp.scss";
import { useRef, useState } from "react";
export default function SignUp() {
  const inputRef = useRef();
  const [visible, setVisible] = useState(
    inputRef.current?.type === "text" ? true : false,
  );
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
  return (
    <div className="signUp">
      <div className="signUpCard">
        <div className="left">
          <h1>SignUp</h1>
          <form action="" method="post" className="loginForm">
            <div className="inputItems">
              <input
                type="text"
                name=""
                id=""
                placeholder="Username"
                required
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
                ref={inputRef}
              />
              {visible ? (
                <AiOutlineEyeInvisible className="eyeIcon" onClick={ShowPassword} />
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
              />
              {visible ? (
                <AiOutlineEyeInvisible className="eyeIcon" onClick={ShowPassword} />
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
