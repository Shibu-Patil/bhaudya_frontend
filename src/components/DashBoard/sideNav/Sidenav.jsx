import React from 'react'
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { NavLink } from 'react-router-dom';


const Sidenav = ({showNavBar,handelCancel}) => {
  // const allLinks=[
  //   {
  //     componentName:"Add Companies",
  //     path:"/home"
  //   },    {
  //     componentName:"Show Companies",
  //     path:"/home/show-companies"
  //   },    {
  //     componentName:"Add Employess",
  //     path:"/add-emp"
  //   },    {
  //     componentName:"Show Employees",
  //     path:"/show-emp"
  //   },  {
  //     componentName:"Add Designation",
  //     path:"/add-des"
  //   },
  //  {
  //     componentName:"Add Attandance",
  //     path:"/add-attandance"
  //   },
  // ]


    const allLinks=[
    {
      componentName:"Companies",
      path:"/home"
    },    {
      componentName:"Employess",
      path:"/home/emp"
    },     {
      componentName:" Designation",
      path:"/home/add-des"
    },
   {
      componentName:"Attandance",
      path:"/home/add-attandance"
    },
       {
      componentName:"Salary",
      path:"/home/salary"
    },
  ]
  return (
    <div className={`size-full  p-4`}>

            <div className='size-full relative'>
              {/* button  */}
                <div className={`absolute size-10  rounded-bl-xl -right-4 z-10  duration-100 ${showNavBar?"-top-4 bg-black":"top-1/2 bg-red-500"} text-xl flex justify-center items-center text-black`}>

                {
                  showNavBar?  <IoMdCloseCircleOutline className='text-red-600 text-3xl' onClick={handelCancel}/>: <FaArrowRightFromBracket className={`animate-moveSide`}/>
                }
                </div>
             {
              showNavBar && <>
                   {/* company logo and details  */}
                <div  className='h-1/3 w-full '>
                      <div className='w-full flex flex-col gap-5'>
                          <img src="/Logo.png" alt="" className='drop-shadow-2xl drop-shadow-amber-50'/>
                          <h1 className='flex justify-center  font-bold font-shubham'>Aditya Security Services</h1>
                      </div>
                </div>

                {/* allMenus  */}

                <div className='w-full h-2/3 justify-start mt-18 p-3 flex flex-col gap-3'>
                      {
                        allLinks.map((comp)=><div key={comp.path} className='h-10 rounded-2xl '>
                            <NavLink to={comp.path} className={({isActive})=>`${isActive?"bg-[#666] text-sky-300 scale-105 font-bold shadow-[1px_1px_2px_0.5px_oklch(82.8%_0.111_230.318)]":"bg-[#333] p-1"} size-full rounded-2xl flex justify-center items-center duration-75`} end>{comp.componentName}</NavLink>
                        </div>)
                      }
                </div>
              </>
             }
            </div>
    </div>
  )
}

export default Sidenav
