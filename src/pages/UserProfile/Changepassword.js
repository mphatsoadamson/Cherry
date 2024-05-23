import React from 'react'

const Changepassword = () => {

  return (
        <div className= 'flex flex-col items-center w-full'>
          <h1 className = 'text-crimson text-[30px] font-[350] py-[5px] px-[10px] mt-2.5'>Change Password</h1>
        
            <div className = 'form flex flex-row flex-wrap justify-between w-full'>
              <div className='flex flex-col w-[45%] m-[10px]'>
                <label htmlFor='oldpassword' className='text-[1.2rem] font-light mb-[5px]'>Old Password<span>*</span></label>
                <input type = 'password' className='py-2.5 px-5 focus:border-crimson border border-gray-300 rounded outline-none'/>
              </div>
    
              <div className='flex flex-col w-[45%] m-[10px]'>
                <label htmlFor='newpass' className='text-[1.2rem] font-light mb-[5px]'>New Password<span>*</span></label>
                <input type = 'password' className='py-2.5 px-5 focus:border-crimson border border-gray-300 rounded outline-none'/>
              </div>
    
            
             </div>
    
             <button className='border border-crimson px-5 py-2.5 rounded-md text-base font-normal m-4 transition-transform duration-600 ease-in-out hover:bg-crimson hover:text-white hover:scale-110'>Save Changes</button>
        </div>
  )
}

export default Changepassword