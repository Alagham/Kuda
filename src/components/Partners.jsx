import React from 'react'
import styled from 'styled-components'
import valar from '../assets/valar.png'
import visa from '../assets/visa.png'
import holdings from '../assets/holdings.png'
import target from '../assets/target.png'
import capital from '../assets/capital.png'

const Partners = () => {
  return (
    <>
        <Container>
            <img src={valar} alt="" />
            <img src={capital} alt="" />
            <img src={holdings} alt="" />
            <img src={target} alt="" />
            <img src={visa} alt="" />
        </Container>
    </>
  )
}

export default Partners

const Container = styled.div`
background-color:#fbfbfb;
min-width: 400px;
display: flex;
justify-content: center;
gap:50px;
flex-wrap: wrap;
margin: 50px;
img{
  width: 120px;
}
`