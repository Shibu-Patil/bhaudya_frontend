import React, { useEffect, useState } from 'react'
import axios from 'axios'
import InputBuilder from '../../../../builders/InputBuilder'


const AddEmployee = ({loadEmployees}) => {

const [employee,setEmployee] = useState({
 name:"",
 phone:"",
 COMPANY:"",
 DESIGNATION:""
})

const [companies,setCompanies] = useState([])
const [designations,setDesignations] = useState([])



const handelChange=(e)=>{

const {name,value} = e.target

setEmployee(prev=>({
 ...prev,
 [name]:value
}))

}



const loadCompanies = async()=>{

const res = await axios.get(
"http://localhost:5000/api/company"
)

setCompanies(res.data.data)

}



const loadDesignations = async(companyId)=>{

const res = await axios.get(
`http://localhost:5000/api/designation/company/${companyId}`
)

setDesignations(res.data.data)

}



useEffect(()=>{
 loadCompanies()
},[])



useEffect(()=>{

if(employee.COMPANY){
 loadDesignations(employee.COMPANY)
}

},[employee.COMPANY])



const handelSubmit = async(e)=>{

e.preventDefault()

await axios.post(
"http://localhost:5000/api/employee",
employee
)

alert("Employee Added")

setEmployee({
 name:"",
 phone:"",
 COMPANY:"",
 DESIGNATION:""
})

loadEmployees()

}



return (

<form
onSubmit={handelSubmit}
className='bg-white shadow-2xl rounded-2xl p-5 flex flex-col gap-5'>

<h1 className='text-xl font-bold text-center'>
Add Employee
</h1>



<InputBuilder
type="text"
name="name"
val={employee.name}
handelChange={handelChange}
/>



<InputBuilder
type="text"
name="phone"
val={employee.phone}
handelChange={handelChange}
/>



<div className='border-b-2 h-10'>

<select
name="COMPANY"
value={employee.COMPANY}
onChange={handelChange}
className='size-full outline-0'
>

<option value="">
Select Company
</option>

{
companies.map(c=>(
<option key={c._id} value={c._id}>
{c.name}
</option>
))
}

</select>

</div>



<div className='border-b-2 h-10'>

<select
name="DESIGNATION"
value={employee.DESIGNATION}
onChange={handelChange}
className='size-full outline-0'
>

<option value="">
Select Designation
</option>

{
designations.map(d=>(
<option key={d._id} value={d._id}>
{d.name}
</option>
))
}

</select>

</div>



<button className='bg-blue-600 text-white p-2 rounded-lg'>
Save Employee
</button>

</form>

)

}

export default AddEmployee