import styled from "styled-components"
import tec from '../assets/TEC.png'
import forum from '../assets/economic-forum.png'
import fintech from '../assets/fintech.png'
import bbc from '../assets/bbc.png'
import cnbc from '../assets/cnbc.png'
import euromoney from '../assets/euromoney.png'
const CompanyLogo = (props)=>{
    return(
        <>
        <Container>
            <img src={tec} alt="" />
            <img src={forum} alt="" />
            <img src={fintech} alt="" />
            <img src={bbc} alt="" />
            <img src={cnbc} alt="" />
            <img src={euromoney} alt="" />
        </Container>
        </>
    )
}
export default CompanyLogo
const Container = styled.div`
width: 100%;
gap:80px;
display: flex;
justify-content:center;
flex-wrap: wrap;
/* background-color: red; */
margin:30px;
align-items: center;

img{
    width:120px;
}
`