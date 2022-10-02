
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import styled from 'styled-components'
import  {Link,useNavigate}  from "react-router-dom";
import { IoIosLogOut } from 'react-icons/io';
import { useAuth } from '../../context/AuthContext';
import {LinkContainer} from 'react-router-bootstrap'
const NavBar = () => {
    const history = useNavigate()
    // const [error, setError] = useState("")
    const {logOut} =useAuth()
    async function handleLogout() {
        try {
            console.log('Logout')
          await logOut()
          history('/')
        } catch (err) {
          console.log(err.message);
        }
      }
  return (
    <NavCom>
        <Navbar sticky="top" className='nav'  collapseOnSelect expand="lg" bg="light" variant="light">
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
                <LinkContainer  to='/profile' ><Nav.Link>Profile</Nav.Link></LinkContainer>
                
                <Button variant="primary" onClick={()=>handleLogout()}> Logout <IoIosLogOut className='mx-start-1 fs-5'/></Button>
                
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
.nav{
    background: linear-gradient(13deg, rgb(106, 251, 249), rgb(241, 254, 254));
    background: linear-gradient(271deg, rgb(106, 251, 249), rgb(241, 254, 254));
    background: linear-gradient(72deg, rgb(137, 245, 244), rgb(241, 254, 254));
    background: linear-gradient(72deg,rgb(160 230 255),rgb(209 240 252));
}`