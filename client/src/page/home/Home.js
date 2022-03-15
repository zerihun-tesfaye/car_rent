import React from 'react'
 import  Hero from "../../components/hero/Hero"
import userimage from '../../assets/image/imageuser.png'
import Tabc from '../../components/tab/Tab';
import {  Rating } from '@mui/material';
import Contact from '../../components/contact/Contact';
import  imgbottom from '../../assets/image/imagebottomhero.png'
import styled from 'styled-components';
import Setupd from '../../data/Step';
import Whyd from '../../data/why';

 function Home() {
  return (
    <div className="w-full justify-center flex flex-col items-center">
      <Hero/>
           <div className="flex justify-center  items-center m-0 p-0">
                 <img src={imgbottom} alt="" />
              </div>
          <h1 className='text-black text-[20px] capitalize font-medium text-center'>Our Working Step</h1>
          <Setup className='flex w-full justify-center items-center gap-8  mt-8   '>
           {
             Setupd.map((item,index)=>{
               return(
               <Step key={index} className=' flex  justify-center  items-center  mt-5 '>
                  <div className='card  rounded-md  border-shadow-color '>
                     <div className="w-full flex flex-col justify-center items-center">
                    <div className=' w-[60px] h-[60px] rounded-lg mt-4 px-3 
                      flex justify-center align-middle items-center drop-shadow-4xl 
                      shadow-lg shadow-shadowcolor bg-white'>
                      <span className="border-shadowcolor text-3xl">{item.icon}</span>
                  </div>
                  <h1 className='text-lg text-black justify-center
                   font-bold mt-3'>{item.title}</h1>
                  <p className='text-[10px] font-light text-start px-2 
                  text-black'>{item.description}</p>
                  </div>
              </div>
            </Step>
            )
          })
         }
       </Setup>

       {/* why work with us  */}

       <h1 className='text-black text-[20px] mt-10 capitalize font-medium text-center'>Why Choose Zetahut</h1>
       <Why className='flex mt-5 gap-4 justify-center items-center'>
          {
            Whyd.map((item,index)=>{
              return(
             <WCard key={index} className='flex justify-center rounded-lg  items-center align-middle mt-8'>
               <div  className='py-2 px-2 flex flex-col gap-3 justify-center  items-center drop-shadow-lg  shadow-lg shadow-shadowcolor  '>
                  <div className=' w-[60px] h-[60px] rounded-lg mt-2 px-3 
                      flex justify-center align-middle items-center drop-shadow-4xl 
                      shadow-lg shadow-shadowcolor bg-white'>
                      <span className="border-shadowcolor text-3xl">{item.Icon}</span>
                  </div>
                  <h1 className='text-lg text-black font-bold mt-3 mb-2'>
                   {item.text}
                  </h1>
                  <p className='text-[10px] font-light text-black'>
                     {item.Description}
                  </p>
              </div>
             
          </WCard>
              )
            })
          }
       </Why>
       {/**  tab layout */}
        <div className=' mt-10 flex flex-col justify-center items-center'>
           <h3>say something</h3>
             <Tabc/>
        </div>

        {/** what custome are saying */}

        <div className='flex mt-20 flex-col'>
           <h1 className='text-black text-[20px] capitalize font-medium text-center'>What Customer Saying</h1>
             <div className='w-full flex justify-center gap-10 items-center align-middle mt-12 '>
                <div className='w-[300px] h-auto shadow-lg drop-shadow-3xl shadow-shadowcolor rounded-md p-5 bg-white'>
                    <div className='flex gap-4' >
                        <img className='w-[60px] h-[60px]' src={userimage} alt='userimage'/>
                         <h1 className='self-center font-normal text-base'>Lala Mockup</h1>
                        </div>
                         <div className='py-3'>
                         <Rating name='no-value' value={4}/>
                       </div>
                    <p className='text-[10px] font-light text-black'>Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                </div>
            </div>
        <Contact/>
      </div>
    </div>
  )
}
 
  

  const Setup = styled.div`
     display: flex;
     @media screen and (max-width:979px){
      display:flex;
      align-items: center;
      flex-direction:column;
     }
  `;
 const Step = styled.div`
  justify-content: center;
  align-items: center
  display:flex;
   .card{
        background-color:#edde;
        width:220px;
        height:10px
        justify-content: center;
        flex-direction:column;
        align-items: center;
       }
   
 `;
//  why
 const Why=styled.div`
   @media screen and (max-width:979px){
      display: flex;
      align-items: center;
      flex-direction:column;
      
    }
 `;
 const WCard=styled.div`
        background-color:#f8f8f8;
        width:220px;
        height:185px
        justify-content: center;
        flex-direction:column;
        align-items: center;
        gap:2rem;
        border-radius:15px;
 `;
export default Home