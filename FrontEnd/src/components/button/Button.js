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
      padding:3px 12px;
      margin:2px 4px;
      border-radius:5px;
      background:#d00;
    }
 `

export default Button