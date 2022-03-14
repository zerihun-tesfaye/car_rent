import React from 'react'
import imagehero from '../../assets/image/imagehero.png'
import imagebottom from '../../assets/image/imagecar.png'
import styled from 'styled-components'
function Hero() {
  return (
    <Container>
      <div className='w-[100%] h-[85vh]'>
      <img  src={imagehero} alt='car' />
      </div>
       <div className='absolute top-[50%] left-[50%] translate-y-[-110%] translate-x-[-30%] mb-10'>
         <h2 className='capitalize text-white text-[28px] font-bold'>Find the car That Matches Your Life Style</h2>
         <h1 className='capitalize text-white text-[18px] font-normal'>The right car for you is waiting start here</h1>
         <button className='bg-button text-white py-3 px-2 text-[18px] text-center rounded-md mt-5 hover:scale-100'>Find New Cars</button>
       </div>
      <div className='w-full flex justify-center absolute bottom-0 mb-10' >
      </div>
      
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  height: 90vh;
  margin: 0 auto;
`
export default Hero