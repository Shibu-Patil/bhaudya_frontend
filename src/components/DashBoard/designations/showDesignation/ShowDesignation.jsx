import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ShowDesignation = () => {

const [designations,setDesignations] = useState([])



const loadDesignations = async()=>{

 const res = await axios.get(
 "https://hr-backend-hlxf.onrender.com/api/designation"
 )

 setDesignations(res.data.data)

}



const deleteDesignation = async(id)=>{

await axios.delete(
`https://hr-backend-hlxf.onrender.com/api/designation/${id}`
)

loadDesignations()

}



useEffect(()=>{

loadDesignations()

},[])



return (

<div className='bg-white shadow-2xl rounded-2xl p-5'>

<h1 className='text-2xl font-bold text-center mb-5'>
Designations List
</h1>


<table className='w-full border'>

<thead>

<tr className='bg-gray-200'>

<th className='p-3'>Name</th>
<th className='p-3'>Base Pay</th>
<th className='p-3'>Company</th>
<th className='p-3'>Action</th>

</tr>

</thead>


<tbody>

{
designations.map(d=>(

<tr
key={d._id}
className='border-t text-center'
>

<td className='p-3'>
{d.name}
</td>


<td className='p-3'>
₹ {d.basePay}
</td>


<td className='p-3'>
{d.COMPANY?.name}
</td>


<td className='p-3'>

<button
onClick={()=>deleteDesignation(d._id)}
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

export default ShowDesignation