import { useState } from 'react';
import { Card, Col, Container, Form, Nav, Row,Button } from 'react-bootstrap'
import styled from 'styled-components'
import { cover1 } from '../../../assets';
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from 'react-router-dom';
const AppointMentEdit = () => {
    const [schedulingInfo, setSchedulingInfo] = useState({
        lastAppointment:"",
        nextAppointment:""
    })
    const {lastAppointment,
    nextAppointment}=schedulingInfo;

  const  handleChange=(e)=>{
    setSchedulingInfo({...schedulingInfo,[e.target.name]:[e.target.value]})
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(schedulingInfo)
  }
  return (
    <Appedit>
        <Container fluid="xl" className='px-4 mt-4  '>
        <Nav variant="tabs" border="dark" defaultActiveKey="/profileedit" className='nav-borders'>
            <Nav.Item>
            <LinkContainer  to='/profileedit' replace><Nav.Link href="#" eventKey="link-1" target="__blank">Profile</Nav.Link></LinkContainer>
            </Nav.Item>
            <Nav.Item>
            <LinkContainer  to='/profileedit/medicineedit' replace><Nav.Link href="#" eventKey="link-2" target="__blank">Medecine</Nav.Link></LinkContainer>
            </Nav.Item>
            <Nav.Item>
            <LinkContainer  to='/profileedit/carepoints' replace><Nav.Link href="#" eventKey="link-3" target="__blank">Care Points</Nav.Link></LinkContainer>
            </Nav.Item>
            <Nav.Item>
            <LinkContainer  to='/profileedit/appointment' replace><Nav.Link href="#" eventKey="link-4" target="__blank">Scheduleings</Nav.Link></LinkContainer>  </Nav.Item>
        </Nav>
    <hr className="mt-0 mb-4"/>
    <Row>
        <Col xl={3} md={3}>
            <Card className='mb-4 mb-xl-0 d-none d-lg-block'>
                <Card.Header>Profile Picture</Card.Header>
                <Card.Body className='text-center'>
                        <img className="img-account-profile rounded-circle mb-2 w-100 ps-5 pe-5" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                        <div className="small font-italic text fs-4 mb-0">John Dove</div>
                </Card.Body>
            </Card>
        </Col>
        <Col xl={9} md={9}>
            <Card className="mb-4">
            <Card.Header>Appointment Edit</Card.Header>
                <Card.Body className='text-center'>
                    <Form onSubmit={handleSubmit}>
                        <Row className="gx-3 mb-3">
                            <Col md={6} className="text-start">
                                <Form.Label className="small mb-1"  htmlFor="lastAppointment">Last Appointment Date</Form.Label>
                                <Form.Control name='lastAppointment' value={lastAppointment} onChange={handleChange} id="lastAppointment" type="date" />
                            </Col>
                            <Col md={6} className="text-start">
                                <Form.Label className="small mb-1" htmlFor="nextAppointment">Next Appointment Date</Form.Label>
                                <Form.Control name='nextAppointment' value={nextAppointment} onChange={handleChange}  id="nextAppointment" type="date"/>
                            </Col>
                        </Row>
                        <div className='d-flex justify-content-around'>
                            <Link to='/profile' replace><button className="btn btn-primary" type="button">Cancel</button></Link>
                            <button className="btn btn-primary" type="submit">Save Changes</button>
                        </div>                    
                         </Form>
                </Card.Body>
            </Card>
        </Col>
    </Row>
    <hr className="mt-4 mb-4"/>

    </Container>
</Appedit>
  )
}

export default AppointMentEdit


const Appedit = styled.div`

background: url(${cover1});
    background-size: auto;
    background-repeat: no-repeat;
height: -webkit-fill-available;
    width: -webkit-fill-available;
    @media (max-width: 940px) {
        padding:  0px;
    }
    .img-account-profile{
        width: -webkit-fill-available;
        width: 10em;

        height: 10em;
    }
    
`