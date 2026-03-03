import React,{useEffect,useState} from 'react'
import axios from 'axios'

const ShowSalary = () => {

const [salary,setSalary]=useState([])


const loadSalary=async()=>{

const res=await axios.get(
"http://localhost:5000/api/salary"
)

setSalary(res.data.data)

}


useEffect(()=>{
loadSalary()
},[])



const deleteSalary=async(id)=>{

await axios.delete(
`http://localhost:5000/api/salary/${id}`
)

loadSalary()

}



return(

<div className='bg-white shadow-2xl rounded-2xl p-5 m-5'>

<h1 className='text-xl font-bold mb-5'>
Salary Structures
</h1>


<table className='w-full border'>

<thead>

<tr className='bg-gray-200'>

<th>Employee</th>
<th>Company</th>
<th>Components</th>
<th>Action</th>

</tr>

</thead>


<tbody>

{
salary.map(s=>(

<tr key={s._id} className='text-center border'>

<td>
{s.EMPLOYEE?.name}
</td>

<td>
{s.COMPANY?.name}
</td>

<td>

{
s.components.map((c,i)=>(
<div key={i}>
{c.name} - {c.amount} ({c.type})
</div>
))
}

</td>

<td>

<button
onClick={()=>deleteSalary(s._id)}
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

export default ShowSalary