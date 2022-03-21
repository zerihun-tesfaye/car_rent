import styled from 'styled-components'

export const Container=styled.div`
  width:100%;
`
export const Content=styled.div`
   width:100%;
   max-width: 1100px;
   margin:0 auto;
   display:flex;
   align-items:center;
   justify-content: space-between;
    @media screen and (max-width:970px){
      display:inline-block;
      flex-direction:column;
      justify-content: center;
      margin:0 auto;
    }
   .type{
    @media screen and (max-width:970px){
      justify-content:center;
      align-items:center;
      display:flex;
      margin:0 auto;
       }
     select{
        padding:5px 0;
        border-radius:3px;
        border:none;
        outline:none;
        max-width:7rem;
        justify-content:center;
        align-items:center;
        font-weight:400 ;
        text-transform:capitalize;
        letter-spacing:0.5px;
        background:	#27292C;
        color:#ffffff;
        font-weight:bold;
        height:40px;
        font-size:1rem;
      }
      
     }
     /* search */
       .search{
          @media screen and (max-width:970px){
           padding:0;
           width:100%;
           margin:auto;
           justify-content:center;
           align-items:center;
          
          }
         .box{
           position:relative;
           width:300px;
           display:flex;
           align-items:center;
             @media screen and (max-width:970px){
               width:290px;
                justify-content:center;
               align-items:center;
               display:flex;
               margin:0 auto;
    
          
          }
           input{
             width:100%;
             height:40px;
             border-radius:3px;
             border:none;
             outline:none;
             background:#DCDCDC;
             padding-left:1rem;
             text-transform:capitalize;
             color:#000;
             &::placeholder{
               padding-left:.555rem;
               color:	#A9A9A9;
               text-transform:capitalize;
             }
           }
           button{
             position:absolute;
             right:.441rem;
             height:40px;
             color:#000;
             font-weight:bold;
             font-size:1.2rem;
           }
         } 
       }
     
   }

`