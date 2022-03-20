import styled from "styled-components";
import img1 from '../../assets/image/car4.jpg'

export const Container = styled.div`
   background-color:rgb(0,0,0,.6) ;
    height: 65vh;
    top: 0;
    left: 0;
    position: relative;
    width:100%;
    overflow: hidden;
     &::before {
      content:"";
      background:url(${img1});
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: -1;
      position: absolute;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      object-fit:cover;
    }
   .bg{
     height:70vh;
     img{
       width: 100%;
       height: 100%;
       object-fit:cover;
     }
   }
   /*  */
    .hero{
      width:100%;
      .control{
         gap:2rem;
         height:50px;
         box-sizing:border-box;
         border-radius:0.125rem;
         background:#ffffff;
         margin:0 auto;
          @media screen and (max-width:970px){
             flex-direction:column;
             width:100%;
             margin:0 auto;
             height:100%;
             background:none;
            }
             
           
         .box{
           display:flex;
           align-items:center;
           height:100%;

           @media screen and (max-width:970px){
             flex-direction:column;
             padding:10px 0;
             background:#ffffff;
             border-radius:5px;

           }
            label{
            @media screen and (max-width:970px){
             padding:2px 10px;
             width:100%;
           }
              input{
                border:none;
                outline:none;
                background:none ;
                color:#000;
                padding:0 1rem;
                display:flex;
                align-items:center;
                width:100%;
                padding:2px 10px;
                margin:2px 5px;

                
              }
            }
         }
      }
    }
  
`
