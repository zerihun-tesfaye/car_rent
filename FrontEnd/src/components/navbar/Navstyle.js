import styled from 'styled-components'
// 
 export const Container=styled.div`
 width:100%;
 z-index:100;
 top:0;
 left:0;
 transition:all 0.3s;

 .container{
      max-width:1100px;
      margin:auto;
      width:100%;
 }
  
   nav{
      display: flex;
      justify-content:space-between;
      align-items:center;
      height:100%;
      
       @media screen and (max-width:970px){
                padding-left:.344rem;
                padding-right:.344rem;  
             }
         .toggle{
            display:none;
             @media (max-width:970px){
                display:block;
             }
         }
       }
      
    
       
  
      
     /*  ul*/
     .navMenu{
        align-items:center;
        justify-content:space-between;
        width:100%;
        flex-wrap:wrap;  
        
        ul{
           display: flex;
           list-style: none;
           flex-direction:row;
           justify-content:center;
           text-align:center;
           align-items: center;
           width:100%;
            .bag{
              display:block;
              @media screen and (max-width:970px){
                 display:none;
              }

            }

           @media screen and (max-width:970px){
              justify-content: center;
              flex-direction:column;
              justify-content:center;
              align-items:start;
              width:100%;
              margin-left:1rem;
               
            }

        }
        @media screen and (max-width:970px){
           position:fixed;
           top:3rem;
           left:-100%;
           margin:0 auto;
           background-color:#222529;
           width:10.9rem;
           transition:  all 0.9s;
           z-index:500;
           padding:2rem 0;
           border-radius:3px;
           border:none;
           outline:none;
           flex-direction :column;
           
        }
        
       
      }
      /* end nav */
     
   .active{
    left:0;
    }
}  
 
`