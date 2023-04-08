import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Client from './client';
import './index.css'
import Root from './routes/root'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    
    
    children: [
      {
        path: "/test",
        element: <App/>,
        
      },

      {
        path: "/ok",
        element: <p> Ok</p>,
      },
    
      {
        path: "/client",
        element: <Client/>,
      },

   
        {
        path: "/mok",
        element: <p> mOk</p>,
      },

 

      {
        path: "/pok",
        element: <p> pok</p>,
      },


    ],











  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>,
)
