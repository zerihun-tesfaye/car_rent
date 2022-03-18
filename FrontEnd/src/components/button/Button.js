import React from 'react'
import styled from 'styled-components'

function Button() {
  return (
    <Container>
        <button className="btn">Upload</button>
    </Container>
  )
}

const Container=styled.button`
   width:100%;
   align-items: center;
    .btn{
      display:inline-block;
      padding:5px 12px;
      margin:2px 4px;
      border-radius:5px;
      background:#008000;
      transition:all 0.4s;
       &:hover{
         opacity:0.7;
       }
    }
 `

export default Button