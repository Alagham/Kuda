import styled from 'styled-components'
import React from 'react'
import Image from "../assets/kuda-hero-img.png"

const join = () => {
  return (
    <Container>
        <left>
            <h1>The money app for Africans.</h1>
            <p>Save, spend, send and invest money across borders.</p>
            <button>Join Kuda</button>
        </left>
        <right>
            <img src={Image} alt="" />
        </right>
    </Container>
  )
}

export default join;
const Container= styled.div`
display:flex;
border:1px solid brown;
width:100%;
justify-content:center;
background-color:#eff1ff;

h1{
    width:70%;
    color:#40196d;
}

left{
    border:1px solid blue;
}

right{
    border:1px solid green;

    img{
        width:500px;
    }
}
}
`