import {useRef} from 'react'
import { Container,Row,Col,Form } from 'react-bootstrap';
import styled from 'styled-components'
import { newsletter, wavy1 } from '../../../assets';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Subscribe = () => {
    const emailRef = useRef()
    const nameRef = useRef()
    const subjectRef = useRef()
    const messageRef = useRef()
   const reviewSubmit=(e)=>{
    e.preventDefault();
    const Reviewmessage={
        name:`${nameRef.current.value}`,
        email:`${emailRef.current.value}`,
        subject:`${subjectRef.current.value}`,
        message:`${messageRef.current.value}`
    }
    console.log(Reviewmessage)
    reviewClear()
   }
   const reviewClear=()=>{
        nameRef.current.value=''
        emailRef.current.value=''
        subjectRef.current.value=''
        messageRef.current.value=''
   }
  return (
    <SubCom>
    <Container>
        <Row>
            <Col className='underline'><h2>GET IN TOUCH</h2></Col>
        </Row>
        <Row>
            <Col><p className='section-subtitle text-muted text-center px-lg-5 pt-4 font-secondary'>With a positive approach of living a healthy and happy life we try to provide useful and easy software and your response is very necessary for us.</p></Col>
        </Row>

        <Row className='d-flex justify-content-center'>
            
            <Col xs={6} md={4} lg={4}><img src={newsletter} alt="sent" className='sent'  /></Col>

            <Col xs={8} className='form'>
                <Form onSubmit={reviewSubmit}>
                <Container>
                    <Row>
                        <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name"
                            className="mb-3 text-start"
                        >
                            <Form.Control type="text" placeholder="name" ref={nameRef}  required/>
                        </FloatingLabel>
                        </Col>
                        <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3 text-start"
                        >
                            <Form.Control type="email" placeholder="name@example.com" ref={emailRef}  required/>
                        </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Subject"
                            className="mb-3 text-start"
                        >
                            <Form.Control type="text" placeholder="subject" ref={subjectRef}  required/>
                        </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <FloatingLabel  className="mb-3 text-start" controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                            as="textarea"
                            ref={messageRef}
                            rows={4}
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            required
                            />
                        </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className='d-md-flex justify-content-md-end'>
                    <button type="submit" style={{width:'7em'}} className="btn btn-danger me-md-2 ">Submit</button>
                    </Row>
                </Container>
                </Form>
            </Col>
        </Row>
    </Container>
    </SubCom>
  )
}

export default Subscribe;

const SubCom = styled.div`
background: url(${wavy1});
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
        padding: 5em 0px;
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
    p{
        letter-spacing: 0.02em;
        text-align: center!important;
        padding-top: 1.5rem!important;
    }
    `