import React from 'react'
import {Container, Row,Card} from './Carliststyle'
import carused from '../../data/Used'

const CarList = () => {
  return (
    <Container>
      <Row>
        {
        carused.map((item,index)=>{
          return(

     <Card key={index}>
           <div className='image-car'>
            <img src={item.car} alt="" />
          </div>
          <div className="content  capitalize">
               <div className="text px-2">
                  <h3 className="price capitalize text-md tracking-wide py-2">{item.price}</h3>
                  <h4 className="carname capitalize text-lg tracking-widest">{item.carname}</h4>
                  <p className="description px-2">{item.Description}</p>
               </div>
                <div className="btn-g px-2 capitalize">
                   <span className="used">{item.btnused}</span>
                </div>
          </div>
        </Card>
        
          )
        })
        }
      </Row>

    </Container>
  )
}

export default CarList;