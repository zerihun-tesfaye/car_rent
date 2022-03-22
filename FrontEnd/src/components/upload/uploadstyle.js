 import styled from 'styled-components'

 export const Container=styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;
  padding: 5px 10px;

 `;
 export const Main=styled.div`
  max-width: 400px;
  width: 100%;
  margin: 2rem auto;
  background-color:#17202A;
  padding: 25px;
  border-radius:15px;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 100%;
  transition:all 0.3s ease-in-out;
   form{
     width: 100%;
     height: 100%;
     .box{
       width: 100%;
        textarea{
          border:none;
          outline:none;
           background-color:#566573 ;
           padding: 0.1rem 1rem;
           text-transform: capitalize;
           color: white;

        }
        span{
        text-transform: capitalize;
        font-size:18px ;
        letter-spacing: .5px;
        padding-bottom: .44rem;  
        padding-left: .33rem;
        color: #ABB2B9;
        }
       margin:1rem 0;
       display:flex;
       flex-direction: column;
        input{
          width: 100%;
          height: 40px;
          padding: 0 .333rem;
          border-radius:4px;
          background-color:#283747 ;
          color: #F2F4F4;
          border:none;
          outline:none;
          &::placeholder{
              text-transform: capitalize;
              letter-spacing: .5px;
          }
        }
     }
   }
   .drag{
     border:1px dashed #566573;
     display:flex;
     align-items: start;
     flex-direction:column;
      margin-bottom:1rem;
      border-radius:4px;
      padding: 1em 1rem;
      .file-in{
        position: relative;
        margin-bottom:1rem;
        input{
          position: relative;
          max-width: 200px;
          margin:1rem 0;
          z-index:50;
          height:25px;
           cursor:pointer;
           opacity:0;
            outline:none;
            border:none;
        }
        button{
          position: absolute;
          align-items: center;
          display:flex;
          top: 0;
          cursor:pointer;
          left:0;
          width:100%;
          height:100%;
          margin: 1rem 0;
          z-index: 10;
          color: #fff;
          border-radius: 5px;
          background: #212F3C;
          justify-content: center;
          outline:none;
          border:none;
          cursor: pointer; 
          gap:.331rem;
          transition: background-color 0.3s;
          box-shadow:0 0 6px rgba(0,0,0,.7)
          
        }
      }
   }
`;