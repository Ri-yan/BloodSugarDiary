
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import styled from 'styled-components'
import  {Link,useNavigate}  from "react-router-dom";
import { IoIosLogOut } from 'react-icons/io';
import { useAuth } from '../../context/AuthContext';

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
            <Navbar.Brand  href="/"><Link  to='/welcome' className='title'>Blood Sugar Diary</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Link  to='/addreadings'><Nav.Link href="/addreadings">Add Reading</Nav.Link></Link>
            <Link  to='/listrecords'> <Nav.Link href="/listrecords">Show Records</Nav.Link></Link>
                <NavDropdown title="More" id="collasible-nav-dropdown">
                <Link  to='/routine_record'>
                    <NavDropdown.Item href="#action/3.2">Routine Records</NavDropdown.Item>
                </Link>
                <Link  to='/random_record'>
                    <NavDropdown.Item href="#action/3.3">Random Records</NavDropdown.Item>
                </Link>
                <Link  to='/graphs'><NavDropdown.Item href="#action/3.1">Graphs</NavDropdown.Item></Link>
                <NavDropdown.Item href="#action/3.2">Blogs</NavDropdown.Item>
                
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    About Us
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Link  to='/profile' ><Nav.Link href="#deets">Profile</Nav.Link></Link>
                
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