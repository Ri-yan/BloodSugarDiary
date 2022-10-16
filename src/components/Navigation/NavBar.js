import {Container,Navbar,Nav,NavDropdown,Button,Row,Col,Card} from 'react-bootstrap';
import styled from 'styled-components'
import  {useNavigate}  from "react-router-dom";
import { IoIosLogOut } from 'react-icons/io';

import { CgProfile } from 'react-icons/cg';

import { useAuth } from '../../context/AuthContext';
import {LinkContainer} from 'react-router-bootstrap'
import { Sidebar } from 'primereact/sidebar';
import { useState } from 'react';
const NavBar = () => {
    const history = useNavigate()
    const [visibleRight, setVisibleRight] = useState(false);

    // const [error, setError] = useState("")
    const {logOut} =useAuth()
    async function handleLogout() {
        try {
            console.log('Logout')
          await logOut()
          history("/", { replace: true })
        } catch (err) {
          console.log(err.message);
        }
      }
  return (
    <NavCom>
        <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
       <Container>
        <Row>
        <Col>
            <Card className='mb-4 mb-xl-0'>
                <Card.Header>Profile Sidebar</Card.Header>
                <Card.Body className='text-center'>
                    <img className="img-account-profile rounded-circle mb-2" style={{width:'100%'}} src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                    <div className="small font-italic text-muted mb-2">User Name</div>
                    <LinkContainer  to='/profile' onClick={() => setVisibleRight(false)} className='text-center mt-3'><Nav.Link><button className="btn btn-primary" type="button">View Profile</button></Nav.Link></LinkContainer>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
        </Sidebar>
        <Navbar sticky="top" className='nav'  collapseOnSelect expand="lg" bg="light" variant="light" >
        <Container>
            <LinkContainer  to='/welcome' ><Navbar.Brand className='title'>Blood Sugar Diary</Navbar.Brand></LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <LinkContainer  to='/addreadings'><Nav.Link>Add Reading</Nav.Link></LinkContainer>
            <LinkContainer  to='/listrecords'><Nav.Link>Show Records</Nav.Link></LinkContainer>
                <NavDropdown title="More" id="collasible-nav-dropdown">
                <LinkContainer  to='/routine_record'>
                    <NavDropdown.Item >Routine Records</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer  to='/random_record'>
                    <NavDropdown.Item>Random Records</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer  to='/graphs'><NavDropdown.Item href="#action/3.1">Graphs</NavDropdown.Item></LinkContainer>
                <NavDropdown.Item >Blogs</NavDropdown.Item>
                
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    About Us
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <LinkContainer  to='/profile' className='d-sm-block d-md-block d-lg-none' ><Nav.Link><CgProfile style={{fontSize:'larger',margin:'auto'}}/> Profile</Nav.Link></LinkContainer>
                <Nav.Link className="mx-start-1 fs-6 ms-1 rightProfile d-sm-none d-md-none d-lg-block" onClick={() => setVisibleRight(true)}><CgProfile style={{fontSize:'larger',margin:'auto'}}/> Profile</Nav.Link>
                <Button variant="primary"  onClick={()=>handleLogout()}> Logout <IoIosLogOut className='mx-start-1 fs-5 '/></Button>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </NavCom>
  );
}

export default NavBar
const NavCom = styled.div`
    width: -webkit-fill-available;

a{
  text-decoration: none;
  color: black;
}
.title{
    font-family: 'Roboto',sans-serif;
    color: #373737;
    font-size: x-large;
    font-variant-caps: petite-caps;
    font-weight: bolder;
}
@media (max-width: 350px) {
    .title{font-size: large;}
  }
  @media (max-width: 900px) {
    .rightProfile{
    display: none;
  }
  }
  
.nav{
    background: linear-gradient(13deg, rgb(106, 251, 249), rgb(241, 254, 254));
    background: linear-gradient(271deg, rgb(106, 251, 249), rgb(241, 254, 254));
    background: linear-gradient(72deg, rgb(137, 245, 244), rgb(241, 254, 254));
    background: linear-gradient(72deg,rgb(160 230 255),rgb(209 240 252));
}`