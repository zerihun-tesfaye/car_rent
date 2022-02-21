import React from 'react'
import imagecar from '../../assets/image/imagecar.png'
import user from '../../assets/image/imageuser.png'
import {ImLocation2} from 'react-icons/im'
function Used() {
  return (
    <div className='w-full flex justify-evenly align-middle  mt-10 px-4 py-2'>
        <div className='w-[300px] h-auto pb-5 shadow-3xl drop-shadow-4xl shadow-gray-500/50 rounded-3xl flex flex-col bg-white '>
            <img className='w-full object-contain' src={imagecar} alt='usedcars'/>
            <div className='flex  justify-between align-middle px-5 w-full pt-5'>
                <div className='flex gap-1' >
                    <img className='w-[40px] h-[40px]' src={user} alt='userimage'/>
                    <h1 className='self-center font-normal text-sm'>Lala Mockup</h1>
                </div>
                <h1 className='text-black text-base font-bold self-baseline '>200birr/Day</h1>
            </div>
            <div className='flex  justify-evenly gap-10 align-middle px-8 w-full pt-1'>
                <h1 className='self-center font-bold capitalize text-sm'>2022 Toyota 22 Prius</h1>
                <a className='text-shadowcolor text-sm font-bold self-baseline ' href='/#detail'>Detail</a>
            </div>
            <div className='flex px-12 w-full pt-1' >
            <ImLocation2 size={'18px'}/>
            <h1 className='self-baseline text-sm  font-bold text-black'>6Km 30Miles Away  </h1>
            </div>
            <div className=' w-[60px] h-[40px] text-lg text-black font-medium py-3 px-1 items-center flex align-middle justify-center bg-shadowcolor self-end mr-10 mt-10 rounded-md'>Used</div>
        </div>
        <div className='w-[300px] h-auto pb-5 shadow-3xl drop-shadow-4xl shadow-gray-500/50 rounded-3xl flex flex-col bg-white '>
            <img className='w-full object-contain' src={imagecar} alt='usedcars'/>
            <div className='flex  justify-between align-middle px-5 w-full pt-5'>
                <div className='flex gap-1' >
                    <img className='w-[40px] h-[40px]' src={user} alt='userimage'/>
                    <h1 className='self-center font-normal text-sm'>Lala Mockup</h1>
                </div>
                <h1 className='text-black text-base font-bold self-baseline '>200birr/Day</h1>
            </div>
            <div className='flex  justify-evenly gap-10 align-middle px-8 w-full pt-1'>
                <h1 className='self-center font-bold capitalize text-sm'>2022 Toyota 22 Prius</h1>
                <a className='text-shadowcolor text-sm font-bold self-baseline ' href='/#detail'>Detail</a>
            </div>
            <div className='flex px-12 w-full pt-1' >
            <ImLocation2 size={'18px'}/>
            <h1 className='self-baseline text-sm  font-bold text-black'>6Km 30Miles Away  </h1>
            </div>
            <div className=' w-[60px] h-[40px] text-lg text-black font-medium py-3 px-1 items-center flex align-middle justify-center bg-shadowcolor self-end mr-10 mt-10 rounded-md'>Used</div>
        </div>
        <div className='w-[300px] h-auto pb-5 shadow-3xl drop-shadow-4xl shadow-gray-500/50 rounded-3xl flex flex-col bg-white '>
            <img className='w-full object-contain' src={imagecar} alt='usedcars'/>
            <div className='flex  justify-between align-middle px-5 w-full pt-5'>
                <div className='flex gap-1' >
                    <img className='w-[40px] h-[40px]' src={user} alt='userimage'/>
                    <h1 className='self-center font-normal text-sm'>Lala Mockup</h1>
                </div>
                <h1 className='text-black text-base font-bold self-baseline '>200birr/Day</h1>
            </div>
            <div className='flex  justify-evenly gap-10 align-middle px-8 w-full pt-1'>
                <h1 className='self-center font-bold capitalize text-sm'>2022 Toyota 22 Prius</h1>
                <a className='text-shadowcolor text-sm font-bold self-baseline ' href='/#detail'>Detail</a>
            </div>
            <div className='flex px-12 w-full pt-1' >
            <ImLocation2 size={'18px'}/>
            <h1 className='self-baseline text-sm  font-bold text-black'>6Km 30Miles Away  </h1>
            </div>
            <div className=' w-[60px] h-[40px] text-lg text-black font-medium py-3 px-1 items-center flex align-middle justify-center bg-shadowcolor self-end mr-10 mt-10 rounded-md'>Used</div>
        </div>
    </div>
  )
}

export default Used