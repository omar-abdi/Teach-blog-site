import React from 'react'
import { Outlet } from 'react-router-dom'
function Dashbrod() {
  return (
    <div>
      <h1><Outlet/></h1>
    </div>
  )
}

export default Dashbrod
