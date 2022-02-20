import React,{useState,useEffect} from 'react'
import {FaFacebook,FaLinkedinIn,FaShoppingBag} from 'react-icons/fa'
import styled from 'styled-components'
function Nav() {
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })
  return (
    <Container className={navbar ? 'h-[60px] fixed bg-iconcolor px-12 py-15  items-center z-50':'h-[60px] fixed items-center  bg-transparent   px-12 py-15'}>
      <h1 className='text-white font-bold capitalize text-base'>Zeta<span className='capitalize text-base font-bold text-button'>Hut</span></h1>

      <div className='flex gap-5 capitalize text-white text-base font-bold'>
      <a href='#/'>Cars</a>
      <a href='#/'>Features</a>
      <a href='#/'>Blogs</a>
      </div>

      <div className='flex gap-4 justify-center '>
      <a href='#/'><FaShoppingBag size={"28px"} color={"#fff"}/></a>
      <a href='#/' className='justify-self-center '><FaFacebook color={"#3b5998"} size={"24px"}/></a>
      <a href='#/' className='justify-self-center '><FaLinkedinIn color={" #0e76a8"} size={"24px"}/></a>

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