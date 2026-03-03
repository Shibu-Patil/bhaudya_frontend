import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../../../builders/Nav'

const Employess = () => {

const arr = [

{ name:"Add Employee", path:"/home/emp" },

{ name:"Show Employees", path:"/home/emp/show-emp" }

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

export default Employess