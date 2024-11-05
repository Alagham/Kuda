import styled from 'styled-components'

const TextImage = (props)=>{
    return(
        <>
        <Container>
            <Wrapper>
                <Textimage>   
                    <h1 style={{whiteSpace: 'pre-line'}}>{props.text}</h1>
                    <p style={{fontSize:"14px"}}>{props.para}</p>
                </Textimage>

                <ImageRight>
                <img id='Imageright' style={{width:"400px"}} src={props.image} alt="/" />
                </ImageRight>
                
            </Wrapper>
        
        </Container>
        
        </>
    )
}
export default TextImage

const Container = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom:50px;
  padding: 0px 10px;
  /* background-color: blue; */
  display: flex;
  align-items: center;
  justify-content: center;
 

  


    @media screen and (max-width:800px) {
        margin: 50px;
        margin-top:200px;

       #Imageright{
            margin-top:100px;
            
        }
    }
`

const Wrapper = styled.div`
width: 80%;
margin:20px;
  /* background-color: pink; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  p{
    width:68%;
    font-size:12px;
  }

  #Imageright{
    width:100px;
    margin-right:70px;
  }

  h1{
    width:70%;
  }
@media screen and (max-width:800px) {
    width: 90%;
    /* background-color: red; */

}
`
const Textimage = styled.div`
max-width: 500px;
display: flex;
/* margin: -30px; */
flex-direction: column;
@media screen and (max-width:800px){
    max-width: 100%;
    border: 2px solid;
    align-items:center;
    text-align: center;
    font-size: 20px;
    margin: 0 -30px;

}
h1{
font-size: 33px;
font-weight: 800;
line-height: normal;
line-break: auto;
color:#40196D;
margin-bottom: -5px;
@media screen and (max-width:800px) {
    font-size: 27px;

}
}
p{
    font-size: 18px;
}
 

`
const ImageRight = styled.div`
/* display: flex;
justify-content: center;
align-items: center; */
img{
    width: 500px;
}
@media screen and (max-width:800px) {
    img{
        width: 100%;
        border: 2px solid;
        margin-bottom: 100px;
        margin-top: -50px;
    }
}
`