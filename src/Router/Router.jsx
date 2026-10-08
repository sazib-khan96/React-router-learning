import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import Help from "../Pages/Help/Help";
import RankBoosting from '../Pages/RankBoosting/RankBoosting'
import SingalPost from '../Components/SingalPost/SingalPost'


const posts = fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())



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
        loader: () => posts,
        Component:Blogs
      },
      {
        path:'/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component:SingalPost
      },
      {
        path:'help',
        Component:Help
      },
      {
        path:'Rank Boosting',
        Component: RankBoosting,
      }
    ],
  },
]);
export default router;