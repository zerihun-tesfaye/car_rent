import React from 'react'
 import {Container}from './Calanderstyle'
const Calander = () => {
    // const [value, setValue] = useState(new Date());

  return (
    <Container>
           
            <div className="hero">
             <div className='  con-t justify-center flex items-center flex-col absolute top-[40%] left-[50%] translate-y-[-50%] translate-x-[-50%] mb-10'>
                 <h3 className="py-2 text-2xl capitalize tracking-wide font-bold">welcome back</h3>
                 <form action="/car" method="post">
                   <div className="control flex  relative">
                         <div className="box flex  px-2">
                          <label htmlFor="" className="flex text-[#000080] items-center capitalize">
                               pick
                             <input type="date" className=""name="" value="hi" />
                            </label>
                     </div>
                          <div className="box flex">
                          <label htmlFor="" className="flex text-[#e00] items-center capitalize">
                              return
                             <input type="date" className="" />
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