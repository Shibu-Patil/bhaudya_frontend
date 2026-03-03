import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ShowEmployees = () => {

const [employees,setEmployees] = useState([])


const loadEmployees = async ()=>{

 const res = await axios.get(
 "http://localhost:5000/api/employee"
 )

 setEmployees(res.data.data)

}


useEffect(()=>{
 loadEmployees()
},[])



const deleteEmployee = async(id)=>{

 await axios.delete(
 `http://localhost:5000/api/employee/${id}`
 )

 loadEmployees()

}



return (

<div className='bg-white shadow-2xl rounded-2xl p-5 m-5'>

<h1 className='text-xl font-bold mb-5'>
Employees
</h1>


<table className='w-full border'>

<thead>

<tr className='bg-gray-200'>

<th>Name</th>
<th>Phone</th>
<th>Company</th>
<th>Designation</th>
<th>Action</th>

</tr>

</thead>


<tbody>

{
employees.map(e=>(

<tr key={e._id} className='text-center border'>

<td>{e.name}</td>

<td>{e.phone}</td>

<td>
{e.COMPANY?.name}
</td>

<td>
{e.DESIGNATION?.name || "-"}
</td>

<td>

<button
onClick={()=>deleteEmployee(e._id)}
className='bg-red-500 text-white px-3 py-1 rounded'
>

Delete

</button>

</td>

</tr>

))
}

</tbody>

</table>


</div>

)

}

export default ShowEmployees