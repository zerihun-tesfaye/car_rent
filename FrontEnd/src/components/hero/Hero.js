import React from 'react'
import imagehero from '../../assets/image/car.jpg'
import styled from 'styled-components'
const Hero=()=>{
  return (
    <Container>
            <div className="hero justify-center flex items-center">
             <div className=' abs  justify-center flex items-center flex-col absolute '>
               <h1 className='capitalize text-white  font-bold'>Find the car That Matches Your Life Style</h1>
               <h3 className='capitalize text-white  '>The right car for you is waiting start here</h3>
               <button className='bg-button text-white bg-[#d00] py-3 px-2 text-[18px] text-center rounded-md mt-5 hover:scale-100'>Find New Cars</button>
             </div> 
             
            </div>
    </Container>
  )
}
const Container = styled.div`
   background-color:rgb(0,0,0,0.55) ;
    height:70vh;
    top: 0;
    left: 0;
    width:100%;
    position:relative;
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
     img{
       width: 100%;
       height: 100%;
       object-fit:cover;
      
      

     }
   }
/* */
.hero{
  width:100%;
   display: flex;
   align-items: center;
   justify-content: center;
   
   @media screen and (min-width:970px){
      margin:0 auto;
      font-size:1rem;
  }
  .abs{
      margin:0 auto ;
      display: flex ;
      align-items: center;
       justify-content: center;
       top:50%;
       left: 50%;
       transform: translate(-50%,-50%);
       width:100%;
    
    h1,h3{
       font-size:2rem;
    @media screen and (min-width:970px){
      }
  }

}
}
  
`
export default Hero