import React from 'react'

const InputBuilder = ({type,name,val,handelChange,children,handelClick=null}) => {
  return (

    <div className={`w-full h-10 duration-75   px-2 relative focus-within:border-2 focus-within:rounded-lg group ${val?"rounded-lg border-2":"border-b-2 rounded-none"}`}>
        <label htmlFor={name} className={`p-1 duration-75 capitalize absolute group-has-focus-within:-top-3.5 group-has-focus-within:bg-white group-has-focus-within:text-xs ${val?"-top-3.5 text-xs bg-white":"top-1.5 bg-transparent text-md "}`}>{name}</label>
            <div className='flex size-full items-center'>
                <input type={type} name={name} id={name} className='size-full outline-0' value={val} onChange={handelChange}/>
                <div onClick={handelClick}>
                    {
                        children
                    }
                </div>
             </div>
     </div>

  )
}

export default InputBuilder