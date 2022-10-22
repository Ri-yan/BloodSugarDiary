import { Card, Col, Container, Form, Nav, Row,Button,ListGroup } from 'react-bootstrap'
import styled from 'styled-components'
import { cover1 } from '../../../assets';
import {LinkContainer} from 'react-router-bootstrap'
import {AiOutlineDelete} from "react-icons/ai"
import { Link } from 'react-router-dom';
const MedicineEdit = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <MedEdit>
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
            <LinkContainer  to='/profileedit/appointment' replace><Nav.Link href="#" eventKey="link-4" target="__blank">Scheduleings</Nav.Link></LinkContainer></Nav.Item>
        </Nav>
    <hr className="mt-0 mb-4"/>
    <Row>
        <Col xl={3} sm={0} md={3} >
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
            <Card.Header>Medecines</Card.Header>
                <Card.Body className='text-start'>
                    <Form onSubmit={handleSubmit}>                   
                        <ListGroup variant="flush" as="ol" numbered >
                            <ListGroup.Item style={{width:'100%'}} >Cras justo odio <Button className='float-end' variant="light"><AiOutlineDelete/></Button></ListGroup.Item>
                            <ListGroup.Item style={{width:'100%'}} >hsdfas jdsghsdhusto odio <Button className='float-end' variant="light"><AiOutlineDelete/></Button></ListGroup.Item>
                            <ListGroup.Item style={{width:'100%'}} >dfjts justruo odio <Button className='float-end' variant="light"><AiOutlineDelete/></Button></ListGroup.Item>
                            <ListGroup.Item style={{width:'100%'}} >Crgjas justo odio <Button className='float-end' variant="light"><AiOutlineDelete/></Button></ListGroup.Item>
                        </ListGroup>
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
    </MedEdit>
  )
}

export default MedicineEdit;

const MedEdit = styled.div`
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