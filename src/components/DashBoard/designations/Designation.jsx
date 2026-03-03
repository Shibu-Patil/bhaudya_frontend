import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../../../builders/Nav'

const Designation = () => {

const arr = [

{ name: "Add Designation", path: "/home/add-des" },

{ name: "Show Designation", path: "/home/add-des/show-designation" }

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

export default Designation