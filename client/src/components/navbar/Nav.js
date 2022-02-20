import React from 'react'
import {FaFacebook,FaLinkedinIn,FaShoppingBag} from 'react-icons/fa'
import styled from 'styled-components'
function Nav() {
  return (
    <Container className='h-[40px] fixed bg-transparent  px-12 py-5'>
      <h1 className='text-white font-bold capitalize text-base'>Zeta<span className='capitalize text-base font-bold text-button'>Hut</span></h1>

      <div className='flex gap-5 capitalize text-white text-base font-bold'>
      <a href='#/'>Cars</a>
      <a href='#/'>Features</a>
      <a href='#/'>Blogs</a>
      </div>

      <div className='flex gap-4 justify-center'>
      <a href='#/'><FaShoppingBag size={"28px"} color={"#fff"}/></a>
      <a href='#/'><FaFacebook color={"#3b5998"}/></a>
      <a href='#/'><FaLinkedinIn color={" #0e76a8"}/></a>

      </div>
    </Container>
  )
}
const Container=styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content:space-between;
`
export default Nav