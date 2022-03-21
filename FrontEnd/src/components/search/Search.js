import React from 'react'
import {Container,Content}from './SearchStyle'
function Search() {
  return (
    <Container>
        <Content>
           <div className="type flex 
                        items-center gap-2 py-8 
                        capitalize  tracking-wider text-gray-50">
                       <h2 className="text-lg 
                          text-center
                        justify-center semi-bold flex">catagory :</h2>
               <select name="" id="">
                  <option value="" >all</option>
                  <option value="1">Audi</option>
                  <option value="2" >BMW</option>
                  <option value="3" >Citroen</option>
                  <option value="4" >Ford</option>
                  <option value="5" >Honda</option>
                  <option value="6" >Jaguar</option>
                  <option value="7" >Land Rover</option>
                  <option value="8" >Mercedes</option>
                  <option value="10" >Nissan</option>
                  <option value="11" >Toyota</option>
                  <option value="11" >vitz</option>
                  <option value="11" >tesla</option>
               </select>
           </div>
           <form action="">
            <div className="search">
              <div className="box">
                 <input type="text" placeholder='search for brand,model' />
                 <button><i class="fa fa-search" aria-hidden="true"></i></button>
              </div>
            </div>
           </form>
        </Content>  
    </Container>

  )
}


export default Search