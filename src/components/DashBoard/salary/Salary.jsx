import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../../../builders/Nav'

const Salary = () => {

const arr = [

{ name:"Add Salary", path:"/home/salary" },

{ name:"Show Salary", path:"/home/salary/show-salary" },

{ name:"Calculate Salary", path:"/home/salary/calculate-salary" }

]

return (

<div className='size-full'>

<Nav arr={arr}/>

<div className='w-full h-[calc(100%-64px)]'>

<Outlet/>

</div>

</div>

)

}

export default Salary