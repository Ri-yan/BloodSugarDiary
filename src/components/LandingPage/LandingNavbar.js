
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import styled from 'styled-components'
import  {Link}  from "react-router-dom";
import { useState } from 'react';
const LandingNavBar = () => {
    const[navbar,setNavbar]=useState(true);
    const changeBackground=()=>{
        if(window.scrollY>=80){
            setNavbar(false);
        } else{
            setNavbar(true);
        }
     }
     window.addEventListener('scroll',changeBackground);
  return (
    <NavCom>
        <Navbar className={navbar?'nav':'nav active'} fixed="top"  collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
            <Navbar.Brand  href="/"><Link  to='/' className={navbar?'title':'title titleactive'}>Blood Sugar Diary</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            {/* <Link  to='/addreadings'><Nav.Link href="#features">Add Reading</Nav.Link></Link>
            <Link  to='/listrecords'> <Nav.Link href="#pricing">Show Records</Nav.Link></Link> */}
                
            </Nav>
            <Nav>
                <a className='me-lg-4 fs-6'  href='#Home'><Nav.Link href="#Home">Home</Nav.Link></a>
                <a className='me-lg-4 fs-6' href='#Service'> <Nav.Link href="#Service">Services</Nav.Link></a>
                <a className='me-lg-4 fs-6' href='#Features' ><Nav.Link href="#Features">Features</Nav.Link></a>
                <Link className='me-lg-4 fs-6' to='/' ><Nav.Link href="#about">About</Nav.Link></Link> 
                <Link className='me-lg-4 ' to='/login' ><Button variant="primary" className='fs-6'>Login</Button></Link>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </NavCom>
  );
}

export default LandingNavBar
const NavCom = styled.div`
    width: -webkit-fill-available;

a{
  text-decoration: none;
  color: black;
}
.title{
    font-family: 'Roboto',sans-serif;
    /* color: #373737; */
    font-size: x-large;
    font-variant-caps: petite-caps;
    font-weight: bolder;
    color: #3bc3ff;
}
@media (max-width: 350px) {
    .title{font-size: large;}
  }
/* .nav{
    background: linear-gradient(13deg, rgb(106, 251, 249), rgb(241, 254, 254));
    background: linear-gradient(271deg, rgb(106, 251, 249), rgb(241, 254, 254));
    background: linear-gradient(72deg, rgb(137, 245, 244), rgb(241, 254, 254));
    background: linear-gradient(72deg,rgb(160 230 255),rgb(209 240 252));
} */
.bg-light,.nav {
    --bs-bg-opacity: 0 !important;
    background-color: transparent !important;
}
.active{
    background: linear-gradient(72deg,rgb(160 230 255),rgb(209 240 252));
}
.titleactive{
    color: black;
}

`