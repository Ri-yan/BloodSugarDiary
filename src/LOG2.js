import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel';
const LOG2 = () => {
  return (
    <Log><section className="body">
    <div className="container">
        <div className="login-box">
            <div className="row">
                <div className="col-sm-6">
                    <div className="logo">
                        <span className="logo-font">Go</span>Snippets
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <br/>
                    <h3 className="header-title">LOGIN</h3>
                    <form className="login-form">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email or UserName"/>
                        </div>
                        <div className="form-group">
                            <input type="Password" className="form-control" placeholder="Password"/>
                            <a href="#!" className="forgot-password">Forgot Password?</a>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block">LOGIN</button>
                        </div>
                        <div className="form-group">
                            <div className="text-center">New Member? <a href="#!">Sign up Now</a></div>
                        </div>
                    </form>
                </div>
                <div className="col-sm-6 hide-on-mobile">
                <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          height={400}
          src="https://i.imgur.com/YMn8Xo1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/YMn8Xo1.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/YMn8Xo1.png"
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
                    <div id="demo" className="carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="slider-feature-card">
                                    <img src="https://i.imgur.com/YMn8Xo1.png" alt=""/>
                                    <h3 className="slider-title">Title Here</h3>
                                    <p className="slider-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, odio!</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="slider-feature-card">
                                    <img src="https://i.imgur.com/Yi5KXKM.png" alt=""/>
                                    <h3 className="slider-title">Title Here</h3>
                                    <p className="slider-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, debitis?</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section></Log>
  )
}

export default LOG2

const Log = styled.div`
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