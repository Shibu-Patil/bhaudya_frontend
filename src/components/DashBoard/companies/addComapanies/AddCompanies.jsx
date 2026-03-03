import React, { useState } from 'react'
import InputBuilder from '../../../../builders/InputBuilder'
import axios from 'axios'

const AddCompanies = () => {

  const [company,setCompany] = useState({
    name:"",
    gst:"",
    billingCycleDate:""
  })


  const handelChange = (e)=>{
    const {name,value} = e.target

    setCompany((prev)=>({
      ...prev,
      [name]:value
    }))
  }


  const handelSubmit = async (e)=>{
    e.preventDefault()

    try{

      await axios.post(
        "https://hr-backend-hlxf.onrender.com/api/company",
        {
              name:company.name,
              gst:company.gst,
              billingCycleDate:Number(company.billingCycleDate .toString().replace("-"))
         
        }
      )

      alert("Company Added Successfully")

      setCompany({
        name:"",
        gst:"",
        billingCycleDate:""
      })

    }catch(err){

      console.log(err)

    }
  }



  return (
    <div className='size-full flex justify-center items-center'>

      <form
      onSubmit={handelSubmit}
      className='w-1/2 bg-white shadow-2xl rounded-2xl flex flex-col gap-5 p-5'>

        <div className='w-full h-10 flex justify-center items-center'>
            <h1 className='text-2xl font-bold font-shubham'>
              Add Companies
            </h1>
        </div>


        <InputBuilder
        type="text"
        name="name"
        val={company.name}
        handelChange={handelChange}
        />


        <InputBuilder
        type="text"
        name="gst"
        val={company.gst}
        handelChange={handelChange}
        />


        <InputBuilder
        type="date"
        name="billingCycleDate"
        val={company.billingCycleDate}
        handelChange={handelChange}
        />


        <button className='bg-blue-600 text-white p-2 rounded-lg'>
          Save Company
        </button>

      </form>

    </div>
  )
}

export default AddCompanies