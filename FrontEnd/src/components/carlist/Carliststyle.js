import styled from 'styled-components'

 export const Container=styled.div`
  width:100%;
  overflow:hidden;
 `;
 export const Row=styled.div`
   width:100%;
   max-width:1100px;
   align-items:center;
   margin:0 auto;
   display:grid;
   gap:1.3rem;
   margin-top:2rem;
   grid-template-columns: repeat(4,1fr);
   @media screen and (max-width:970px){
     width:100%;
     grid-template-columns: repeat(1,1fr);
     justify-content:center ;
     align-items: center;
     display:flex;
     flex-direction:column;

   }
 
 `;
 export const Card=styled.div`
  width:290px;
  height:auto;
  background-color:#222;
  transition:all 0.3s ease-in-out;
  border-radius:15px;
  cursor:pointer;
  overflow:hidden;
  display:flex;
  place-content: center;
  flex-direction:column;
   @media screen and (max-width:970px){
    
     justify-content:center ;
     align-items: center;

   }

  &:hover{
     opacity: .7;
      transform: translateY(-7px);
      box-shadow:0 0 8px rgba(0,0,0,.55) ;
  }
   .image-car{
     width:290px;
     height:160px;
      img{
        width:100%;
        height:100%;
        object-fit:cover;
        border-radius:15px 15px 0 0;
      }
    }
    .content{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 14px;
      width:100%;
      align-items: start;
       .btn-g{
         display:flex;
         color:white;
         align-items:center ;
         justify-Content:space-between;
         padding-bottom:.44rem;
         span{
           display:inline-block;
           padding: 4px 20px;
           margin:15px 4px;
           background-color:#800000;
           border-radius:5px;
           transition:all 0.3s;
           

         }

       
        }
        .text{
          width:100%;
            p{
            word-wrap:break-word;
            padding-top:4px;
            font-size:.852rem;
            align-items:center;
            justify-content:center;
            font-weight:300;
            text-transform:capitalize;
            padding:0 .322rem;
         }
        }
    }
 `;