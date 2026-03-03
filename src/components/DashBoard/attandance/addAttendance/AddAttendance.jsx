import React, { useEffect, useState } from 'react'
import axios from 'axios'
import InputBuilder from '../../../../builders/InputBuilder'

const AddAttendance = ({loadAttendance}) => {

const [attendance,setAttendance] = useState({
 date:"",
 status:"",
 EMPLOYEE:"",
 COMPANY:""
})

const [employees,setEmployees] = useState([])
const [companies,setCompanies] = useState([])


const handelChange=(e)=>{

 const {name,value} = e.target

 setAttendance(prev=>({
  ...prev,
  [name]:value
 }))

}



const loadEmployees = async()=>{

 const res = await axios.get(
 "https://hr-backend-hlxf.onrender.com/api/employee"
 )

 setEmployees(res.data.data)

}



const loadCompanies = async()=>{

 const res = await axios.get(
 "https://hr-backend-hlxf.onrender.com/api/company"
 )

 setCompanies(res.data.data)

}



useEffect(()=>{
 loadEmployees()
 loadCompanies()
},[])



const handelSubmit = async(e)=>{

e.preventDefault()

await axios.post(
"https://hr-backend-hlxf.onrender.com/api/attendance",
attendance
)

alert("Attendance Added")

setAttendance({
 date:"",
 status:"",
 EMPLOYEE:"",
 COMPANY:""
})

}



return (

<form
onSubmit={handelSubmit}
className='bg-white shadow-2xl rounded-2xl p-5 flex flex-col gap-5 m-5'
>

<h1 className='text-xl font-bold text-center'>
Add Attendance
</h1>


<InputBuilder
type="date"
name="date"
val={attendance.date}
handelChange={handelChange}
/>



{/* STATUS */}

<div className='border-b-2 h-10'>

<select
name="status"
value={attendance.status}
onChange={handelChange}
className='size-full outline-0'
>

<option value="">
Select Status
</option>

<option value="PRESENT">Present</option>
<option value="ABSENT">Absent</option>
<option value="HALF_DAY">Half Day</option>
<option value="LEAVE">Leave</option>

</select>

</div>



{/* COMPANY */}

<div className='border-b-2 h-10'>

<select
name="COMPANY"
value={attendance.COMPANY}
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



{/* EMPLOYEE */}

<div className='border-b-2 h-10'>

<select
name="EMPLOYEE"
value={attendance.EMPLOYEE}
onChange={handelChange}
className='size-full outline-0'
>

<option value="">
Select Employee
</option>

{
employees.map(e=>(
<option key={e._id} value={e._id}>
{e.name}
</option>
))
}

</select>

</div>



<button className='bg-blue-600 text-white p-2 rounded-lg'>
Save Attendance
</button>


</form>

)

}

export default AddAttendance