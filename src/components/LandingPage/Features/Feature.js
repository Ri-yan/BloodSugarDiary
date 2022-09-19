import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import styled from 'styled-components'
import { wavy3 } from '../../../assets'

const Feature = () => {
  const feature=[
    {
        fName:'Feature 1',
        fImg:'http://static1.squarespace.com/static/5f7f7efd51d63f47eee1cdcd/5f7f7ff15265a43e66d19ca0/5f8087e1aa2865548472d81b/1602290435681/SOM_SlowGIF.gif?format=1500w',
        fp1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
        fp2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
        fdir:''
  },
  {
    fName:'Feature 2',
    fImg:'http://static1.squarespace.com/static/5f7f7efd51d63f47eee1cdcd/5f7f7ff15265a43e66d19ca0/5f8087e1aa2865548472d81b/1602290435681/SOM_SlowGIF.gif?format=1500w',
    fp1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
    fp2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
    fdir:'-reverse'
},
{
  fName:'Feature 3',
  fImg:'http://static1.squarespace.com/static/5f7f7efd51d63f47eee1cdcd/5f7f7ff15265a43e66d19ca0/5f8087e1aa2865548472d81b/1602290435681/SOM_SlowGIF.gif?format=1500w',
  fp1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
  fp2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
  fdir:''
},
{
fName:'Feature 4',
fImg:'http://static1.squarespace.com/static/5f7f7efd51d63f47eee1cdcd/5f7f7ff15265a43e66d19ca0/5f8087e1aa2865548472d81b/1602290435681/SOM_SlowGIF.gif?format=1500w',
fp1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
fp2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
fdir:'-reverse'
}
]
  return (
    <FeaComp id='Features'>
      <Container>
        <Row>
            <Col className='underline'><h2>Features</h2></Col>
        </Row>
        <Row>
            <Col><p className='section-subtitle text-muted text-center px-lg-5 pt-4 font-secondary'>Just to ease the management and maintainance of file records we made it simple by digalising it.</p></Col>
        </Row>
        <Container className='mt-5'>
          {
            feature.map((i,k)=>{
              return(
                <Row className={`py-4 m-2 my-6 d-flex flex-row-reverse${i.fdir}`}>
                  <Col><img src={i.fImg} alt="" /></Col>
                  <Col className='text-start'>
                  <h1>{i.fName}</h1>
                  <p>{i.fp1}</p>
                  <p>{i.fp2}</p>
                  </Col>
                </Row>
              )
            })
          }
        </Container>
        </Container>
      </FeaComp>
  )
}

export default Feature

const FeaComp = styled.div`
padding-top: 8em;
width: -webkit-fill-available;
height: 100vh;
margin: auto;background: url(${wavy3});
    background-size: cover;
    background-position: center;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    margin: 0em auto;
    padding: 6em 0px;
    .sent{
        height: 15em;
        width: 100%;
    }
    @media (max-width: 940px) {
        .form{
        width: -webkit-fill-available;

    }
  }
    
    .underline{
        --color: red;
    --position: center bottom;
    --width: 100px;
    --height: 5px;
    background: linear-gradient(var(--color), var(--color)) var(--position) / var(--width) var(--height) no-repeat;
    padding-bottom: 10px;
    font: bold 2.5rem sans-serif;
    }

img{
  height: 15rem;
  width: -webkit-fill-available;
}


`