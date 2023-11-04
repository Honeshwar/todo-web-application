import { useEffect, useState } from "react";
import { Home, SignIn, SignUp } from "./pages";
import { Toaster } from "react-hot-toast";
import "./styles.scss";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Footer, Navbar } from "./components";

//Error component
const Error = () => {
  const navigate = useNavigate();
  //do side effect
  useEffect(() => {
    setTimeout(() => navigate("/"), 5000);
  }, []);
  return (
    <div className="pageNotFound">
      <img
        src="https://cdn.pixabay.com/photo/2017/06/08/17/32/not-found-2384304_640.jpg"
        alt="404 not found"
      />
    </div>
  );
};

// App component
export default function App() {
  //providing login session to user
  const [userSession, setUserSession] = useState(-1);
  useEffect(() => {
    const Session = JSON.parse(localStorage.getItem("userSession"));
    if (Session === null) {
      localStorage.setItem("userSession", false);
    } else if (userSession === -1) {
      //reload page, local already session ho ga
      setUserSession(JSON.parse(localStorage.getItem("userSession")));
    } else {
      localStorage.setItem("userSession", JSON.stringify(userSession));
    }
  }, [userSession]);

  //create layout
  const Layout = () => {
    return (
      <>
        <Toaster />
        <Navbar setUserSession={setUserSession} />
        <Outlet />
        <Footer />
      </>
    );
  };

  // create protected route
  const ProtectedRoute1 = ({ children }) => {
    const navigate = useNavigate();
    useEffect(() => {
      if (!userSession || userSession === -1) {
        navigate("/signin");
      }
    }, [userSession]);
    return children;
  };
  const ProtectedRoute2 = ({ children }) => {
    const navigate = useNavigate();
    useEffect(() => {
      if (userSession && userSession !== -1) {
        navigate("/");
      }
    }, [userSession]);
    return children;
  };

  //create router
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error />,
      element: (
        <ProtectedRoute1>
          <Layout />
        </ProtectedRoute1>
      ),
      children: [{ path: "/", element: <Home /> }], ///profile,...
    },
    {
      path: "/signin",
      element: (
        <ProtectedRoute2>
          <Toaster />
          <SignIn setUserSession={setUserSession} />
        </ProtectedRoute2>
      ),
    },
    {
      path: "/signup",
      element: (
        <ProtectedRoute2>
          <Toaster />
          <SignUp />
        </ProtectedRoute2>
      ),
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
