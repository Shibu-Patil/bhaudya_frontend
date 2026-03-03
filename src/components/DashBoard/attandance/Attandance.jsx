import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../../../builders/Nav'

const Attendance = () => {

const arr = [

{ name: "Add Attendance", path: "/home/add-attandance" },

{ name: "Show Attendance", path: "/home/add-attandance/show-attandance" }

]

return (

<div className='size-full'>

<Nav arr={arr} />

<div className='w-full h-[calc(100%-64px)]'>

<Outlet />

</div>

</div>

)

}

export default Attendance