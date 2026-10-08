import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import Help from "../Pages/Help/Help";



 const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element:<Home></Home>,
      },
      {
        path :'about',
        Component:About
      },
      {
        path:'blogs',
        Component:Blogs
      },
      {
        path:'help',
        Component:Help
      }
    ],
  },
]);
export default router;