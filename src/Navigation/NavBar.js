
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import styled from 'styled-components'
import  {Link}  from "react-router-dom";

const NavBar = () => {
  return (
    <NavCom>
        <Navbar sticky="top" className='nav'  collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
            <Navbar.Brand  href="/welcome"><Link  to='/welcome'className='title'>Blood Sugar Diary</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#features">Add Reading</Nav.Link>
                <Nav.Link href="#pricing">Show Records</Nav.Link>
                <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Graphs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                <Link  to='/routine_record'>Routine Records</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><Link  to='/random_record'>Random Records</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link href="#deets">Profile</Nav.Link>
                
                <Button variant="primary"> Logout</Button>
                
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
.nav{
    background: linear-gradient(13deg, rgb(106, 251, 249), rgb(241, 254, 254));
    background: linear-gradient(271deg, rgb(106, 251, 249), rgb(241, 254, 254));
    background: linear-gradient(72deg, rgb(137, 245, 244), rgb(241, 254, 254));
    background: linear-gradient(72deg,rgb(160 230 255),rgb(209 240 252));
}`