import React from 'react'
import Masonry from 'react-masonry-css'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { cover1 } from '../../assets';
import { add_file,add_post,city_life,everyday,opened_tabs,
  performance_overview,portfolio_update,random_thoughts,throw_away ,
 } from '../../assets';
import  {Link}  from "react-router-dom";

const FeaturesCard = () => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
      };
    const features=[{
        id:5,
        title:'List all records',
        cover:`${opened_tabs}`,
        disc:'view list of saved records.',
        link:'/listrecords'
       },{
        id:1,
        title:'Add a new Record',
        cover:`${add_file}`,
        disc:'Add a new record in database.',
        link:'/addreadings'
       },
       {
        id:2,
        title:'Edit a record',
        cover:`${add_post}`,
        disc:'edit or update records.',
        link:'/listrecords'
       },
       {
        id:6,
        title:'Routine Records',
        cover:`${everyday}`,
        disc:'get complete insight of routine record',
        link:'/routine_record'
       },
       {
        id:3,
        title:'Delete a record',
        cover:`${throw_away}`,
        disc:'delete a record from database.',
        link:'/listrecords'
       },       
       {
        id:7,
        title:'Random Record List',
        cover:`${random_thoughts}`,
        disc:'view rondom readings.',
        link:'/random_record'
       }]
  return (
    <Com>
    <Container className='conatiner' data-masonry='{"percentPosition": true }'>
            <h1 className="">Welcome User</h1>
    <Masonry
  breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
  {features.map((i, idx) => (
            <Col>
            <Link  to={`${i.link}`}>
              <Card style={{cursor:'pointer'}} >
                <Card.Img variant="top" src={i.cover} />
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
