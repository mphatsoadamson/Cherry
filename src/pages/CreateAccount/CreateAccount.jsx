import React from "react";
import {NavLink} from "react-router-dom";

export default function CreateAccount(){
    return(
        <div className='grid grid-cols-1 sm:grid cols-2 h-screen w-full'>
        <div className='bg-gray-100 flex flex-col justify-center'>

            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>

                <h2 className='text-4xl text-red-500 font bold text-center py-6'>CHERRY</h2>

                <div className='flex flex-col py-2'>
                    <div>Your Name(full name)</div>
                    <input className='border p-2' type="text"  placeholder="Enter full name" class="ring-1 ring-gray-300 w-full rounded-md p-4 mt-2"/>
                </div>

                <div className='flex flex-col py-2'>
                    <div>Phone Number</div>
                    <input className='border p-2' type="text"  placeholder="Enter phone number" class="ring-1 ring-gray-300 w-full rounded-md p-4 mt-2"/>
                </div>

                <div className='flex flex-col py-2'>
                    <div>Email</div>
                    <input className='border p-2' type="email"  placeholder="Enter email" class="ring-1 ring-gray-300 w-full rounded-md p-4 mt-2"/>
                </div>

                <div className='flex flex-col py-2'>
                    <div>Password</div>
                    <input className='border p-2' type="password"  placeholder="Enter password" class="ring-1 ring-gray-300 w-full rounded-md p-4 mt-2"/>
                </div>

                <div className='flex flex-col py-2'>
                    <div>Confirm Password</div>
                    <input className='border p-2' type="password"  placeholder="Enter confirm password" class="ring-1 ring-gray-300 w-full rounded-md p-4 mt-2"/>
                </div>

                <button className='border w-full my-5 py-2 bg-red-600 hover:bg-red-500 text-white'>Create Account</button>

                <div>
                    <p>Already have an account? click below</p>
                </div>

                <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Go to sign in</button>
            </form>
        </div>
    </div>
    )
}