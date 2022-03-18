import React from 'react'
 import styled from 'styled-components'
 import  Detaildatas from '../../data/Detaildata'
const Details = () => {
  return (
    <Container>
        <div className=" detail ">
         {
           Detaildatas.map((item,index)=>{
             return(
                <Mcard key={index}>

                  <div className="image rounded-lg">
                      <img src={item.image} alt="" className="rounded-lg" />
                    </div> 

                    <div className="content  flex-col px-4 py-3">
                        <div className="price-carname flex items-center py-4 justify-between">
                              <h2 className="tracking-normal		font-bold text-2xl capitalize">{item.name}</h2>
                              <span className="semi-bold text-lg capitalize ">{item.price}</span>
                        </div>
                          <hr />

                          <div className="description  py-1 flex flex-col">
                               <h2 className=' tracking-normal  break-words capitalize text-lg font-bold underline'>description</h2>
                               <p className="text-sm pointer ">{item.description}</p>
                                
                          </div>
                           {/* addres  */}
                              <div className="l-c flex py-2 flex-col">
                                 <h3 className="text-lg font-bold underline">info</h3>
                                  <div className='flex gap-2'>
                                  <h3 className=" tracking-normal		font-semi-bold text-md capitalize">{item.campanyname}</h3>
                                  <span className="text-2xl text-[#FFA500]">{item.loaction}</span></div>
                                   <div className="flex flex-col capitalize items-start text-sm">
                                      <span>{item.phone}</span>
                                      <span>{item.email}</span>
                                      <span>{item.websites}</span>
                                   </div>

                          </div>
                          <div className="h-auto justify-center flex bottom-0 py-2 text-white w-full ">
                          <button className=" tracking-tight	 bg-gray-400 rounded-md capitalize py-2  px-8">add to card</button>

                          </div>  
                    </div>
                    {/* content */}
                </Mcard>
                // flex
             )
           })
         }   
        </div>
    </Container>
  )
}
 const Container=styled.div`
   color: #E3E0DC;
   justify-content: center;
   display: flex;
   align-items: center;
   margin: 0 auto; 
   .detail{
      max-width:1200px;
      display:flex;
      padding: 30px 0;
      overflow: hidden;
      flex-wrap:wrap;
      justify-content:center;
    }
 `;
 const Mcard=styled.div`
   display:flex;
   align-items:center;
   padding: 30px 0;
   justify-content: space-between;
   width: 100%;
   overflow: hidden;
    @media screen and (max-width:970px){
        flex-direction:column;
    }
     .content{
       max-width:380px;
       margin: 25px;
       height:auto;
       overflow: hidden;
       border-radius:20px;
       width:100%;
       border:1px solid #100;
        p{
          padding:0;
          display:flex;
          align-items: center;
          justify-content: center;
        }
        button{
          transition:all 0.3s ease-in-out;
          background-color:#d00;
          &:hover{
            opacity: 0.6;
          }
        }
    }
     /*  */
  .image{
      max-width:400px;
      min-width:290px;
      overflow:hidden;
      margin:23px;

    img{
        width: 100%;
        height: 100%;
        object-fit:cover;
        display:block ;
      }
    }
  
   
 `;
export default Details