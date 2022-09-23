import styled from 'styled-components'
import React, { useRef, useState } from "react"
import { join,login,add_post,backleft, authcover  } from '../../assets';
import Carousel from 'react-bootstrap/Carousel';
import { Form, Button, Card, Alert, Container, Col, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../../context/AuthContext';
const Login = () => {
    const {logIn} = useAuth()
    const loginPasswordRef = useRef();
    const loginEmailRef = useRef();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useNavigate()

    const onLogIn=async(e)=>{
        e.preventDefault();
        const LogInDetails={
            loginPassword:`${loginPasswordRef.current.value }`,
            loginEmail:`${loginEmailRef.current.value}`
        }
        console.log(LogInDetails)
        try {
            setError("")
            setLoading(true)
            await logIn(loginEmailRef.current.value,loginPasswordRef.current.value)
            // history.push("/")
            history("/welcome")
      
          } catch(err) {
            // setError("Failed to log in")
            setError(err.message)
      
          }
      
          setLoading(false)
    }
  return (
    <Log><section className="body">
        <Container>
        <div className="login-box">
            <div className="row">
                <Col sm={6}>
                    <div className="logo">
                        <Link to={'/'} className='home'><span className="logo-font">Blood Sugar</span>Diary </Link>  
                    </div>
                </Col>
                {/* <Col sm={4} className="d-none d-sm-none d-md-block">
                    <Link to={'/'}>
                        <div className="logo ">
                        <h6> <img height={30} src={backleft} alt="" />back to home</h6>
                        </div>
                    </Link>
                </Col> */}
            </div>
                <Row>
                    <Col sm={6} className="px-0 px-sm-0 px-md-5 px-lg-5  ">
                    <br/>
                    <div className='left'>
                        <Card className='card'>
                            <Card.Body>
                            <h2 className="text-center mb-4">Log In</h2>
                            {error && <Alert data-testid='error' variant="danger">{error}</Alert>}
                            <Form onSubmit={onLogIn}>
                                <Form.Group  style={{textAlign:'left'}} id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" data-testid="email" ref={loginEmailRef} required />
                                </Form.Group>
                                <Form.Group  style={{textAlign:'left'}} id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control data-testid="password" ref={loginPasswordRef} type="password" required />
                                </Form.Group>
                                <Button  data-testid='submit' id='btnLogin' className="w-100 mt-3" type="submit">
                                Log In
                                </Button>
                            </Form>
                            <div className="w-100 text-center mt-3">
                                <Link to="/forgot-password">Forgot Password?</Link>
                            </div>
                            {/* <div className="mx-auto my-3 ">
                                <GoogleButton className='g-btn mx-auto ' type='dark'  onClick={handleGoogleSignIn}/>
                            </div> */}
                            </Card.Body>
                        </Card>
                        <div className="w-100 text-center mt-2">
                            Need an account? <Link to="/signup">Sign Up</Link>
                        </div>
                    </div>
                    </Col>
                    <Col sm={6} className='hide-on-mobile px-0 px-sm-0 px-md-5 px-lg-5'>
                    <div id="demo" className="carousel slide" data-ride="carousel">
                                        <Carousel variant="dark">
                                    <Carousel.Item interval={1000}>
                                        
                                        <img
                                        className="d-block w-100 img"
                                        src={join}
                                        alt="First slide"
                                        />
                                        <Carousel.Caption>
                                        <h3>Authorized and secure</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item interval={500}>
                                        <img
                                        className="d-block w-100 img"
                                        src={login}
                                        alt="Second slide"
                                        />
                                        <Carousel.Caption>
                                        <h3>Store</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100 img"
                                        src={add_post}
                                        alt="Third slide"
                                        />
                                        <Carousel.Caption>
                                        <h3>Organised</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                        </Carousel>
                    </div>
                    </Col>
                    </Row>
        </div>
        </Container>
    </section></Log>
  )
}

export default Login

const Log = styled.div`

.home{
    text-decoration: none;
}

.left{ 
    animation-name: left;
    animation-duration: 1.8s;
   opacity: 1;
    }
    @keyframes left {
  from { 
    opacity: 0;
    transition: 1.5s;
    transform: translateX(110px);
}
  to {
    transition: 1.5s;
    transform: translateX(0px);
    opacity: 1;
}
    }








.img{
    display: flex;
    border: 1px solid #a0e6ff;
    border-radius: 10px;
    background: #fff;
    height: 25em !important;
}
.carousel-dark .carousel-caption {
    color: #000 !important;
    backdrop-filter: blur(2px) !important;
    /* box-shadow: 0 0 20px 0px #00000014 !important; */
    margin: 0px -16px !important;
    width: -webkit-fill-available !important;
    padding: 0px 0px !important;
}
width: 100%;
@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap);

body {
    background: #f5f5f5;
}

@media only screen and (max-width: 767px) {
    .hide-on-mobile {
        display: none;
    }
}

.login-box {
    background: url(${authcover});
    background-size: cover;
    background-position: center;
    padding: 20px;
    margin: 25px auto;
    min-height: 700px;
    -webkit-box-shadow: 0 2px 60px -5px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 60px -5px rgba(0, 0, 0, 0.1);
}

.logo {
    font-family: "Script MT";
    font-family: 'Caveat', cursive;
    font-size: 54px;
    text-align: center;
    color: #888888;
    margin-bottom: 50px;
}

.logo .logo-font {
    color: #3BC3FF;
}

@media only screen and (max-width: 767px) {
    .logo {
        font-size: 34px;
    }
}

.header-title {
    text-align: center;
    margin-bottom: 50px;
}

.login-form {
    max-width: 300px;
    margin: 0 auto;
}

.login-form .form-control {
    border-radius: 0;
    margin-bottom: 30px;
}

.login-form .form-group {
    position: relative;
}

.login-form .form-group .forgot-password {
    position: absolute;
    top: 6px;
    right: 15px;
}

.login-form .btn {
    border-radius: 0;
    -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
}

.login-form .btn.btn-primary {
    background: #3BC3FF;
    border-color: #31c0ff;
}

.slider-feature-card {
    background: #fff;
    max-width: 280px;
    margin: 0 auto;
    padding: 30px;
    text-align: center;
    -webkit-box-shadow: 0 2px 25px -3px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 25px -3px rgba(0, 0, 0, 0.1);
}

.slider-feature-card img {
    height: 80px;
    margin-top: 30px;
    margin-bottom: 30px;
}

.slider-feature-card h3,
.slider-feature-card p {
    margin-bottom: 30px;
}

.carousel-indicators {
    bottom: -50px;
}

.carousel-indicators li {
    cursor: pointer;
}
`