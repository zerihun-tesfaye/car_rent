import React from 'react'
import imagehero from '../../assets/image/car3.jpg'
import styled from 'styled-components'
const Herocar=()=>{
  return (
    <Container>
           
            <div className="hero">
             <div className=' justify-center flex items-center flex-col absolute top-[40%] left-[50%] translate-y-[-50%] translate-x-[-50%] mb-10'>
               <h2 className='capitalize text-white text-[28px] font-bold'>Find the car That Matches Your Life Style</h2>
               <h1 className='capitalize text-white text-[18px] font-normal'>The right car for you is waiting start here</h1>
               <button className='bg-button text-white py-3 px-2 text-[18px] text-center rounded-md mt-5 hover:scale-100'>Find New Cars</button>
             </div> 
             
            </div>

      
    </Container>
  )
}
const Container = styled.div`
   background-color:rgb(0,0,0,.6) ;
    height: 65vh;
    top: 0;
    left: 0;
    position: relative;
    width:100%;
    overflow: hidden;
     &::before {
      content:"";
      background:url(${imagehero});
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: -1;
      position: absolute;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      object-fit:cover;
    }
   .bg{
     height:70vh;
     img{
       width: 100%;
       height: 100%;
       object-fit:cover;
     }
   }
   
   
  
`
export default Herocar