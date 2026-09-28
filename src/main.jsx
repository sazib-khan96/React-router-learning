import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";


const route = createBrowserRouter([
  {
    path:'/',
    element:<div>
      <h1>hello Woprld</h1>
    </div>
  },
  {
    path:'about',
    element:<div>
      <h1>about me</h1>
    </div>
  },
  {
    path:'project',
    element:<div>
      <h1>Project</h1>
    </div>
  },
  {
    path:'app',
    Component:App
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
