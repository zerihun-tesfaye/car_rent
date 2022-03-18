import React,{useState,useEffect} from 'react'
import {FaShoppingBag} from 'react-icons/fa'
import navdata from '../../data/nav'
import {Link} from 'react-router-dom'
import Button from '../../components/button/Button'
 import {Container}from '../navbar/Navstyle'
 import '../../index.css'
function Nav() {
  const [navbar, setNavbar] = useState(false)
  const [show, setshow] = useState(false)
     
  const handleClick=()=>{
     setshow(!show);
      console.log(show);
  }
  const closeshow=()=>{
     setshow(false);
  }

  // 
  const changeBackground = () => {
    if (window.scrollY >=60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground)
  })
  return (
    <Container className={navbar ? ' conactive   	 ':' containerr'}>
        <nav className="flex container  justify-between items-center ">
        <div className="toggle " onClick={()=>handleClick(!show)}>
            <svg className="w-[2rem] text-white h-[2rem]" fill="none" stroke="currentColor" 
               viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path stroke-linecap="round" stroke-linejoin="round" 
               stroke-width="2" d="M4 8h16M4 16h16">
              </path></svg>
          </div>
           <div className="logo">
                    <Link to="/" className=" flex items-center  text-white text-md font-bold gap-1 ">
                       <span className="text-[#d00] text- bold text-2xl"> G </span>ear
                    </Link>
                  </div>
              <div className={show ? " active navMenu ":"navMenu"}>
             <ul className=' gap-5 items-center  capitalize text-white text-base '>
            {
           navdata.map((item, index)=>{
             return(
               <>
                <li key={index} className="list-none"onClick={()=>closeshow(false)}>
                 <Link to={item.url}>
                <span>{item.title}</span>
              </Link></li>
              </>
             )
            })
            
          }
           <div className=" text-white">
                  <Link to="/upload"onClick={()=>closeshow(false)}>
                    <Button/>
                  </Link> 
                 </div>
            </ul>
            </div>
               <div className=" ">
                 <a href='/cart' className="flex"><FaShoppingBag size={"28px"} color={"#fff"}/></a>
               </div>
              {/* bag */}
         </nav>
       </Container>
        )
      }


export default Nav;