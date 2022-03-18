import React from 'react'
import Cars from '../../components/car/Car'
import styled from 'styled-components'


function Car() {
  return (
    <Container>
        <Cars/>
    </Container>

  )
}
const Container=styled.div`
 width:100%;
 z-index:100;
`;

export default Car