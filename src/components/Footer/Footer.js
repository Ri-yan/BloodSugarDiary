import { Col, Container, InputGroup, Row} from 'react-bootstrap'
import styled from 'styled-components'
import {GrTwitter,GrInstagram } from 'react-icons/gr';
import { FaFacebookF } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { logo } from "../../assets";
const Footer = () => {
  return (
    <FCom>
        <Container>
            <Row>
                <Col lg={2} style={{width:'fit-content'}} className="d-flex flex-column align-items-start mb-5" >
                    <div className='align-self-center ' >
                        <a href="/" className="d-flex align-items-center p-0 text-dark">
                        <img alt="logo" src={logo} width="30px" />
                        <span className="ml-3 h5 font-weight-bold">Blood Sugar Diary</span>
                        </a>
                        <div className="d-flex mt-5">
                        <Button flat color="dark" className="bg-black border-dark px-3 py-2 d-flex align-items-center">
                            <FaFacebookF style={{fontSize:'0.8em'}}/>
                        </Button>
                        <Button flat color="dark" className="bg-black border-dark mx-3 px-3 py-2 d-flex align-items-center">
                        <GrTwitter style={{fontSize:'0.8em'}}/>
                        </Button>
                        <Button flat color="dark" className="bg-black border-dark px-3 py-2 d-flex align-items-center">
                        <GrInstagram style={{fontSize:'0.8em'}}/>
                        </Button>
                        </div>
                    </div>
                </Col>
                <Col className="d-flex justify-content-evenly" style={{width:'100%'}}>
                <Col sm={5} lg={3}>
                <p className="h5 mb-4 text-start" style={{ fontWeight: '600' }}>
                    More
                </p>
                <div className="d-flex flex-column text-start mb-5" style={{ cursor: 'pointer' }}>
                    <a href="/">Resources</a>
                    <a href="/">About Us</a>
                    <a href="/">Contact</a>
                    <a href="/">Blog</a>
                </div>
                </Col>
                <Col lg={3}>
                    <p className="h5 mb-4 text-start" style={{ fontWeight: '600' }}>
                    Help
                    </p>
                    <div className="d-flex flex-column text-start" style={{ cursor: 'pointer' }}>
                    <a href="/">Support</a>
                    <a href="/login">Sign Up</a>
                    <a href="/login">Sign In</a>
                    </div>
                </Col>
                </Col>
                <Col lg={3}>
                    <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                        Subscribe
                    </p>
                    <div className="d-flex flex-column"  style={{ cursor: 'pointer' }}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            type="email" 
                            placeholder="email"
                            aria-label="email"
                            aria-describedby="basic-addon2"
                        />
                    <Button variant="outline-secondary" id="button-addon2">
                        Subscribe
                    </Button>
                    </InputGroup>
                    </div>
                </Col>
            </Row>
        </Container>


        <Row className="justify-content-center">
         <small className="text-center mt-5">&copy; <a style={{color:'black'}} href="https://www.linkedin.com/in/mohd-riyan-0330b4225/" target="_blank" rel="noopener noreferrer"> 
          Mohd Riyan</a> , 2022. All rights reserved.</small>
        </Row>
    </FCom>
  )
}

export default Footer

const FCom = styled.div`
width: 100%;
padding-top: 4em;
padding-bottom: 2em;
    a{
        text-decoration: none;
        color: black;
        cursor: pointer;
    }
`