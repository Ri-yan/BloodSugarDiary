import React from 'react'
import { Button, Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cover1, cover2, coversvg } from '../../../assets'
import {BsArrowRight} from "react-icons/bs"

const WelcomePage = () => {
  return (
    <Welcome id='Home'>
        <Container>
          <Row>
            <Col className='text-start d-flex flex-column justify-content-center align-items-start'>
              <h1>Welcome To Blood Sugar Diary </h1>
              <h3 className='mt-3'>We offer modern solutions for managing your blood glucose test results.</h3>
              <Link to={'/login'}>
                <button type="button" className="btn btn-primary btn-md-md btn-lg-lg mt-4">Get Started  <BsArrowRight className='mx-2 fs-4'/></button>
              </Link>
            </Col>
            <Col className='px-2 cover-container d-flex flex-column justify-content-center align-items-center'>
            <img src={coversvg} alt="hey" className='cover' srcset="" />
            </Col>
          </Row>
        </Container>
        </Welcome>
  )
}

export default WelcomePage

const Welcome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: -webkit-fill-available;
    height: 100vh;
    padding: 20px;
    background: url(${cover2});
    background: transparent;

    background-size: cover;
    background-position: center;
h1{
    font-size: 54px;
    font-weight: 700;
    color: #012970;
    margin: 0px;
    font-family: 'PT Sans Narrow', sans-serif;
    line-height: 1.2;
}
h2{
    color: #444444;
    margin: 15px 0 0 0;
    font-size: 26px;
    line-height: 1.2;
    font-weight: 300;
    font-family: 'Nunito Sans', sans-serif;
}
.cover{
    height: auto;
    width: auto;

}
@media (max-width: 940px) {
    h1{
    font-size: 32px;
}
    h2{
        font-size: 24px;
    }
    
    }
    @media (max-width: 780px) {
        .cover-container{
            margin-top: 2rem;
        }
        .cover{
            height: 10rem;
            width: 10rem;
        }
}
 `