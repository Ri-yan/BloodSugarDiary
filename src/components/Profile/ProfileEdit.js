import { useState } from 'react';
import { Card, Col, Container, Form, Nav, Row,Button } from 'react-bootstrap'
import styled from 'styled-components'
import { cover1 } from '../../assets';
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from 'react-router-dom';

const ProfileEdit = () => {
    const [userData, setuserData] = useState({
        firstName:"",
        lastName:"",
        dob:"",
        gender:"",
        bloodGroup:"",
        Consultant:"",
        phNumber:"",
        location:"",
        address:"",
    })
    const {firstName,lastName,dob,gender,bloodGroup,Consultant,
    phNumber,location,address}=userData;

  const  handleChange=(e)=>{
    setuserData({...userData,[e.target.name]:[e.target.value]})
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(userData)
  }
  return (
    <ProEdit>
   <Container fluid="xl" className='px-4 mt-4'>
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
      <LinkContainer  to='/profileedit/appointment' replace><Nav.Link href="#" eventKey="link-4" target="__blank">Scheduleings</Nav.Link>
      </LinkContainer>      </Nav.Item>
    </Nav>
    <hr className="mt-0 mb-4"/>
    <Row>
        <Col xl={4}>
            <Card className='mb-4 mb-xl-0'>
                <Card.Header>Profile Picture</Card.Header>
                <Card.Body className='text-center'>
                    <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                    <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                    <button className="btn btn-primary" type="button">Upload new image</button>
                </Card.Body>
            </Card>
        </Col>
        <Col xl={8}>
            <Card className="mb-4">
            <Card.Header>User Details</Card.Header>
                <Card.Body className='text-center'>
                    <Form onSubmit={handleSubmit}>
                        <Row className="gx-3 mb-3">
                            <Col md={6} className="text-start">
                                <Form.Label className="small mb-1"  htmlFor="inputFirstName">First name</Form.Label>
                                <Form.Control name='firstName' value ={firstName} onChange={handleChange} id="inputFirstName" type="text" placeholder="Enter your first name"/>
                            </Col>
                            <Col md={6} className="text-start">
                                <Form.Label className="small mb-1" htmlFor="inputLastName">Last name</Form.Label>
                                <Form.Control name='lastName' value ={lastName} onChange={handleChange} id="inputLastName" type="text" placeholder="Enter your Last name"/>
                            </Col>
                        </Row>
                        <Row className="gx-3 mb-3">
                            <Col md={6} className="text-start">
                                <Form.Label className="small mb-1" htmlFor="inputDob">Date of Birth</Form.Label>
                                <Form.Control name='dob' value ={dob} onChange={handleChange} type='date'  id="inputDob"/>
                            </Col>
                            <Col md={6} className="text-start">
                                <Form.Label className="small mb-1" htmlFor="inputLocation">Gender</Form.Label>
                                <Form.Select aria-label="Default select example" name='gender' value ={gender} onChange={handleChange}>
                                    <option value=''>open select menu</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row className="gx-3 mb-3">
                            <Col md={6} className="text-start">
                                <Form.Label className="small mb-1" htmlFor="inputBG">Blood Group</Form.Label>
                                <Form.Select name='bloodGroup' value ={bloodGroup} onChange={handleChange} aria-label="Default select example">
                                    <option value=''>open select menu</option>
                                    <option value="A+">A+</option>
                                    <option value="O+">O+</option>
                                    <option value="B+">B+</option>
                                    <option value="AB+">AB+</option>
                                    <option value="A-">A-</option>
                                    <option value="O-">O-</option>
                                    <option value="B-">B-</option>
                                    <option value="AB-">AB-</option>
                                </Form.Select>
                            </Col>
                            <Col md={6} className="text-start">
                                <Form.Label className="small mb-1" htmlFor="inputDoctorname">Consulting Doctor</Form.Label>
                                <Form.Control name='Consultant' value ={Consultant} onChange={handleChange}  id="inputDoctorname" type="text" placeholder="Consulting Doctor Name"/>
                            </Col>
                        </Row>
                        <Row className="gx-3 mb-3">
                            <Col md={6} className="text-start">
                                <Form.Label className="small mb-1" htmlFor="inputPhone">Phone number</Form.Label>
                                <Form.Control name='phNumber' value ={phNumber} onChange={handleChange} id="inputPhone" type="tel" placeholder="Enter your Phone number"/>
                            </Col>
                            <Col md={6} className="text-start">
                                <Form.Label className="small mb-1" htmlFor="inputLocation">Location</Form.Label>
                                <Form.Control name='location' value ={location} onChange={handleChange} id="inputLocation" type="text" placeholder="Enter your Location"/>
                            </Col>
                        </Row>
                        <Row className="gx-3 mb-3 ">
                            <Col>
                                <Form.Label className="small mb-1" htmlFor="inputAddress">Address</Form.Label>
                                <Form.Control name='address' value ={address} onChange={handleChange} id="inputAddress" type="text" placeholder="Enter your address"/>
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
   </Container>
</ProEdit>
  )
}

export default ProfileEdit

const ProEdit = styled.div`
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