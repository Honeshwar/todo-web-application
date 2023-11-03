import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import "./Navbar.scss";
export default function Navbar() {
  return (
    <div className="todo-navbar">
      <h1>
        <Link to="/" title="Go to Homepage">
          TO-Do Hub.
        </Link>
      </h1>
      <div className="right">
        <span title="you are john jeo">
          John jeo
          <BiUserCircle className="icon" />
        </span>
        <Link to="/" title="sign out your account">
          Signout
        </Link>
      </div>
    </div>
  );
}
