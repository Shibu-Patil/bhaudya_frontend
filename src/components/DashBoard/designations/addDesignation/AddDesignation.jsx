import React, { useEffect, useState } from 'react'
import axios from 'axios'
import InputBuilder from '../../../../builders/InputBuilder'

const AddDesignation = ({loadDesignations}) => {

const [designation,setDesignation] = useState({
 name:"",
 basePay:"",
 COMPANY:""
})

const [companies,setCompanies] = useState([])



const handelChange=(e)=>{

 const {name,value} = e.target

 setDesignation(prev=>({
  ...prev,
  [name]:value
 }))

}



const loadCompanies = async()=>{

 const res = await axios.get(
 "https://hr-backend-hlxf.onrender.com/api/company"
 )

 setCompanies(res.data.data)

}



useEffect(()=>{

loadCompanies()

},[])



const handelSubmit = async(e)=>{

e.preventDefault()

try{

await axios.post(
"https://hr-backend-hlxf.onrender.com/api/designation",
designation
)

alert("Designation Added")

setDesignation({
 name:"",
 basePay:"",
 COMPANY:""
})

loadDesignations()

}catch(err){

console.log(err)

}

}



return (

<form
onSubmit={handelSubmit}
className='bg-white shadow-2xl rounded-2xl p-5 flex flex-col gap-5'>

<h1 className='text-xl font-bold text-center'>
Add Designation
</h1>



<InputBuilder
type="text"
name="name"
val={designation.name}
handelChange={handelChange}
/>



<InputBuilder
type="number"
name="basePay"
val={designation.basePay}
handelChange={handelChange}
/>



<div className='border-b-2 h-10'>

<select
name="COMPANY"
value={designation.COMPANY}
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



<button className='bg-blue-600 text-white p-2 rounded-lg'>
Save Designation
</button>


</form>

)

}

export default AddDesignation