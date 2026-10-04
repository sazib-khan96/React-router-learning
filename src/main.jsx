import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Root from "./Component/Root/Root";
import Home from "./Component/Pages/Home";
import Updates from "./Component/Pages/Updates";
import Postes from './Component/Pages/Postes'
import Addnew from './Component/Pages/Addnew'
import Categories from "./Component/Pages/Categories";
import Settings from "./Component/Pages/Settings";



const router = createBrowserRouter([
  {path:'/', element: <Root></Root>,
    children:[
      {index:true, element:<Home></Home> },
      {path : 'updates', element : <Updates></Updates>},
      {path: 'postes' ,element: <Postes></Postes>},
      {path: 'addnew' ,element: <Addnew></Addnew>},
      {path: 'categories' ,element: <Categories></Categories>},
      {path: 'settings' ,element: <Settings></Settings>},
      
    ]
    
   }
])



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router ={router}></RouterProvider>
  </StrictMode>,
);
