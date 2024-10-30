
import styled from 'styled-components';

function More ({Image, Header, Paragraph}){
    return(
        <Container>
            <img src={Image} alt="" />
            <h1>{Header}</h1>
            <p>{Paragraph}</p>
            <a href="">Learn more</a>
        </Container>
    );
};
export default More;
const Container = styled.div`
     width: 265px;
    padding: 20px;
    display: block;
    font-size: 16px;
    /* font-weight: 800; */
    box-shadow: rgba(80, 80, 91, 0.1) 0px 5px 24px 0px;
    border-radius: 10px;
     
    h1{
        color:#40196d;
    }

    p{
        text-decoration:none;
    }
`