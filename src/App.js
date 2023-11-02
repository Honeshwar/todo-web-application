import { useEffect } from "react"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import { Home, SignIn, SignUp } from "./pages"
import "./styles.css"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate
} from "react-router-dom"

export default function App() {
  //create layout
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  }

  // create protected route
  const ProtectedRoute = ({ children }) => {
    const user = false
    const navigate = useNavigate()
    // useEffect(() => {
    if (!user) {
      navigate("/signin")
    }
    // }, [])
    return children
  }

  //create router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          )
        },
        { path: "/signin", element: <SignIn /> },
        { path: "/signup", element: <SignUp /> }
      ]
    }
  ])

  return <RouterProvider router={router}></RouterProvider>
}
