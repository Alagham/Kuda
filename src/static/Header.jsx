import { MdArrowDropDown } from "react-icons/md";
import styled from "styled-components";
import NavLogo from "../assets/nav-logo.png"
import Flag from "../assets/nigeria.png"
import { IoReorderTwoOutline } from "react-icons/io5"
import {Link} from 'react-router-dom'
import { useState } from 'react';
import Sidebar from './SideBar';

const Header = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    console.log(toggle);
    

    return ( 
        <>
        <Container>
            <LogoNav>
                <Logo>
                    <img src={NavLogo} alt="" />
                </Logo>
                <Navigations>
                    <Link to="/"> 
                    <nav>
                        <span>Personal</span>
                        <MdArrowDropDown size={20}/>
                    </nav>
                    </Link>
                    <Link to="/business">
                    <nav>
                        <span>Business</span>
                        <MdArrowDropDown size={20}/>
                    </nav>
                    </Link>
                    <Link to="/companies">
                    <nav>
                        <span>Company</span>
                        <MdArrowDropDown size={20}/>
                    </nav>
                    </Link>
                    <nav>
                        <span>Help</span>
                        <MdArrowDropDown size={20}/>
                    </nav>
                </Navigations>
            </LogoNav>
            <Buttons>
                <SignIn>Sign In</SignIn>
                <Link to="/companies">
                <JoinBtn> Join Kuda</JoinBtn>
                </Link>
                <ConBtn>
                    <img src={Flag} alt="" />
                </ConBtn>
                <SideNav onClick={handleToggle} >
                    <IoReorderTwoOutline />
                </SideNav>
            </Buttons>
        </Container>
         {toggle === false ? null : <Sidebar toggle={toggle} setToggle={setToggle} />}
         </>  
    );
};
 
export default Header;

const Container = styled.div`
width:100%;
display:flex;
/* padding-left: 20px;
padding-right: 20px; */
justify-content:center;
align-items:center;
gap:20%;
height:64px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
background-color:#fff;
position:fixed;
z-index:99;
/* justify-content:center; */
`
const LogoNav = styled.div`
display:flex;
align-items:center;

`
const Buttons = styled.div`
display:flex;
align-items:center;
gap:10px;
`
const Logo= styled.div`
margin:0px 80px 0px 50px;
img{
    width:70px;
}

`
const Navigations= styled.div`
display:flex;
justify-content:center;
align-items:center;
text-decoration:none;
border:2px solid gray;

nav{
    color:#40196d;
    display:flex;
    align-items:center;
    margin:0px 20px;
    text-decoration:none;
}

span{
    font-size:13px;
    font-weight:600;
    margin-right: 2px;
    text-decoration:none;
}


@media (max-width:800px){
    display:none;
}

`
const SignIn = styled.button`
background-color: transparent;
border:none;
outline:none;
font-weight:600;
color:#40196d;

@media (max-width: 800px) {
    display: none;
}
`
const JoinBtn = styled.button`
width:120px;
height:40px;
border-radius:10px;
outline:none;
border:none;
font-weight:700;
color:#fff;
background-color:#40196d;
margin:0px 25px;
transition: transform 0.3s ease-in-out;

@media (max-width: 800px) {
    display: none;
}
`
const ConBtn = styled.button`
background:none;
border:none;
outline:none;
height:30px;
width:30px;
align-items:center;
border-radius:50%;
background-color:#b2dbca;
margin: 50px;
img{
    width:15px;
    height:15px;
    border-radius:px;
    
}
`

const SideNav = styled.div`
display:none;
font-size:30px;
margin-left:-30px;

@media (max-width: 800px){
    display:flex;
    align-items:center;
    cursor:pointer;
}
`