import React from 'react'
import video1 from '../../assets/video/carv2.mp4'
import styled from 'styled-components'
const Hero=()=>{
  return (
    <Container>
           <div className="overlay"></div>
            <div className=" w-full h-[60vh]">
              <video src={video1} loop="true" autoplay="true" muted="true"></video>
              </div>
                 <div className='content px-2'>
                  <h2 className='capitalize text-white text-[18px] font-bold'>Find the car That Matches Your Life Style</h2>
                  <p className='capitalize text-white text-[16px] font-normal'>The right car for you is waiting start here</p>
              <button className='bg-[#d00] text-white py-3 px-2 text-[18px] text-center rounded-md mt-5 hover:scale-100'>Find New Cars</button>
        </div>
     </Container>
  )
}
const Container = styled.div`
     width:100%;
     position:relative;
     top:0;
     left:0;

   video{
     width:100%;
     height:100%;
     object-fit:cover;
   }
   .overlay{
     background-color:rgba(0,0,0,.5);
     height:60vh;
     width:100%;
     position:absolute;
     top:0;
     right:0;
   }

   .content{
     position:absolute;
     top:0;
     left:0;
     height:100%;
     display:flex;
     align-items:center;
     justify-content: center;
     flex-direction:column;
     width:100%;
     
      p{
        @media screen and (min-width:320px){
           font-size:.944rem;
         }
      }

   }
`
export default Hero