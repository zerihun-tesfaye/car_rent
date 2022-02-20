import React from 'react'
 import  Hero from "../../components/hero/Hero"
 import {FaMapMarkedAlt,FaCarSide,FaCalendarAlt,FaUsers} from "react-icons/fa"
 import {ImRocket,ImLocation2} from 'react-icons/im'
 function Home() {
  return (
    <>
      <Hero/>
       <div className='flex w-full flex-col mt-20'>
          <h1 className='text-black text-[20px] capitalize font-medium text-center'>Our Working Step</h1>
          <div className='w-full flex justify-center  gap-40 items-center align-middle mt-5 '>
              <div className='flex flex-col opacity-100  rounded-md border-shadowcolor'>
                  <div className=' w-[80px] h-[70px] rounded-lg py-3 px-3 flex justify-center align-middle items-center drop-shadow-4xl shadow-3xl shadow-shadowcolor '>
                      <FaMapMarkedAlt size={'38px'} color={'#008CBC'}/>
                  </div>
                  <h1 className='text-lg text-black font-bold mt-3'>Choose Your Location</h1>
                  <p className='text-[10px] font-light text-black'>Lorem ipsum dolor sit amet, consetetur sadipscing <br/> elitr, sed diam nonumy eirmod tempor invidunt ut</p>
              </div>
              <div className='flex flex-col opacity-100  rounded-md border-shadowcolor'>
                  <div className=' w-[80px] h-[70px] rounded-lg py-3 px-3 flex justify-center align-middle items-center drop-shadow-4xl shadow-3xl shadow-shadowcolor '>
                      <FaCarSide size={'38px'} color={'#008CBC'}/>
                  </div>
                  <h1 className='text-lg text-black font-bold mt-3 mb-2'>Pick Your Car</h1>
                  <p className='text-[10px] font-light text-black'>Lorem ipsum dolor sit amet, consetetur sadipscing <br/> elitr, sed diam nonumy eirmod tempor invidunt ut</p>
              </div>
              <div className='flex flex-col opacity-100 rounded-md border-shadowcolor'>
                  <div className=' w-[80px] h-[70px] rounded-lg py-3 px-3 flex justify-center align-middle items-center drop-shadow-4xl shadow-3xl shadow-shadowcolor '>
                      <FaCalendarAlt size={'38px'} color={'#008CBC'}/>
                  </div>
                  <h1 className='text-lg text-black font-bold mt-3 mb-2'>Pick-Up Date</h1>
                  <p className='text-[10px] font-light text-black'>Lorem ipsum dolor sit amet, consetetur sadipscing <br/> elitr, sed diam nonumy eirmod tempor invidunt ut</p>
              </div>
          </div>
       </div>

       {/* why work with us  */}

       <div className='flex mt-20 flex-col'>
       <h1 className='text-black text-[20px] capitalize font-medium text-center'>Why Choose Zetahut</h1>
          <div className='w-full flex justify-center  gap-20 items-center align-middle mt-12 '>
              <div  className=' w-[283px] h-[200px] rounded-[23px] py-3 px-3 flex flex-col gap-3 justify-center align-middle items-center drop-shadow-4xl shadow-3xl shadow-shadowcolor  '>
                  <ImRocket size={'48px'} color={'#008CBC'}/>
                  <h1 className='text-lg text-black font-bold mt-3 mb-2'>Fast and Easy Booking</h1>
                  <p className='text-[10px] font-light text-black'>Lorem ipsum dolor sit amet, consetetur sadipscing <br/> elitr, sed diam nonumy eirmod tempor invidunt ut</p>
              </div>
              <div  className=' w-[283px] h-[200px] rounded-[23px] py-3 px-3 flex flex-col gap-3 justify-center align-middle items-center drop-shadow-4xl shadow-3xl shadow-shadowcolor  '>
                  <ImLocation2 size={'48px'} color={'#008CBC'}/>
                  <h1 className='text-lg text-black font-bold mt-3 mb-2'>Many Pick Location</h1>
                  <p className='text-[10px] font-light text-black'>Lorem ipsum dolor sit amet, consetetur sadipscing <br/> elitr, sed diam nonumy eirmod tempor invidunt ut</p>
              </div>
              <div  className=' w-[283px] h-[200px] rounded-[23px] py-3 px-3 flex flex-col gap-3 justify-center align-middle items-center drop-shadow-4xl shadow-3xl shadow-shadowcolor  '>
                  <FaUsers size={'48px'} color={'#008CBC'}/>
                  <h1 className='text-lg text-black font-bold mt-3 mb-2'>Satisfied Customers</h1>
                  <p className='text-[10px] font-light text-black'>Lorem ipsum dolor sit amet, consetetur sadipscing <br/> elitr, sed diam nonumy eirmod tempor invidunt ut</p>
              </div>
          </div>
       </div>
    </>
  )
}

export default Home