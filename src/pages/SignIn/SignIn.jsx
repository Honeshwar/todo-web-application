import { Link } from "react-router-dom";
import "./SignIn.scss";
export default function SignIn() {
  return (
    <div className="signIn">
      <div className="card">
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
            <div className="inputItems">
              <input
                type="password"
                name=""
                id=""
                placeholder="password"
                required
              />
            </div>
            <div className="btn">
              <button type="submit">SignIn</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
