import React from 'react'
import { useParams } from 'react-router-dom'
import UserSidebar from './UserSidebar'
import img from "./wuglin.jpg"

const UserProfile = () => {

    const {activepage} = useParams()
   return (
    
          <div className = 'flex flex-col bg-gray-100 '>
            <div className='profile_img text-center py-10'>
                <div className = "flex flex-col justify-center items-center">
                    <div className='flex flex-row'>
                    <div className='relative rounded-full border border-black' style={{width: '200px', height: '200px'}}>
                            <img className='rounded-full w-full h-full object-cover' src={img}/> 
                    </div>
                           
                          
                    </div>
                       <label htmlFor='' className='font-sans font-bold mt-3 text-5xl '>Wuglin Tech</label>
                        
                    
                </div>
            </div>

           
           
           





            <div className = 'flex justify-center w-full mt-10 mb-40 gap-10'>
                <div className = 'w-1/5 border border-crimson-300 min-h-[50vh] bg-white shadow-lg rounded-md overflow-hidden '>
                <UserSidebar activepage = {activepage} />
                </div>
                <div className = 'w-3/5 border border-crimson-300 min-h-[50vh] bg-white shadow-lg rounded-md overflow-hidden'>
                              
                </div>
            </div>
          
          
          </div>
    )
}

export default UserProfile 