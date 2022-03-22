import React from 'react'
import {Container,Card} from '../carlist/Carliststyle'
import img1 from '../../assets/image/car5.jpg'
import img2 from '../../assets/image/car7.jpg'
import img3 from '../../assets/image/car80.jpg'
import '../../index.css'


const Tab = () => {
  return (
    <Container className="justify-center flex items-center">
      <div className=' row justify-center flex gap-6 py-8'>
      <Card>
           <div className='image-car'>
            <img src={img1} alt="" />
          </div>
          <div className="content capitalize">
               <div className="text px-2">
                  <h3 className="price capitalize text-md tracking-wide py-2">300/day</h3>
                  <h4 className="carname capitalize text-lg tracking-widest">toyota</h4>
                  <p className="description px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aliquid!</p>
               </div>
                <div className="btn-g px-2 capitalize">
                   <span className="used">new</span>
                </div>
          </div>
        </Card>
      <Card>
           <div className='image-car'>
            <img src={img2} alt="" />
          </div>
          <div className="content capitalize">
               <div className="text px-2">
                  <h3 className="price capitalize text-md tracking-wide py-2">300/day</h3>
                  <h4 className="carname capitalize text-lg tracking-widest">toyota</h4>
                  <p className="description px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aliquid!</p>
               </div>
                <div className="btn-g px-2 capitalize">
                   <span className="used">used</span>
                </div>
          </div>
        </Card>
      <Card>
           <div className='image-car'>
            <img src={img3} alt="" />
          </div>
          <div className="content capitalize">
               <div className="text px-2">
                  <h3 className="price capitalize text-md tracking-wide py-2">300/day</h3>
                  <h4 className="carname capitalize text-lg tracking-widest">toyota</h4>
                  <p className="description px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aliquid!</p>
               </div>
                <div className="btn-g px-2 capitalize">
                   <span className="used">used</span>
                </div>
          </div>
        </Card>
     </div>

    </Container>
  )
}


export default Tab;