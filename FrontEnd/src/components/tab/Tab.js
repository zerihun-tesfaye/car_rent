import React,{useState} from 'react'
 import styled from 'styled-components'
  import New from './New';
  import Used from './Used';
 
const Tabc = () => {
  
   const [active,setActive]=useState(1);
    const handleClick=(index)=>{
       setActive(index);
    }
  return (
    <Container>
         
          <div className="content-con">
            <div className="tab capitalize">
             <button className={active === 1 ? "tab active-tab":"tab"}
              onClick={()=>handleClick(1)}
             >Used</button>
             <button className={active === 2 ? "tab active-tab":"tab"}
               onClick={()=>handleClick(2)}>new</button>
               </div>

                  <div className={active === 1 ? "  active-con":"driver"}>
                     <Used/>
                  </div>
                  <div className={active === 2 ? " active-con":"driver"}>
                      <New/>
                    </div>
               </div>
    </Container>
  )
}

const Container=styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;

/*  */
  .content-con{
    display: flex;
    flex-direction: column;
    margin:1rem 0;
    .tab{
       display: flex;
       align-items: center;
       padding: 8px 10px;
       border-radius: 6px;
       justify-content: center;
       align-items: center;
       gap:2rem;
       text-transform   :capitalize ;
        button{
          background-color:#2F3133;
          padding: 3px 10px;
          display:inline-block;
          text-align: center;
          align-items: center;
          justify-content: center;
          color:#ffffff;
        }
        .active-tab{
          color: white;
          background: #d00;
          padding: 3px 10px;
          border-radius:5px;
          border:none;
          color: white;
          
           &:hover{
             opacity:0.5;
           }
          &:before{
          content: "";
          display: block;
          position: absolute;
          top: -5px;
          left: 50%;
          transform: translateX(-50%,-50%);
          height: 5px;
          background: rgb(88, 147, 241);
          transition: all 0.3s ease-in-out;
          background-color:#edda;

          }
        }
    
    }
    .driver{
      display: none;
      width: 100%;
      height: 100%;
    }
    .active-con{
      display: flex;
      opacity: 0.7;
      transition: all:  0.3s ease-in;
    }
  }     
       
`;
export default Tabc