import React from 'react'
 import  Hero from "../../components/hero/Hero"
import Tabc from '../../components/tab/Tab';
import Contact from '../../components/contact/Contact';
import styled from 'styled-components';
import Setupd from '../../data/Step';
import Whyd from '../../data/why';
import customer from '../../data/Customer';

 function Home() {
  return (
    <Container className="w-full justify-center flex flex-col items-center">
      <Hero/>
      <div className="flex  w-full flex-col mt-10  ">

        <h1 className=' text-[20px] capitalize text-[#665DF5] font-medium text-center'>Our Working Step</h1>
          <Setup className='  flex w-full justify-center items-center gap-8'>
           {
             Setupd.map((item,index)=>{
               return(
                 <Step key={index} className=' flex  justify-center  items-center  mt-5 '>
                  <div className='card  rounded-md '>
                     <div className="w-full flex flex-col justify-center items-center">
                    <div className=' w-[60px] h-[60px] rounded-lg mt-4 px-3 
                      flex justify-center align-middle items-center shadow:md
                      bg-white'>
                      <span className="border-shadowcolor text-3xl">{item.icon}</span>
                  </div>
                  <h1 className='text-lg  justify-center
                   font-bold mt-3'>{item.title}</h1>
                  <p className='text-[10px] font-light text-start px-2 
                  '>{item.description}</p>
                  </div>
              </div>
            </Step>
            )
          })
        }
       </Setup>
        </div>

       {/* why work with us  */}

  <div className=" flex-col mt-10">
         <div className="relative w-full">
           <h1 className=' text-[20px] text-[#665DF5]  capitalize font-medium text-center'>Why Choose Zetahut</h1>
           {/* <div className="bg-[#7000DF] w-[30%] left-[35%]   h-2 absolute "></div> */}
        </div>
       <Why className='flex mt-1 gap-4 justify-center items-center'>
          {
            Whyd.map((item,index)=>{
              return(
                <WCard key={index} className='flex justify-center rounded-lg shadow-lg drop-shadow-lg  items-center align-middle mt-8'>
               <div  className='py-2 px-2 flex flex-col gap-2 justify-center  items-center  '>
                  <div className=' w-[60px] h-[60px] rounded-lg mt-2 px-3 
                      flex justify-center align-middle items-center shadow-md 
                       bg-white'>
                      <span className="border-shadowcolor text-3xl">{item.Icon}</span>
                  </div>
                  <h1 className='text-lg font-bold mt-2 mb-2'>
                   {item.text}
                  </h1>
                  <p className='text-[10px] font-light '>
                     {item.Description}
                  </p>
              </div>
             
          </WCard>
              )
            })
          }
       </Why>
          </div>
       {/**  tab layout */}
        <div className=' mt-10 flex flex-col justify-center items-center'>
           <h3>say something</h3>
             <Tabc/>
        </div>

        {/** what custome are saying */}

        <div className='flex mt-10 flex-col'>
           <h1 className=' text-[20px] capitalize text-[#665DF5] font-medium text-center'>What Customer Saying</h1>
             <Mainc className='w-full flex  justify-center gap-6 items-center align-middle mt-12 '>
                {
                  customer.map((item,index)=>{
                    return(
                     <Ccard key={index} className=' w-[300px] h-auto shadow-lg drop-shadow-2xl  rounded-md p-5 '>
                      <div className='flex gap-4' >
                        <img className='w-[60px] h-[60px]' src={item.pimg} alt='userimage'/>
                         <h1 className='self-center font-normal text-base'>{item.name}</h1>
                        </div>
                         <div className='py-3'>
                            <span>{item.star}</span>
                       </div>
                    <p className='text-[10px] font-light '>{item.destination}</p>
                </Ccard>
                  )
                })
              }
            </Mainc>
        <Contact/>
      </div>
    </Container>
  )
}
 
   const Container=styled.div`
     display: flex;
     width: 100%;
   `;

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
        width:220px;
        height:10px
        justify-content: center;
        flex-direction:column;
        align-items: center;
        transition:all .3s ease-in-out;
         cursor:pointer;
         &:hover{
           box-shadow:0 0 8px #ddd;
         }
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
       /* border:1px solid #f8f8f8; */
        width:220px;
        height:185px
        justify-content: center;
        flex-direction:column;
        align-items: center;
        gap:2rem;
        border-radius:15px;
        transition:all .3s ease-in-out;
         cursor:pointer;
         &:hover{
           box-shadow:0 0 8px #ddd;
         }
 `;
//  customer
 const Mainc=styled.div`
         @media screen and (max-width:970px){
            flex-direction:column;
         }
      `;
 const Ccard=styled.div`
        width:250px;
        height:180px;
        gap:4rem;
        border-radius:15px;
        transition:all .3s ease-in-out;
         cursor:pointer;
         &:hover{
           box-shadow:0 0 8px #ddd;
         }
      `;
export default Home