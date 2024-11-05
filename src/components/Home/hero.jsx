import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import styled from "styled-components";
import HeroImage from "../../assets/kuda-hero-img.png";
import CBN from "../../assets/CBN-logo.jfif";
import Ndic from "../../assets/ndic-logo.png";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <TextBox>
          <h1>The money app for Africans.</h1>
          <p>
            Make free transfers, enjoy cashless payment options and earn
            interest on your savings with Kuda.
          </p>
          <Buttons style={{ display:"flex", gap:"20px"}}>
            <button style={{backgroundColor:"black", color:"white", width:"150px", height:"50px", borderRadius:"10px"}}>
              {" "}
              <FaApple /> <span>App store</span>
            </button>
            <button  style={{backgroundColor:"black", color:"white", width:"150px", height:"50px", borderRadius:"10px"}}>
              {" "}
              <BiLogoPlayStore /> <span>Play store</span>
            </button>
          </Buttons>
          <HeroText>
            <p id="herotext">
              Fully Licensed by the CBN <img id="CBN" src={CBN} alt="" /> Deposits insured by <img id="Ndic" src={Ndic} alt="" />
            </p>
          </HeroText>
        </TextBox>
        <ImageBox>
          <img src={HeroImage} alt="Hero" />
        </ImageBox>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  /* background-color: yellow; */
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom:50px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
  const Wrapper = styled.div`
    width: 70%;
    /* background-color: pink; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin:100px;

    img {
      width: 450px;
    }
    @media (max-width: 800px) {
      width: 80%;
      img {
        margin-top: 20px;
        margin-bottom:70px;
      }
    }
  `;
const TextBox = styled.div`
  max-width: 400px;
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 800px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
  h1 {
    color: #40196d;
    font-size: 36px;
    font-weight: 800;
    line-height: normal;
  }
`;
const ImageBox = styled.div`
  img {
    @media (max-width: 800px) {
      width: 100%;
    }
  }
`;

const Buttons = styled.div`

`;

const HeroText = styled.div`
  #herotext {
    display:flex;
    justify-content:center;
    align-items:center;
   font-size:12px;
   margin-right:50px;
   
    #CBN{
      width:20px;
    }

    #Ndic{
      width:50px;
    }
  }
`;
