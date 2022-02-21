import React from 'react'
import imagecontact from '../../assets/image/Group 13.png'
function Contact() {
  return (
    <div className='mt-56 px-10 flex flex-col text-center justify-center align-middle w-full h-auto py-3'>
      <h1 className='text-base text-black font-bold'>Contact Us</h1>
<div className='flex px-11  justify-center gap-32 mt-11 '>
      <div>
        <img className='h-[280px] w-[447px] p-5' src={imagecontact} alt='contactus'/>
      </div>
      <div className='py-9 px-11 w-[400px] h-[350px] flex flex-col justify-center align-middle items-center shadow-3xl drop-shadow-4xl shadow-shadowcolor bg-white rounded-2xl '>
      <form className='gap-5 flex flex-col justify-center align-middle w-full h-full '>
            <input className='w-[250px] h-[35px] border rounded-lg border-slate-700/50 px-2' placeholder='Name' type='text' required />
            <input className='w-[250px] h-[35px] border rounded-lg border-slate-700/50 px-2' placeholder='email' type='email' required />
           <textarea className=' w-[250px] h-[105px] border rounded-lg border-slate-700/50 px-2' placeholder='message' type='text' required />
      </form>
      <button className='py-2 px-9 w-auto  text-white rounded-xl bg-shadowcolor '>Send</button>
      </div>
</div>
     
     
    </div>
  )
}

export default Contact