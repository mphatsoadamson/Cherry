import React from 'react'

const AccountSettings = () => {
  return (
    <div className= 'flex flex-col items-center w-full'>
      <h1 className = 'text-crimson text-[30px] font-[350] py-[5px] px-[10px] mt-2.5'>Personal Information</h1>
    
        <div className = 'form flex flex-row flex-wrap justify-between w-full'>
          <div className = 'flex flex-col w-[45%] m-[10px]'>
            <label htmlFor='name' className='text-[1.2rem] font-light mb-[5px]'>Your Name<span>*</span></label>
            <input type = 'text' name = 'name' id= 'name' className='py-2.5 px-5 focus:border-crimson border border-gray-300 rounded outline-none'/>
          </div>

          <div className = 'flex flex-col w-[45%] m-[10px]'>
            <label htmlFor='phone' className='text-[1.2rem] font-light mb-[5px]'>Phone/Mobile<span>*</span></label>
            <input type = 'text' name = 'phone' id= 'phone' className='py-2.5 px-5 focus:border-crimson border border-gray-300 rounded outline-none'/>
          </div>

          <div className ='flex flex-col w-[45%] m-[10px]'>
            <label htmlFor='name' className='text-[1.2rem] font-light mb-[5px]'>Email<span>*</span></label>
            <input type = 'email' name = 'email' id= 'email'className='py-2.5 px-5 focus:border-crimson border border-gray-300 rounded outline-none'/>
          </div>

         
         </div>

         <button className="bg-transparent border border-crimson py-2 px-4 rounded-md text-base font-normal m-4 cursor-pointer transition-transform duration-600 ease-in-out hover:bg-crimson hover:text-white hover:scale-110">Save Changes</button>
    </div>
  )
}

export default AccountSettings 