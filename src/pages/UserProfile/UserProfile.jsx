import React from 'react'
import { useParams } from 'react-router-dom'
import UserSidebar from './UserSidebar'
import AccountSettings from './AccountSettings'
import Changepassword from './Changepassword'
import MyProducts from './MyProducts'
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
                    <div className='absolute bottom-0 right-0'>
                                <label htmlFor='photo' className='flex items-center justify-center w-12 h-12 flex px-2 py-2 rounded-full bg-gray-200 border border-crimson-300'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                                        <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                </label>
                                <input type='file' id='photo' className='hidden'/> 
                            </div> 
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
                {activepage === 'accountsettings' && <AccountSettings/>}
                {activepage === 'changepassword' && <Changepassword/>}
                {activepage === 'yourproducts' && <MyProducts/>}              
                       
                </div>
            </div>
          
          
          </div>
    )
}

export default UserProfile 