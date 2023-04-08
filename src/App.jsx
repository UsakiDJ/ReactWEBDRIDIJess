import { useState } from 'react'
import {Outlet} from "react-router-dom"



export default function App() {
  const [count, setCount] = useState(0)

  return  (
   
      <div className=' h-screen bg-indigo-600'>
         <p>Hello world</p>
         <Outlet/>
      
      </div>
          )
}







