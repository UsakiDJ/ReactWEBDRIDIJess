import * as React from "react";
import { useState } from "react";
import {
  Link,
  Outlet,
} from "react-router-dom";




export default function Root(){

  const [count, setCount] = useState(0)

  return  (
    <div className=" flex-row box-content justify-start mr-auto">
      <div className=" h bg-zinc-200 flex-col">
        <h1 className="text-3xl font-bold mr-4 sm:text-4xl text-center">JEMA.</h1>
          
          <nav>
            <ul className='flex justify-between font-bold font-sans'>
              <Link to="/test" className="w-1/5 text-center border hover:bg-blue-400 bg-opacity-100 hover:rounded-lg"><li className='mr-5'>Test</li></Link>
              <Link to="/client" className="w-1/5 text-center border hover:bg-blue-400 bg-opacity-100 hover:rounded-lg"><li className='mr-5'>Client</li></Link>
              <Link to="/mok" className="w-1/5 text-center border hover:bg-blue-400 bg-opacity-100 hover:rounded-lg"><li className='mr-5'>Revenue</li></Link>
              <Link to="/pok" className="w-1/5 text-center border hover:bg-blue-400 bg-opacity-100 hover:rounded-lg"><li className='mr-5'>Par formation</li></Link>
              <Link to="/ok" className="w-1/5 text-center border hover:bg-blue-400 bg-opacity-100 hover:rounded-lg"><li className='mr-5'>Client</li></Link>
            </ul>  
          </nav> 
       <Outlet/>   
      </div>
    </div>
          )

}
