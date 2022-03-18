import styled from 'styled-components'
// 
 export const Container=styled.div`
 width:100%;
 z-index:1000;
 top:0;
 left:0;
 z-index:100;
 transition:all 0.3s;


   nav{
      display: flex;
      justify-content:space-between;
      align-items:center;
      height:100%;
      margin-left:2.5rem;
      margin-right:2.5rem;
       @media (max-width:970px){
                margin-left:.341rem;
                margin-right:.341rem;  
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
        flex-direction:column;
        
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
              align-items:stretch;
              width:100%;
              margin-left:1rem;
               
            }

        }
        @media screen and (max-width:970px){
           position:fixed;
           top:3rem;
           left:-100%;
           margin:0 auto;
           background-color:#daa;
           width:10.9rem;
           box-shadow:0 0 4px rgba(0,0,0,.5);
           transition:  all 0.3s;
           z-index:50;
           padding:2rem 0;
           border-radius:3px;
           flex-direction :column;
           
        }
        
       
      }
      /* end nav */
     
   .active{
    left:0;
    }
}  
 
`