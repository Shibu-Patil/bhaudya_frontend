import React,{useEffect,useState} from 'react'
import axios from 'axios'

const CalculateSalary = () => {

const [employees,setEmployees]=useState([])
const [result,setResult]=useState(null)

const [data,setData]=useState({
employeeId:"",
month:"",
year:""
})


// ✅ Load Employees
const loadEmployees=async()=>{

try{

const res=await axios.get(
"http://localhost:5000/api/employee"
)

setEmployees(res.data.data || [])

}catch(err){
console.log(err)
}

}


useEffect(()=>{
loadEmployees()
},[])



// ✅ Handle Change
const handleChange=(e)=>{

const {name,value}=e.target

setData(prev=>({
...prev,
[name]:value
}))

}



// ✅ Calculate Salary
const calculate=async(e)=>{

e.preventDefault()

// ✅ Validation
if(!data.employeeId){
alert("Select Employee")
return
}

if(!data.month){
alert("Enter Month")
return
}

if(!data.year){
alert("Enter Year")
return
}

try{

const res=await axios.post(
"http://localhost:5000/api/salary/calculate",
{
employeeId:data.employeeId,
month:Number(data.month),
year:Number(data.year)
}
)

setResult(res.data)

}catch(err){

alert("Salary Calculation Failed")

console.log(err)

}

}



return(

<div className='p-5'>


<form
onSubmit={calculate}
className='bg-white shadow-2xl rounded-2xl p-5 flex gap-3 flex-wrap'
>


{/* Employee */}
<select
name="employeeId"
value={data.employeeId}
onChange={handleChange}
className='border p-2 rounded'
>

<option value="">
Select Employee
</option>

{
employees.map(emp=>(
<option key={emp._id} value={emp._id}>
{emp.name}
</option>
))
}

</select>



{/* Month */}
<input
type="number"
name="month"
placeholder="Month"
value={data.month}
onChange={handleChange}
className='border p-2 rounded'
min="1"
max="12"
/>



{/* Year */}
<input
type="number"
name="year"
placeholder="Year"
value={data.year}
onChange={handleChange}
className='border p-2 rounded'
/>



<button className='bg-green-600 text-white px-4 rounded'>
Calculate
</button>


</form>



{/* Result */}
{
result && (

<div className='bg-white mt-5 p-5 rounded-2xl shadow'>

<h1 className='text-xl font-bold mb-3'>

Total Salary :
₹ {result.totalSalary?.toFixed(2)}

</h1>


{
result.breakdown?.map((b,i)=>(

<div key={i} className='border p-3 mt-3 rounded'>

<h2 className='font-bold'>
Company : {b.company}
</h2>

<p>
Working Days : {b.workingDays}
</p>

<p>
Per Day : ₹{b.perDaySalary?.toFixed(2)}
</p>

<p>
Net Monthly : ₹{b.netMonthlySalary?.toFixed(2)}
</p>

<p className='font-bold'>
Salary : ₹{b.salary?.toFixed(2)}
</p>

</div>

))
}

</div>

)

}


</div>

)

}

export default CalculateSalary