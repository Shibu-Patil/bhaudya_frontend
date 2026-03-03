import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ShowAttendance = () => {

const [attendance,setAttendance] = useState([])



const loadAttendance = async()=>{

 const res = await axios.get(
 "https://hr-backend-hlxf.onrender.com/api/attendance"
 )

 setAttendance(res.data.data)

}


useEffect(()=>{
 loadAttendance()
},[])



const deleteAttendance = async(id)=>{

 await axios.delete(
 `https://hr-backend-hlxf.onrender.com/api/attendance/${id}`
 )

 loadAttendance()

}



return (

<div className='bg-white shadow-2xl rounded-2xl p-5 m-5'>

<h1 className='text-xl font-bold mb-5'>
Attendance
</h1>


<table className='w-full border'>

<thead>

<tr className='bg-gray-200'>

<th>Date</th>
<th>Status</th>
<th>Employee</th>
<th>Company</th>
<th>Action</th>

</tr>

</thead>


<tbody>

{
attendance.map(a=>(

<tr key={a._id} className='text-center border'>

<td>
{new Date(a.date).toLocaleDateString()}
</td>

<td>
{a.status}
</td>

<td>
{a.EMPLOYEE?.name}
</td>

<td>
{a.COMPANY?.name}
</td>

<td>

<button
onClick={()=>deleteAttendance(a._id)}
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

export default ShowAttendance