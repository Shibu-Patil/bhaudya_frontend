import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ShowCompanies = () => {

const [companies,setCompanies] = useState([])


const loadCompanies = async ()=>{

 try{

 const res = await axios.get(
   "https://hr-backend-hlxf.onrender.com/api/company"
 )

 setCompanies(res.data.data)

 }catch(err){

 console.log(err)

 }

}


const deleteCompany = async(id)=>{

 try{

 await axios.delete(
   `https://hr-backend-hlxf.onrender.com/api/company/${id}`
 )

 loadCompanies()

 }catch(err){

 console.log(err)

 }

}


useEffect(()=>{

loadCompanies()

},[])



  return (

<div className='size-full p-5'>

<div className='bg-white shadow-2xl rounded-2xl p-5'>

<h1 className='text-2xl font-bold mb-5 text-center'>
Companies List
</h1>


<table className='w-full border'>

<thead>

<tr className='bg-gray-200'>

<th className='p-3'>Company Name</th>
<th className='p-3'>GST</th>
<th className='p-3'>Billing Cycle</th>
<th className='p-3'>Action</th>

</tr>

</thead>


<tbody>

{
companies.map((company)=>(
<tr
key={company._id}
className='border-t text-center'
>

<td className='p-3'>
{company.name}
</td>


<td className='p-3'>
{company.gst}
</td>


<td className='p-3'>
Day {company.billingCycleDate}
</td>


<td className='p-3'>

<button
onClick={()=>deleteCompany(company._id)}
className='bg-red-500 text-white px-3 py-1 rounded-lg'
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

</div>

  )
}

export default ShowCompanies