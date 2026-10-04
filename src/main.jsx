import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Root from "./Component/Root/Root";
import Home from "./Pages/Home";
import Faq from "./Pages/Faq";
import Help from "./Pages/Help";
import Contact from "./Pages/Contact";



// Create A Root file
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index : true, Component: Home },
      { path: "about", Component: About},
      { path: "products", 
        loader: ()=> fetch('https://dummyjson.com/products'),
        Component: Product },
      { path: "faq", Component: Faq },
      { path: "help", Component: Help},
      { path: "contact", Component: Contact},
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
