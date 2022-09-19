import styled from 'styled-components'
import React, { useRef, useState } from "react"
import { Col, Container, Row } from 'react-bootstrap'

import { join,login,add_post } from '../../assets';
import Carousel from 'react-bootstrap/Carousel';
import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
const Signup = () => {
  return (
    <Log><section className="body">
    <div className="container">
        <div className="login-box">
            <div className="row">
                <div className="col-sm-6 ">
                    <div className="logo">
                      <Link to={'/'} className='home'> <span className="logo-font">Blood Sugar</span>Diary</Link> 
                    </div>
                </div>
            </div>

            <div className="row">
            <div className="col-sm-6 hide-on-mobile  px-0 px-sm-0 px-md-5 px-lg-5">
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
                </div>
                <div className="col-sm-6 px-0 px-sm-0 px-md-5 px-lg-5">
                    <br/>
                    <div>
                    <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form >
          <Form.Group style={{textAlign:'left'}} id="email">
                <Row>
                    <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="Text" data-testid="Reg_first_name"  required />
                    </Col>
                    <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="Text" data-testid="Reg_last_name"  required />
                    </Col>
                </Row>
              {/* <Form.Label>First Name</Form.Label>
              <Form.Control type="Text" data-testid="Reg_name"  required /> */}
            </Form.Group>
            <Form.Group style={{textAlign:'left'}} id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" data-testid="Reg_email"  required />
            </Form.Group>
            <Form.Group style={{textAlign:'left'}} id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" data-testid="Reg_password"  required />
              {/* <div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div> */}
            </Form.Group>
            {/* <Form.Group style={{textAlign:'left'}} id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" data-testid="Reg_passwordConfirm"  required />
            </Form.Group> */}
            <Button className="w-100 mt-3" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
                        </div>
                </div>
                
            </div>
        </div>
    </div>
</section></Log>
  )
}

export default Signup

const Log = styled.div`
.home{
    text-decoration: none;
}
.img{
    display: flex;
    border: 3px solid #a0e6ff;
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