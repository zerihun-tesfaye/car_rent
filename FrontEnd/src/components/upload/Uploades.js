import React from 'react'
import {Container,Main} from './uploadstyle'
// import img1 from '../../assets/image/plus.png'
const Uploades = () => {
  return (
    <Container >
       <Main>
          <form action="">
              <div className="firset flex gap-3">
                 <div className="box">
                 <span>Price</span>  
                 <input type="number"placeholder='price'/>               
             </div>
             <div className="box">
                <span>modal</span>                 
                <input type="text" placeholder="model" name="model"/>
               </div>
              </div>
              <div className="firset flex gap-3">

            
             <div className="box">
                <span>car name</span>                 
                <input type="text" placeholder="car name" />
             </div>
             <div className="box">
                <span>year</span>                 
                <input type="number" placeholder="year" />
                </div>
               </div>
               {/*  */}
             <div className="box flex">
                <span>description</span>                 
                <textarea name="" id="" cols="30" className="rounded-md" placeholder="description" rows="5"></textarea>
             </div>
             {/*  */}
             <div className="drag">
                  <div className="file-in">
                     <input type="file" />
                      <button> <i className="fa fa-upload"></i>upload</button>
                    </div>
                      <div className="sf flex gap-2">
                        <p className="capitalize tracking-wide semi-bold text-md">support files:</p>
                       <p className="text-sm">JPG,SVG,PNG</p>

                    </div>
              </div>
            
              {/*  */}
              <button className="flex items-center w-full h-[42px] rounded-sm capitalize tracking-wide text-lg bg-[#c00] text-[#ddd]  justify-center">upload</button>
          </form>
      </Main>
    </Container>

         
  )
}

export default Uploades;