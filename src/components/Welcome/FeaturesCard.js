import React from 'react'
import Masonry from 'react-masonry-css'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { cover1 } from '../../assets';
import { features } from './cardData';
import  {Link}  from "react-router-dom";

const FeaturesCard = () => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
      };
   
  return (
    <Com>
    <Container className='conatiner' data-masonry='{"percentPosition": true }'>
            <h1 className="">Welcome User</h1>
    <Masonry
  breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
  {features.map((i, idx) => (
            <Col key={idx} className='card-pad'>
            <Link  to={`${i.link}`}>
              <Card style={{cursor:'pointer'}} >
                <Card.Img variant="top" src={i.cover} className='bg-image hover-zoom' />
                <Card.Body>
                  <Card.Title>{i.title}</Card.Title>
                  <Card.Text>
                    {i.disc}
                  </Card.Text>
                </Card.Body>
              </Card>
              </Link>
            </Col>
          ))}
    </Masonry>
</Container>
</Com>
  )
}

export default FeaturesCard
const Com = styled.div`
    width: -webkit-fill-available;
    padding: 30px;
    background: url(${cover1});
    background-size: auto;
    background-repeat: no-repeat;
    @media (max-width: 940px) {
        padding: 5px 0px;
  }
  @media (max-width: 450px) {
        .card-pad{
          padding: 0em 1em !important;
        }
  }
.my-masonry-grid {
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: -30px; /* gutter size offset */
  width: auto;
}
.my-masonry-grid_column {
  padding-left: 30px; /* gutter size */
  background-clip: padding-box;
}

/* Style your items */
.my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
  /* background: #0000000; */
  margin-bottom: 30px;
}
h1{
    font-weight: 600;
    font-size: 3em;
    padding: 10px ;
    padding-bottom: 25px;
    font-weight: 600;
    letter-spacing: 10px;
    color: #ffffff;
    font-variant-caps: petite-caps;
    border: 2px solid;
    margin: 5px auto;
    margin-bottom: 40px;    
    }
    @media screen and (max-width:960px){
        h1{
            font-size: 2em;
            letter-spacing: 5px;
        }
    }
    a{
      text-decoration: none;
      color: black;
    }
`
