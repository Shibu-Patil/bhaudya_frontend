import React, {useEffect,useState} from 'react'
import axios from 'axios'
import InputBuilder from '../../../../builders/InputBuilder'

const AddSalary = () => {

const [salary,setSalary] = useState({

EMPLOYEE:"",
COMPANY:"",
components:[]
})

const [employees,setEmployees] = useState([])
const [companies,setCompanies] = useState([])



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



const addComponent=()=>{

setSalary(prev=>({

...prev,

components:[
...prev.components,
{name:"",amount:"",type:"EARNING"}
]

}))

}



const handleComponentChange=(e,index)=>{

const {name,value} = e.target

const updated=[...salary.components]

updated[index][name]=value

setSalary(prev=>({
...prev,
components:updated
}))

}



const handelChange=(e)=>{

const {name,value} = e.target

setSalary(prev=>({
...prev,
[name]:value
}))

}



const handelSubmit=async(e)=>{

e.preventDefault()

await axios.post(
"https://hr-backend-hlxf.onrender.com/api/salary",
salary
)

alert("Salary Structure Saved")

}



return (

<form
onSubmit={handelSubmit}
className='bg-white shadow-2xl rounded-2xl p-5 flex flex-col gap-4 m-5'
>

<h1 className='text-xl font-bold text-center'>
Add Salary Structure
</h1>


{/* Employee */}

<select
name="EMPLOYEE"
value={salary.EMPLOYEE}
onChange={handelChange}
className='border-b-2 h-10'
>

<option>Select Employee</option>

{
employees.map(e=>(
<option key={e._id} value={e._id}>
{e.name}
</option>
))
}

</select>


{/* Company */}

<select
name="COMPANY"
value={salary.COMPANY}
onChange={handelChange}
className='border-b-2 h-10'
>

<option>Select Company</option>

{
companies.map(c=>(
<option key={c._id} value={c._id}>
{c.name}
</option>
))
}

</select>



<h2 className='font-bold'>
Components
</h2>


{
salary.components.map((c,i)=>(

<div key={i} className='flex gap-2'>

<input
name="name"
placeholder="Component"
value={c.name}
onChange={(e)=>handleComponentChange(e,i)}
className='border p-2 flex-1'
/>


<input
name="amount"
placeholder="Amount"
value={c.amount}
onChange={(e)=>handleComponentChange(e,i)}
className='border p-2 flex-1'
/>


<select
name="type"
value={c.type}
onChange={(e)=>handleComponentChange(e,i)}
className='border p-2'
>

<option value="EARNING">
Earning
</option>

<option value="DEDUCTION">
Deduction
</option>

</select>


</div>

))
}



<button
type="button"
onClick={addComponent}
className='bg-gray-500 text-white p-2 rounded'
>

Add Component

</button>



<button
className='bg-blue-600 text-white p-2 rounded'
>

Save Salary

</button>


</form>

)

}

export default AddSalary