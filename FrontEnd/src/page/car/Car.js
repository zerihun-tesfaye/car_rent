import React from 'react'
import Cars from '../../components/car/Car'
import styled from 'styled-components'
import Search from '../../components/search/Search'
import CarList from '../../components/carlist/CarList'


function Car() {
  return (
    <Container>
        <Cars/>
        <Search/>
        <CarList/>
    </Container>

  )
}
const Container=styled.div`
 width:100%;
`;

export default Car