import { Children, StrictMode, Suspense } from "react";
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
import User from "./Pages/User";
import General from "./Pages/General";
import { Heading1 } from "lucide-react";
import Postes from "./Pages/Postes";

const userData = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())


// Loading for suspense 
const loading = <div>
  <h1>Data is Loading.........</h1>
</div>
// Create A Root file
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index : true,
         Component: Home },

      { path: "about",
         Component: About},

      { path: "products", 
        loader: ()=> fetch('https://dummyjson.com/products'),
        Component: Product },

      { path: "faq", 
        Component: Faq ,
        children: [
          {path: 'general' ,Component : General}
        ]
      },

      { path: "help", 
        Component: Help},

      { path: "contact",
         Component: Contact},

      {path : 'user',
        element:(
          <Suspense fallback={loading}>
            <User userData={userData}></User>
          </Suspense>
        )
      },
      {path:'post',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Postes
      },
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
