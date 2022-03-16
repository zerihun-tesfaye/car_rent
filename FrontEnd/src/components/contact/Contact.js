import React from 'react'
import imagecontact from '../../assets/image/contact.svg'
import styled from 'styled-components';

function Contact() {
  return (
    <Container className='mt-32  w-full flex flex-col text-center justify-center items-center '>
      <h1 className='text-base text-[#665DF5] font-bold'>Contact Us</h1>
        <div className=' subcon w-full flex gap-32 mt-8  justify-between items-center'>
          <div className=" cimg  flex-1">
            <img className='w-full h-full object-cover ' src={imagecontact} alt='contactus'/>
        </div>
          <div className='py-4 w-[300px]  h-[350px] flex flex-col justify-center items-center shadow-2xl  bg-[#1A1D1E] rounded-2xl '>
              <form className='gap-5 flex flex-col justify-center align-middle  '>
                 <div className='justify-center items-center m-auto gap-2'>
                    <div className="box mt-4">
                        <input className='w-[250px] h-[35px] border bg-transparent outline-none rounded-sm border-slate-700/60 px-2' placeholder='Name' type='text' required />
                    </div>
                    <div className="box mt-4">
                        <input className='w-[250px] h-[35px] border bg-transparent outline-none rounded-sm border-slate-700/50 px-2' placeholder='email' type='email' required />
                    </div> 
                    <div className="box mt-4">
                     <textarea className=' w-[250px] h-[105px] border bg-transparent outline-none rounded-sm border-slate-700/50 px-2' placeholder='message' type='text' required />
                    </div>
                 </div>
                <button className='py-2 px-2  text-white rounded-md bg-shadowcolor '>Send</button>
             </form>
        </div>
    </div>
     
     
    </Container>
  )
}

const Container=styled.div`
     display:flex;
     width:100%;
     overflow:hidden;
     .cimg{
       max-width:500px;
       height:100%;
        @media screen and (max-width:979px){
          display:flex;
           width:100%;
           height:100%;
          margin:0 3rem;
          object-fit:contain;
     }
       img{
           width:100%;
           height:100%;
           object-fit:cover;
          }
     }
     .subcon{
       @media screen and (max-width:979px){
        display:flex;
        align-items: center;
        flex-direction:column;

       }
     }
`;
export default Contact