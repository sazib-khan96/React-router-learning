import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Root from "./Components/Root/Root";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router/dom";
import Project from "./Components/Project/Project";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Users from "./Components/Users/Users";
import Form from "./Form/Form";

const loaderData = async () => {
  const user = await fetch("https://jsonplaceholder.typicode.com/users");
  return user.json();
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "about", element: <About></About> },
      { path: "project", element: <Project></Project> },
      { path: "users",
         loader: loaderData,
          element: <Users></Users> },
      { path: "form", element: <Form></Form> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
