import { useState } from 'react'
import {Outlet} from "react-router-dom"

export default function Client() {
    const [count, setCount] = useState(0)
  
    return  (
     
        <div className=' h-screen bg-indigo-600'>
           <p>Client</p>
           <Outlet/>
        
        </div>
            )
  }