import styled from 'styled-components'
export const Container = styled.div`
   width:100%;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
  flex-direction:column;
  .pick{
    width:100%;
  max-width:1100px;
  margin:0 auto;
  }
`
;
export const Subcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:100%;
  max-width:1100px;
  margin:0 auto;
    @media screen and (max-width:970px){
        flex-direction: column-reverse;
         width:100%;
         padding: 25px 0;
        justify-content: center;
   }
 
   .car{
    max-width:500px;
    min-width:200px;
    width:100%;
    
    @media screen and (max-width:970px){
       width:100%;
       height:100%;
   }
      img{
        width:100%;
        height:100%;
        object-fit:cover;
      }
   }
   .contents{
      display: inline-block;
      align-items: center;
      flex-direction:column;
      justify-content: center;
      width:100%;
      @media screen and (max-width:970px){
      flex-direction: column;
       width:100%;
       justify-content: center;
       align-items: center;
       margin:0;
   }
      h2{
        color: pink;
      }
      .btns{

       &:hover{
         opacity:0.7;
       }
   }
`
;