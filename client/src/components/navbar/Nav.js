import React,{useState,useEffect} from 'react'
import {FaFacebook,FaLinkedinIn,FaShoppingBag} from 'react-icons/fa'
import styled from 'styled-components'
import navdata from '../../data/nav'
import {Link} from 'react-router-dom'
import Button from '../button/Button'
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
        <nav className="flex justify-between items-center px-10 py-5">

       <Link to="/">
         <h1 className='text-white font-bold capitalize text-base'>Zeta<span className='capitalize text-base font-bold text-button'>Hut</span></h1>
       </Link>

      <div className='flex gap-5 capitalize text-white text-base font-bold'>
        {
          navdata.map((item, index)=>{
            return(
              <li key={index} className="list-none">
           <Link to={item.url}>
               <span>{item.title}</span>
            </Link>
          </li>

          )
          })
          }
       </div>
       <div className='flex gap-6 justify-center '>
          <div>
            <Link to='/upload'>
               <Button/>
            </Link>
         </div>
            <a href='#/'><FaShoppingBag size={"28px"} color={"#fff"}/></a>
            <a href='#/' className='justify-self-center '><FaFacebook color={"#3b5998"} size={"24px"}/></a>
            <a href='#/' className='justify-self-center '><FaLinkedinIn color={" #0e76a8"} size={"24px"}/></a>
           </div>
         </nav>
       </Container>
        )
      }
const Container=styled.div`
 width:100%;
 z-index:1000;
 position:fixed;
  
`

export default Nav