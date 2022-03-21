import React from 'react'
 import {Container}from './Calanderstyle'
const Calander = () => {
    // const [value, setValue] = useState(new Date());

  return (
    <Container>
           
            <div className="hero">
             <div className='  con-t justify-center flex items-center flex-col absolute top-[40%] left-[50%] translate-y-[-50%] translate-x-[-50%] mb-10'>
                 <h3 className="py-4 text-2xl capitalize text-gray-50 tracking-wide font-bold">welcome back</h3>
                 <form action="/Cart" method="post">
                   <div className="control flex  relative">
                         <div className="box flex  px-2">
                           <label htmlFor="" className="flex font-bold  text-[#065dff] items-center capitalize">
                              pick
                             <input type="date" className="cursor-pointer" />
                            </label>
                     </div>
                          <div className="box flex">
                          <label htmlFor="" className="flex  font-bold  text-[#e00] items-center capitalize">
                              return
                             <input type="date" className="cursor-pointer" />
                            </label>
                     </div>
                       <button className='bg-[#d00] text-white py-3 px-2  text-[18px] text-center'>book now</button>
                    </div>

                 </form>
             </div> 
             
            </div>

      
    </Container>
  )
}

export default Calander