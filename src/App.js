import { useEffect } from "react";
import { Home, SignIn, SignUp } from "./pages";
import "./styles.scss";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Footer, Navbar } from "./components";

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
export default function App() {
  //create layout
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  // create protected route
  const ProtectedRoute1 = ({ children }) => {
    const user = false;
    const navigate = useNavigate();
    useEffect(() => {
      if (!user) {
        navigate("/signin");
      }
    }, []);
    return children;
  };
  const ProtectedRoute2 = ({ children }) => {
    const user = false;
    const navigate = useNavigate();
    useEffect(() => {
      if (user) {
        navigate("/");
      }
    }, []);
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
          <SignIn />
        </ProtectedRoute2>
      ),
    },
    {
      path: "/signup",
      element: (
        <ProtectedRoute2>
          <SignUp />
        </ProtectedRoute2>
      ),
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
