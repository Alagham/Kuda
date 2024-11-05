import styled from 'styled-components'
import Image from "../assets/nav-logo.png"
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiCameraOutline } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    return ( 
    
        <Container>
            <div className='container-box'>
                <div>
                    <div>
                    <img src={Image} alt="" />
                    </div>
                </div>
                <div>
                    <p id='Heading-1'>Personal</p>
                    <ul>
                        <li>
                            <a>Discover Personal</a>
                        </li>
                        <li>
                            <a>Transfer &amp;Spend</a>
                        </li>
                        <li>
                            <a>Save</a>
                        </li>
                        <li>
                            <a>Investments</a>
                        </li>
                        <li>
                            <a>Kuda card</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p id='Heading-2'>Business</p>
                    <ul>
                        <li>
                            <a>Discover Business</a>
                        </li>
                        <li>
                            <a>Business Registration</a>
                        </li>
                        <li>
                            <a>softPOS</a>
                        </li>
                        <li>
                            <a>Invoicing</a>
                        </li>
                        <li>
                            <a>POS Machine</a>
                        </li>
                        <li>
                            <a>Business Loan</a>
                        </li>
                        <li>
                            <a>Business API</a>
                        </li>
                        <li>
                            <a>Join Kuda Business</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p id='Heading-3'>Company</p>
                    <ul>
                        <li>
                            <a>Blog</a>
                        </li>
                        <li>
                            <a>Press</a>
                        </li>
                        <li>
                            <a>Join Our Team</a>
                        </li>
                        <li>
                            <a>About Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p id='Heading-4'>Help</p>
                    <ul>
                        <li>
                            <a>Get Help</a>
                        </li>
                        <li>
                            <a>Scam Awareness</a>
                        </li>
                        <li>
                            <a>FAQs</a>
                        </li>
                        <li>
                            <a>Security</a>
                        </li>
                        <li>
                            <a>Contact Us</a>
                        </li>
                        <li>
                            <a>Self Help</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p id='Heading-5'>Transparency</p>
                    <ul>
                        <li>
                            <a>Terms &amp;Conditions</a>
                        </li>
                        <li>
                            <a>Privacy Policy</a>
                        </li>
                        <li>
                            <a>Information Security Policy</a>
                        </li>
                        <li>
                            <a>Cookie Policy</a>
                        </li>
                        <li>
                            <a>Whistleblowing Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='btn'>
                <button style={{backgroundColor:"black", color:"white", width:"150px", height:"50px", borderRadius:"10px"}} className='btn1'>
                {" "}
                <FaApple /> <span>App store</span>
                </button>
                <button style={{backgroundColor:"black", color:"white", width:"150px", height:"50px", borderRadius:"10px"}}  className='btn2'>
                {" "}
                <BiLogoPlayStore /> <span>Play store</span>
                </button>
                <button style={{backgroundColor:"#40196d", color:"white", width:"150px", height:"50px", borderRadius:"10px"}}  className='btn3'> world Wide</button>
            </div>
            <div className="footer-content">
                <p style={{textAlign:"center",Color:"#40196d", fontSize:"14px" }}>Products may vary by country or market.</p>
                <div style={{ display:"flex", justifyContent:"center", maxWidth:"850px",  margin:"0 auto",  padding:"2em"}} className='list-content'>
                    <div>
                        <p style={{textAlign:"center", Color:"#40196d", fontWeight:"600", marginLeft:"-200px"}}>Contact</p>
                        <ul style={{ listStyle:"none", lineHeight:"20px"}}>
                            <li><a href="">help@kuda.com</a></li>
                            <li style={{display:"flex", gap:"20px", fontSize:"30px", color:"#40196d", marginTop:"20px"}} className='logos'>
                                <FaXTwitter style={{backgroundColor:"#eff1ff",  borderRadius:"20px", border:"2px solid #40196d"}} />   
                                <TiCameraOutline style={{backgroundColor:"#eff1ff",  borderRadius:"20px", border:"2px solid #40196d"}} />
                                <FaFacebookF style={{backgroundColor:"#eff1ff",  borderRadius:"20px", border:"2px solid #40196d"}} />
                                <FaYoutube style={{backgroundColor:"#eff1ff",  borderRadius:"20px", border:"2px solid #40196d"}} />
                                <FaMediumM style={{backgroundColor:"#eff1ff",  borderRadius:"20px", border:"2px solid #40196d"}}/>
                                <FaLinkedinIn style={{backgroundColor:"#eff1ff",  borderRadius:"20px", border:"2px solid #40196d"}}/>
                                
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p style={{textAlign:"center", Color:"#40196d", fontWeight:"600", marginRight:"10px"}}>Lagos</p>
                        <ul  style={{ listStyle:"none"}}>
                            <li>1-11 Commercial</li>
                            <li> Avenue,Yaba</li>
                            <li>Lagos,</li>
                            <li>Nigeria</li>
                        </ul>
                    </div>
                    <div>
                        <p style={{textAlign:"center", Color:"#40196d", fontWeight:"600", marginRight:"-20px"}}>London</p>
                        <ul  style={{ listStyle:"none"}}>
                            <li>5 New Street </li>
                            <li>Square,</li>
                            <li>London, EC4A </li>
                            <li>3TW,</li>
                            <li>United Kingdom</li>
                        </ul>
                    </div>
                    <div>
                        <p style={{textAlign:"center", Color:"#40196d", fontWeight:"600", marginRight:"-20px"}}>Cape Town</p>
                        <ul  style={{ listStyle:"none"}}>
                            <li>146 </li>
                            <li>Campground </li>
                            <li>Road,</li>
                            <li>Snakepit Building, Level</li>
                            <li>4,Newlands,</li>
                            <li> Cape Town</li>
                        </ul>
                    </div>
                    <div>
                        <p style={{textAlign:"center", Color:"#40196d", fontWeight:"600", marginRight:"-30px"}}>Canada</p>
                        <ul  style={{ listStyle:"none"}}>
                            <li>3080 Yonge </li>
                            <li>Street,</li>
                            <li>Suite 6060,</li>
                            <li> Toronto,</li>
                            <li>Ontario M4N </li>
                            <li>3N1</li>
                        </ul>
                    </div>
                </div>
                <div style={{ justifyContent:"center", maxWidth:"850px",  margin:"0 auto",  padding:"2em"}}>
                    <p style={{ Color:"#b3b3b6", width:"100%"}} >© 2024 Kuda Technologies Ltd (Company No.11472232). All rights reserved.</p>
                    <p style={{ Color:"#b3b3b6",}} >If you would like to find out more about which Kuda entity you receive services from, please reach out to us via the in-app chat in the Kuda app. Nigerian banking services offered by Kuda Microfinance Bank (RC796975) with registered address at 1-11 Commercial Avenue, Yaba, Lagos, Nigeria. Kuda Microfinance Bank is licensed by the Central Bank of Nigeria. Deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC).</p>
                    <p style={{ Color:"#b3b3b6",}} >UK services are offered by Kuda EMI Ltd (Company No. 13724208) with registered address at 5 New Street Square, London, EC4A 3TW, United Kingdom.</p>
                    <p style={{ Color:"#b3b3b6",}} >Canada services will be provided by Kuda Canada Technologies Limited, an Ontario corporation registered under number 1000286176, with its registered address located at 3080 Yonge Street, Suite 6060, Toronto, Ontario M4N 3N1. Kuda Canada Technologies Limited is duly registered with The Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) as a money service business, bearing registration number M23163015.</p>
                </div>
            </div>
        </Container>                       
    );
}
 
export default Footer;
 const Container = styled.div`
  border-top: 1px solid rgba(223,227,255,.5);
  margin-top: 100px;
  padding:150px;
  flex-wrap:wrap;


  .btn{
    display:flex;
    justify-content:center;
    gap:20px;
    margin-right:400px;
  }

  .btn1{
    width:100px;
    height:50px;
  }
 .container-box{
    display:flex;
    justify-content:center;
    line-height:2.5;
    max-width: 850px;
    margin: 0 auto;
    padding: 2em;


    img{
        width:100px;
    }
    p{
        text-align:center;
        color:#40196d;
        font-weight:600;

        
    }
    li{
        list-style: none;
    }

    #Heading-1{
        margin-left:10px;
    }
    #Heading-2{
        margin-left:-10px;
    }
    #Heading-3{
        margin-right:-30px;
    }
    #Heading-4{
        margin-right:20px;
    }
    #Heading-5{
        margin-right:10px;
    }
   

    .footer-content{
        .list-content{

        }
    }

    .logos{
    /* display:flex; */
    gap:20px;
 }
 }
   
 `