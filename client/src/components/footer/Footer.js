import React from 'react'
import {FaFacebook,FaLinkedinIn} from 'react-icons/fa'
function Footer() {
  return (
    <div className=' flex flex-col mt-56'>
      <div className='flex px-5 mt-10 justify-evenly'>
          <h1 className='text-black font-bold capitalize text-base'>Zeta<span className='capitalize text-base font-bold text-button'>Hut</span></h1>
          <div className='flex flex-col'>
            <h1 className='text-base text-black font-bold capitalize'>Menu</h1>
            <a className='mt-3 text-sm font-normal text-black' href='/'>cars</a>
            <a className='mt-1 text-sm font-normal text-black' href='/'>Features</a>
            <a className='mt-1 text-sm font-normal text-black' href='/'>Contact</a>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-base text-black font-bold capitalize'>Resource</h1>
            <a className='mt-3 text-sm font-normal text-black' href='/'>stopCenter</a>
            <a className='mt-1 text-sm font-normal text-black' href='/'>Blogs</a>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-base text-black font-bold capitalize'>Get in touch</h1>
            <h1 className='mt-3 text-[18px] font-bold text-shadowcolor self-center'>Question or Feedback</h1>
              <div className='flex gap-2 mt-1 '>
              <a href='#/' className='justify-self-center '><FaFacebook color={"#3b5998"} size={"18px"}/></a>
                <a href='#/' className='justify-self-center '><FaLinkedinIn color={" #0e76a8"} size={"18px"}/></a>
              </div>
          </div>


      </div>
      <div className='mt-20 w-full text-center'>
      <h1 className='text-sm font-light'>@Copy2022 zetahut.com All Right Reserved</h1>
      </div>
    </div>
  
  )
}

export default Footer