import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Nav from '../../../builders/Nav'

const Company = () => {
  const arr = [
  { name: "Add Companies", path: "/home" },
  { name: "Show Companies", path: "/home/show-companies" }
];

  return (
    <div className='size-full'>

      <Nav arr={arr} ></Nav>
      <div className='w-full h-[calc(100%-64px)]'>
        <Outlet />
      </div>
    </div>
  )
}

export default Company
