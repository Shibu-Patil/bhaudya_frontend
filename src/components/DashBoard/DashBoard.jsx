import React, { useState } from 'react'
import Sidenav from './sideNav/Sidenav'
import { Outlet } from 'react-router-dom'

const DashBoard = () => {
  const [showNavBar,setShowNavBar]=useState(false)

  const handelMouseEnter=(e)=>{
    e.stopPropagation()
    setShowNavBar(true)
  }
  const handelCancel=(e)=>{
    e.stopPropagation()
    setShowNavBar(false)
  }
  return (
    <div className='h-screen w-screen relative'>
        <div className={` w-1/5 min-w-74 bg-black text-white fixed h-full duration-100 ${showNavBar?"left-0":"-left-70"}`} onMouseEnter={handelMouseEnter} onClick={handelMouseEnter}>
              <Sidenav showNavBar={showNavBar} handelCancel={handelCancel}></Sidenav>
        </div>
        <div className={`h-full  duration-100 absolute ${showNavBar?"mx-77 w-[calc(100%-308px)]":"mx-7 w-[calc(100%-28px)]"}`}>
              <Outlet></Outlet>
        </div>
    </div>
  )
}

export default DashBoard