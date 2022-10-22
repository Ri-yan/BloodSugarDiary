import {Button, Col, Container, Row,Card,Table,ListGroup } from 'react-bootstrap'
import styled from 'styled-components'
import { cover1,profile } from '../../assets';
import { Link } from 'react-router-dom'
export const ProfileNew = () => {
    

  return (
    <ProfileCom>
        <Container fluid>

            <Row style={{disply:'flex', justifyContent:'flex-end'}}>
                <Col style={{textAlign: '-webkit-right',margin:5}} >
                    <Link to='/profileedit'><Button variant="primary">Edit</Button></Link>
                </Col>
            </Row>

            <Row style={{disply:'flex', justifyContent:'center'}}>
                <Col className="  " xs={10} md={3}>

            <Card className='mb-2 mb-xl-2 mt-3  box'>
                <Card.Header>User Details</Card.Header>
                <Card.Body className='text-center'>
                    <img className="img-account-profile rounded-circle mb-2 w-100 ps-5 pe-5" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                    <div className="small font-italic text fs-4 mb-0">John Dove</div>
                </Card.Body>
            </Card>
            <Card className='mb-4 mb-xl-0  box'>
                <Card.Body className='text-center'>
            <Table  bordered hover responsive size="sm" className='fs-6'>
            <tbody>
            <tr className='text-right'>
                <th>Age</th>
                <td>56</td>
                <th>Sex</th>
                <td>M</td>
                </tr>
                <tr>
                <th colSpan={2}>Blood Group</th>
                <td colSpan={2}>O</td>
                </tr>
                <tr>
                <th colSpan={2}>Diabetes Type</th>
                <td colSpan={2}>2</td>
                </tr>
                <tr>
                <th colSpan={2}>Consultant</th>
                <td colSpan={3}>Dr Jkrasdfas safasf s</td>
                </tr>
                <tr>
                <th>Address</th>
                <td colSpan={3}>235/67 austion dsg India</td>
                </tr>
                <tr>
                <th>Contact</th>
                <td colSpan={3}>9834533342</td>
                </tr>
            </tbody>
            </Table>
                </Card.Body>
            </Card>
                   
                    </Col>
                <Col className="text-start side2" xs={10} md={9}>
                <hr/>
                <Card className=' box '>
                        <Card.Header>Appointments</Card.Header>
                        <Card.Body>
                        <Table  borderless hover responsive size="sm" className='fs-6 fs-sm-7'>
                            <tbody>
                                <tr><td>Last Appointment
                                    </td>
                                    <td>26/06/2021</td></tr>
                                    <tr><td>Next Appointment
                                    </td>
                                    <td>26/08/2021</td></tr>
                            </tbody>
                        </Table>
                        </Card.Body>
                    </Card>
                <Card className=' box mt-2'>
                    <Card.Header>Medicines Prescribed</Card.Header>
                    <Card.Body>
                        <ListGroup variant="flush" as="ol" numbered>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
                       
                    <Card className=' box mt-2'>
                        <Card.Header>Care Points</Card.Header>
                        <Card.Body>
                            <ListGroup variant="flush" as="ol" numbered>
                            <ListGroup.Item>Routine Checkups</ListGroup.Item>
                            <ListGroup.Item>Daily Exercise</ListGroup.Item>
                            <ListGroup.Item>Maintaining reports</ListGroup.Item>
                            <ListGroup.Item>Controlled diet</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <hr/>
                    
                </Col>
            </Row>
        </Container>
    </ProfileCom>
  )
}
export default ProfileNew
const ProfileCom = styled.div`
background: url(${cover1});
    background-size: auto;
    background-repeat: no-repeat;
padding: 20px;
height: -webkit-fill-available;
    width: -webkit-fill-available;
    @media (max-width: 940px) {
        padding:  0px;
    }
    .box{
        background: white;
    border-radius: 13px;
    box-shadow: 0 0 11px 1px #bfadadab;
    }
    .boxsh{
        box-shadow: 0 0 11px 1px #bfadadab;
    }
    .side2{
        height: 100vh;
        overflow-y: scroll;
        overflow-x:hidden;
    }
    .side2::-webkit-scrollbar {
  width: 8px;     
  scroll-behavior: smooth;          /* width of the entire scrollbar */
}
.side2::-webkit-scrollbar-track {
  background: rgba(106, 116, 110, 0.186);        /* color of the tracking area */
}

`