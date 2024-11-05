import styled from 'styled-components'
import React from 'react'
import Image from "../assets/join-img.png"
const join = () => {
  return (
    <Container>
        <body>
            <left>
                <h1>The money app for Africans.</h1>
                <p>Save, spend, send and invest money across borders.</p>
                <button>Join Kuda</button>
            </left>
            <right>
                <img src={Image} alt="" />
            </right>
        </body>
    </Container>
  )
}

export default join;
const Container= styled.div`
  max-width: 850px;
    margin: 0 auto;
    padding: 3em;
    background-Color:#eff1ff;
    margin-top:100px;
    border-radius:5px;
    box-shadow: rgba(80, 80, 91, 0.1) 0px 5px 24px 0px;
    margin-bottom:100px;
body{
    display:flex;
    /* border:1px solid green; */
    justify-content:center;
    
}

h1{
    width:70%;
    color:#40196d;
}
p{
    font-size:14px;
}
button{
    background-color:#40196d;
    color:#fff;
    width:150px;
    height:50px;
    border-radius:10px;
    z-index: 1;
    border:none;
}

left{
    /* border:1px solid blue; */
}

right{
    /* border:1px solid green; */

    img{
        width:400px;
        margin-bottom:0px;
    }
}

`