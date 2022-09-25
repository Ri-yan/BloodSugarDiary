import React from 'react'
import { Button, Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { groups } from '../../../assets'
const WhoweAre = () => {
  return (
    <Who id='about'>
        <Container>
            <Row>
                <Col>
                    <Container className='about text-start'>
                        <h3>Who we are</h3>
                        <h2>we are a small talented hardwoking group of people who aspire to assist IT industry with new innovations.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi ipsam repudiandae qui, labore quibusdam, quas, tempore a perferendis voluptatibus porro esse asperiores iusto blanditiis autem quos temporibus debitis nostrum?</p>
                        <button type="button" className="btn btn-primary btn-md-md btn-lg-lg mt-4">More..</button>
                    </Container>
                </Col>
                <Col>
                    <img src={groups} alt=""  />
                </Col>
            </Row>
        </Container>
    </Who>
  )
}

export default WhoweAre
const Who = styled.div`
height: -webkit-fill-available;
width: -webkit-fill-available;
padding: 6em 1em;
display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
img{
    width: 480px;
    height: 350px;
}
@media (max-width: 550px) {
    img{
    width: -webkit-fill-available;
    height: auto;
}
}
h3{
    font-size: 14px;
    font-weight: 700;
    color: #4154f1;
    text-transform: uppercase;
}
h2{
    font-size: 24px;
    font-weight: 700;
    color: #012970;
}
p{
    margin: 15px 0 30px 0;
    line-height: 24px;
}
.about{
    background-color: #f6f9ff;
    padding: 40px;
}
`