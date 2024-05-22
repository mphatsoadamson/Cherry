import React from "react";

export default function Contact(){
    return(
   <div class="flex w-full m-h-screen justify-center item-center">
      <div class="bg-gray-100 w-full p-8 text-black">
        <div class="flex flex-col justify between m-16">
          <div>
            <h1 class="font-bold text-4xl tracking-wide">Contact Us</h1>
            <p class="text-2xl pt-6 font-light">Feel free to contact our support team to ask us of and help or report any problems</p>
            <address class="mt-6 mb-3">Call: +265(0) 999 100 888</address>
            <address class="mb-3">Email: help@cherry.com</address>
            <address class="mb-10">Location: Zomba, University Of Malawi</address>
          </div>
          
          <h1 class="font-bold text-3xl tracking-wide my-5">Fill In Quick Form</h1>

          <div class="bg-white rounded-xl shadow-lg p-8 text-gray-600">
            <form class="flex flex-col space-y-4">
              <div>
                <label class="text-small">Your full name</label>
            
                <input type="text" placeholder="Enter full name" class="ring-1 ring-gray-300 w-full rounded-md p-4 mt-2"></input>
              </div>
              <div>
                <label class="text-small">Your Email Address</label>
              
                <input type="text" placeholder="Enter your email address" class="ring-1 ring-gray-300 w-full rounded-md p-4 mt-2"></input>
              </div>
              <div>
                <label class="text-small">Subject</label>
              
                <input type="text" placeholder="Enter your subject" class="ring-1 ring-gray-300 w-full rounded-md p-4 mt-2"></input>
              </div>
              <div>
                <label class="text-small">Your Email Address</label>
              
                <textarea placeholder="Enter your email address" rows="4" class="ring-1 ring-gray-300 w-full rounded-md p-4 mt-2"></textarea>
              </div>
              <button className='inline-block self-end bg-red-600 hover:bg-blue-900 text-white font-bold rounded-lg py-4 px-4'>SEND MESSAGE</button>

            </form>
          
          </div>

        </div>

      </div>
   </div>
    )
}