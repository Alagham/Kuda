import styled from 'styled-components'
import Faruk from "../assets//Fuad-img.jpg"
import Hamzah from "../assets/prop-img.jpg"
import Rash from "../assets/Rash-img.jpg"
import Soft from "../assets/soft.jpg"
import Hamzy from "../assets/hamzy.jpg"
import Sot from "../assets/sot3.jpg"
// import fatimah from '../assets/fatimah.jpg'

const Testimonial = ({text, profileImage, profileName})=>{
    return(
        <>
        <Container>
            <Wrapper>
            <Card>
                <p className='text'>Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah</p>
                <Profile>
                <img src={Hamzah} alt="" />
                <p>Mu'azu Muhammad Kudu</p>
                </Profile>
            </Card>
            <Card>
                <p className='text'>Just joined the best Digital Bank in Nigeria I have no complaints whatsoever since i started using Kuda</p>
                <Profile>
                <img src={Faruk} alt="" />
                <p>Tomisinv</p>
                </Profile>
            </Card>
            <Card>
                <p className='text'>Never thought an app would stylish become my everyday way to bank and have access to physical cash.
                @kudabank is sleek</p>
                <Profile>
                <img src={Rash} alt="" />
                <p>Babajide Duroshola</p>
                </Profile>
            </Card>
            <Card>
                <p className='text'>This is the best banking app! I’m enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I’ve made kuda my main bank account and I’m gonna refer all my friends</p>
                <Profile>
                <img src={Soft} alt="" />
                <p>@RealSOK_</p>
                </Profile>
            </Card>
            <Card>
                <p className='text'>I like the fact that kuda Microfinance Bank doesn’t only run a no fee policy and 25 free transfers in a month but you can only create a budget plan to control your spending pattern. Really really nice!!</p>
                <Profile>
                <img src={Hamzy} alt="" />
                <p>Adebambo Oyekan</p>
                </Profile>
            </Card>
            <Card>
                <p className='text'>I highly recommend this app, it does what it says "The bank of the free". I have received my kuda card.</p>
                <Profile>
                <img src={Sot} alt="" />
                <p>
                Ifeanyichukwu Obaji</p>
                </Profile>
            </Card>
            </Wrapper>
        </Container>
        </>
    )
}
export default Testimonial

const Container = styled.div`
width: 100%;
margin-top: 2em;
margin-bottom: 5em;
overflow-x: hidden;
margin-bottom: 5em;

`
const Wrapper = styled.div`
 display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    animation: scroll 10s linear infinite; 
    

    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-20%);
        }
    }

`
const Card = styled.div`
min-width: 300px;
    max-width: 300px;
    height:200px;
    border: none;
    border-radius:5px;
    padding: 10px 15px;
    margin: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    flex-direction: column;
    font-size:14px;
`
const Profile = styled.div`
display: flex;
gap: 30px;
p{
    line-height: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    /* color: floralwhite; */
    /* background-color: red; */
}
img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
`