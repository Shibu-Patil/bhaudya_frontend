import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({ arr }) => {
  return (
    <nav className='w-full bg-black h-16 text-white flex gap-5 justify-end items-center px-10'>

      {arr.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "bg-white text-black px-3 py-1 rounded"
              : "bg-transparent"
          }
          end
        >
          {item.name}
        </NavLink>
      ))}

    </nav>
  )
}

export default Nav
