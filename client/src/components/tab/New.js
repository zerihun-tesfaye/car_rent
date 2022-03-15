import React from 'react'
import Newd from '../../data/Newd'
import  styled from 'styled-components'
function New() {
  return (
    <Container className='w-full flex  justify-center gap-6 align-middle '>
         {
           Newd.map((item,index)=>{
              return(
                 
                 <Card key={index} className=' pb-3 shadow-2xl 
                   drop-shadow-2xl shadow-gray-500/50  '>
                  <img className='w-full object-contain ' src={item.Car} alt='usedcars'/>
                    <div className='flex items-center justify-between  px-5 w-full pt-4'>
                    <div className=' w-[40px] flex mt-1  h-[40px] gap-1' >
                      <img src={item.Profile} alt='userimage'/>
                      <h1 className='self-center font-normal text-sm'>{item.Name}</h1>
                   </div>
                     <h1 className='text-black text-base pt-1 font-semi-bold '>{item.Price}</h1>
               </div>
              <div className='flex w-full items-center'>
                 <div className="flex  flex-col  items-center">
                    <h1 className='self-center font-bold capitalize mt-1 text-sm'>{item.Carname}</h1>
                   <div className='flex'>
                       <span className="ml-4">{item.Location}</span>
                       <h1 className='self-baseline text-sm  semi-bold text-black'>{item.Mile}</h1>
                    
                   </div>
                  </div>
                </div>

              
                <div className=" w-full  flex items-center justify-between px-5 py-2 ">
                 <div className=' w-[60px] h-[40px] text-lg 
                   text-black semi-bold  items-center 
                   flex align-middle justify-center bg-shadowcolor
                   self-end rounded-md'>{item.Btnused}
                  </div>
                   <a className='text-blue-900 hover:opacity-7 bg-[#CDCECF] rounded-sm py-1 px-2 border-1 text-sm font-bold  '
                    href='/#detail'>{item.Detail}</a>
                </div>
         </Card>
       
         )
      })
    }

   {/*  */}

    </Container>

  )
}
const Container = styled.div`
  display: flex;
  margin: 2rem 0;

  @media screen and (max-width:970px){
      flex-direction: column;
       
   }
`;

const Card = styled.div`
      display: flex;
      align-items: center;
      justify-content:center;
      width:280px;
      height:350px;
      flex-direction:column;
      border-radius: 15px;

       img{
         width: 100%;
         height: 100%;
         border-radius: 15px 15px 0 0;
       }
   @media screen and (max-width:970px){
      flex-direction: column;
    }
`;

export default New