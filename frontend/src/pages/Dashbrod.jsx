import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
function Dashbrod() {
  return (
    <div className='flex relative'>
    <Sidebar/>
      <div className=' felx flex-1 p-3'>
    <Outlet/>
    </div>
    </div>
  
  )
}

export default Dashbrod
