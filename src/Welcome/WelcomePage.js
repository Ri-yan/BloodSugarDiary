import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components'
import blue1 from './blue1.jpg'
import add_file from './pics/add_file.svg'
import add_post from './pics/add_post.svg'
import city_life from './pics/city_life.svg'
import everyday from './pics/everyday.svg'
import opened_tabs from './pics/opened_tabs.svg'
import performance_overview from './pics/performance_overview.svg'
import portfolio_update from './pics/portfolio_update.svg'
import random_thoughts from './pics/random_thoughts.svg'
import throw_away from './pics/throw_away.svg'
import web_search from './pics/web_search.svg'


const WelcomePage = () => {
   const features=[{
    id:5,
    title:'List all records',
    cover:`${opened_tabs}`,
    disc:'view list of saved records.'
   },{
    id:1,
    title:'Add a new Record',
    cover:`${add_file}`,
    disc:'Add a new record in database.'
   },
   {
    id:2,
    title:'Edit a record',
    cover:`${add_post}`,
    disc:'edit or update records.'
   },
   {
    id:6,
    title:'Routine Records',
    cover:`${everyday}`,
    disc:'get complete insight of routine record'
   },
   {
    id:3,
    title:'Delete a record',
    cover:`${throw_away}`,
    disc:'delete a record from database.'
   },
//    {
//     id:4,
//     title:'Search',
//     cover:`${web_search}`,
//     disc:'search amoung saved records'
//    },
   
   
   {
    id:7,
    title:'Random Record List',
    cover:`${random_thoughts}`,
    disc:'view rondom readings.'
   }]
    return (
        <WelcomeCom>
        <Container className='conatiner'>
            <h1 className="">Welcome User</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {features.map((i, idx) => (
            <Col>
              <Card style={{cursor:'pointer'}} >
                <Card.Img variant="top" src={i.cover} />
                <Card.Body>
                  <Card.Title>{i.title}</Card.Title>
                  <Card.Text>
                    {i.disc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row></Container>
        </WelcomeCom>
      );
}

export default WelcomePage
const WelcomeCom = styled.div`
    width: -webkit-fill-available;
    padding: 30px;
    background: url(${blue1});
    background-size: auto;
    background-repeat: no-repeat;
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
`