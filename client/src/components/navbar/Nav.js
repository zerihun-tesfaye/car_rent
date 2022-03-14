import React,{useState,useEffect} from 'react'
import {FaFacebook,FaLinkedinIn,FaShoppingBag} from 'react-icons/fa'
import styled from 'styled-components'
import navdata from '../../data/nav'
import {Link} from 'react-router-dom'
import Button from '../button/Button'
function Nav() {
  const [navbar, setNavbar] = useState(false)
  const [show, setshow] = useState(false)
     
  const handleClick=()=>{
     setshow(!show);
  }
  const closeshow=()=>{
     setshow(false);
  }

  // 
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
    <Container className={navbar ? 'h-[60px] fixed bg-gray-400 px-12 py-15  items-center z-50':'h-[60px] fixed items-center  bg-transparent   px-12 py-15'}>
        <nav className="flex justify-between items-center px-10 py-5">
            <div className="toggle justify-between">
                <div className="cv flex items-center justify-between">
                    <svg className="hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" 
                    stroke-width="2" d="M4 8h16M4 16h16">
                    </path></svg>
                    <Link to="/">
                      <h1 className='text-white font-bold capitalize text-2xl'>Zeta <span className='capitalize text-2xl font-bold text-red-600'>Hut</span></h1>
                    </Link>
                  <a href='#/' className="hidden"><FaShoppingBag size={"0px"} color={"#fff"}/></a>
                </div>
             </div>
          <div className="header flex justify-between items-center">

          <div className=' link flex gap-5 justify-center items-center  capitalize text-white text-base font-bold'>
         {
          navdata.map((item, index)=>{
            return(
              <>
                <li key={index} className="list-none">
            <Link to={item.url}>
                <span>{item.title}</span>
              </Link>
              
            </li>
          
        </>
          )
          })
          }
          <Link to='/upload'>
              <Button/>
          </Link>
       </div>
       <div className=' icon flex gap-6 justify-center '>
             <a href='#/' className=" cart "><FaShoppingBag size={"28px"} color={"#fff"}/></a>
             <a href='#/' className='justify-self-center '><FaFacebook color={"#3b5998"} size={"24px"}/></a>
             <a href='#/' className='justify-self-center '><FaLinkedinIn color={" #0e76a8"} size={"24px"}/></a>
             </div>
           </div>
            
         </nav>
       </Container>
        )
      }
const Container=styled.div`
 width:100%;
 z-index:1000;
 position:fixed;
   @media screen and (max-width:978px){
     display: flex;
     width:100%;
   }
   nav{
      display: flex;
      width:100%;
      height:100%;
         @media screen and (max-width:978px){
           display: flex;
           justify-content:space-between;
           margin: 0;
          padding:0;
          

   }
    .toggle{
         display: flex;
         align-items: center;
         width:100%;
          .cv{
            display: flex;
            justify-content:space-between;
            width:100%;
            @media screen and (max-width:978px){
            display: flex;
            right: 0;
          }
          svg{
          cursor: pointer;
          width:1.7rem;
          height:1.7rem;
          color: white;
           @media screen and (max-width:978px){
            display: flex;
            right: 0;
          }
          }
          a{
             @media screen and (max-width:978px){
            display: flex;
            right: 0;
          }
          }

          }
        
        }
      .header{
         width: 100%;
         justify-content:space-between;
         display: flex;
         align-items:center;
         @media screen and (max-width:978px){
          display: flex;
          flex-direction: column;
          position:fixed;
          top: 25px;
          left: 0;
          background: #fff;
          right: 0;
          width:200px;
          z-index:100;
          color:black;
          border-radius:5px;
          gap:1rem;
          justify-content:center;
          margin:2rem 0;
         .link{
           display:flex;
           color:black;
           flex-direction:column;
           padding:0;
           margin:2rem auto;
          }
         .icon{
           gap:.731rem;
           align-items:center;
           margin-bottom:2rem;
             .cart{
                @media screen and (max-width:978px){
                display: none;
            
          }
             }
         } 
       }

    }
   }
`

export default Nav