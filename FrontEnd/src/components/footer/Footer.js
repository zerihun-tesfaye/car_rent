import React from 'react'
import {FaFacebook,FaLinkedinIn} from 'react-icons/fa'
import styled from 'styled-components';
function Footer() {
  return (
    <Container className=' flex flex-col mt-24'>
      <Content className='flex px-5 mt-10 justify-evenly'>
          <h1 className=' font-bold capitalize text-base'>Zeta<span className='capitalize text-base font-bold text-button'>Hut</span></h1>
          <div className='flex flex-col'>
            <h1 className='text-base  font-bold capitalize'>Menu</h1>
            <a className='mt-3 text-sm font-normal ' href='/'>cars</a>
            <a className='mt-1 text-sm font-normal ' href='/'>Features</a>
            <a className='mt-1 text-sm font-normal ' href='/'>Contact</a>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-base  font-bold capitalize'>Resource</h1>
            <a className='mt-2 text-sm font-normal' href='/'>stopCenter</a>
            <a className='mt-1 text-sm font-normal ' href='/'>Blogs</a>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-base  font-bold capitalize'>Get in touch</h1>
              <div className='flex gap-2 mt-1 '>
              <a href='#/' className='justify-self-center '><FaFacebook color={"#3b5998"} size={"18px"}/></a>
                <a href='#/' className='justify-self-center '><FaLinkedinIn color={" #0e76a8"} size={"18px"}/></a>
              </div>
          </div>


      </Content>
      <div className='mt-20 w-full text-center'>
      <h1 className='text-sm font-light'>@Copy2022 zetahut.com All Right Reserved</h1>
      </div>
    </Container>
  
  )
}
const Container = styled.div`
  display: flex;
  
  @media screen and (max-width:970px){
     flex-direction: flex;
  }
`;
const Content = styled.div`
  display: flex;
  @media screen and (max-width:970px){
     /* flex-direction: column; */
  }
`;

export default Footer