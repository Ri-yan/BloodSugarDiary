import React from 'react'
import styled from 'styled-components'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { join,login,add_post } from './assets';
import Carousel from 'react-bootstrap/Carousel';
import { Login } from './components';
const LOG2 = () => {
  return (
    <Log>
        <div className="login-box">
        <Container fluid>
            <Row className='border border-primary h-90' style={{disply:'flex', justifyContent:'flex-end'}}>
                <Col className='border border-primary' >
                    <Login/>
                </Col>
                <Col className='border border-primary d-none d-sm-none d-md-block' xs={0}>
                    <Container>
            <Carousel>
      <Carousel.Item interval={1000}>
        
        <img
          className="d-block w-100 img"
          src={join}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
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
          <h3>Second slide label</h3>
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
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                    </Container>
                
                </Col>
            </Row>
        </Container>
        </div>
    </Log>
  )
}

export default LOG2

const Log = styled.div`
padding:25px;
width: 100%;
.img{
    display: flex;
    border: 7px solid #a0e6ff;
    background: #fff;
    height: 25em !important;
}
.carousel-caption{
    color: black !important;
}
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
    background: url(https://i.imgur.com/73BxBuI.png);
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