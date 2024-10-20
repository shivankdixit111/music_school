'use client'
import { div } from 'framer-motion/client'
import React, { FormEvent, useState } from 'react'
import { BackgroundBeams } from '@/components/ui/background-beams'

const page = () => {
  const [email,SetEmail] = useState("");
  const [message,SetMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>){
        // event.preventDefault();
        console.log("submitted",{email,message});
  }
  return (
     
     <div className="bg-gray-100 dark:bg-gray-900 py-12 pt-36 ">
           <div className='max-w-2xl mx-auto p-4 relative z-10'>
              <h1 className='text-md md:text-7xl text-center font-bold font-sans mb-8 text-white'>Contact Us</h1>
              <p className='text-neutral-500 text-sm text-center my-2 max-w-lg mx-auto'>We&apos;re here to help with any questions about our courses,
                  programs, or events. Reach out and let us know how we can assist you
                  in your musical journey.
              </p>
            <form onSubmit={handleSubmit} className='space-y-4 mt-4'>
                <input type="email" placeholder='Enter your email'
                 value = {email} 
                 onChange={(e)=> SetEmail(e.target.value)}
                 className='w-full p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950 placeholder:text-neutral-700'
                 required
                />
                
                <textarea name="" id="" placeholder='Enter your message'
                 value = {message} 
                 onChange={(e)=> SetMessage(e.target.value)}
                 className='w-full p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950 placeholder:text-neutral-700'
                 required
                ></textarea>
                <button type='submit' className='px-6 py-2 text-white bg-teal-500 hover:bg-teal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500
                focus:ring-offset-2'>Send Message</button>
            </form>
           </div>
           <BackgroundBeams />
     </div>
  )
}

export default page