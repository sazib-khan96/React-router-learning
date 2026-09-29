import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Project from "./Components/Project/Project.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Root from "./Components/Root/Root.jsx";
import AboutMe from "./Components/About_me/AboutMe.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Tab1 from "./Components/Servise/tab1.jsx";
import Tab2 from "./Components/Servise/tab2.jsx";
import Tab3 from "./Components/Servise/tab3.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>, // Header/Navbar সবার উপরে স্থায়ী থাকবে
    children: [
      {
        path:'/', // ওয়েবসাইট চালু করলে ডিফল্টভাবে এই Home পেজটি দেখাবে
        element: <Home/>,
        children:[
          { path : 'aboutme', element:<AboutMe></AboutMe>},
          {path: 'tab1', element: <Tab1></Tab1>},
          {path : 'tab2', element : <Tab2></Tab2>},
          {path: 'tab3', element :<Tab3></Tab3>}
          
        ]
      },
      {
        path: "about", // URL: /about
        element: <About/>,
      },
      {
        path: "project", // URL: /projects
        element: <Project/>,
      },
      {
        path: "contact", // URL: /contact
        element: <Contact/>,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
