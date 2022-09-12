import { Col, Container, Row,Button,ListGroup } from 'react-bootstrap';
import styled from 'styled-components'
import { cover1 } from '../../assets';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';
const ReadingAdd = () => {
   const [record, setrecord] = useState('main');
   const [recordType, setrecordType] = useState('random');
   const [resultTime, setresultTime] = useState(new Date().toLocaleTimeString());
   const [resultDate, setresultDate] = useState(new Date().toLocaleTimeString());
   const [notes, setnotes] = useState('')
   const [result, setresult] = useState(0);
   const [reading, setreading] = useState({recordname:`${record}`,
   recordType:`${recordType}`,resultTime:`${resultTime}`,resultDate:`${resultDate}`,result:`${result}`,notes:`${notes}`});

   
   let defaultDate = new Date()
   defaultDate.setDate(defaultDate.getDate() + 3)
   var currentTime = defaultDate.toString().substring(16,21);

    console.log('defaultDate',defaultDate);
    console.log('defaultTime',currentTime);

   const [date, setDate] = useState(defaultDate)
   const [time, setTime] = useState(currentTime)
   const onSetTime = (event) => {
    setTime(event.target.value)
    setresultTime(new Date(event.target.value))
}
   const onSetDate = (event) => {
       setDate(new Date(event.target.value))
       setresultDate(new Date(event.target.value))
   }


    return (
        <AddComp>
            <Container>
                <Row style={{disply:'flex', justifyContent:'center'}}>
                    <Col xs={10} md={8} className='box'>
                        <Container>
                            <Row>
                                <Col>
                                <Form.Label className='d-none dmd-block d-lg-block'>Select Record</Form.Label>
                                    <Form.Select className='m-sm-1 m-md-0 m-lg-0 input' style={{width:'-webkit-fill-available'}} aria-label="Default select example" onChange={(e)=>{setrecord(e.target.value)}}>
                                    <option>Select Record</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <Col>
                                <Form.Label className='d-none dmd-block d-lg-block'>Select Type</Form.Label>
                                    <Form.Select className='m-sm-1 m-md-0 m-lg-0 input' style={{width:'-webkit-fill-available'}} aria-label="Default select example" onChange={(e)=>{setrecordType(e.target.value)}}>
                                    <option>Select Type</option>
                                    <option value="Random">Random</option>
                                    <option value="Before BreakFast">Before BreakFast</option>
                                    <option value="After BreakFast">After BreakFast</option>
                                    <option value="Before Lunch">Before Lunch</option>
                                    <option value="After Lunch">After Lunch</option>
                                    <option value="Before Dinner5">Before Dinner</option>
                                    <option value="After Dinner">After Dinner</option>
                                   
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Group controlId="dob">
                                        <Form.Label className='d-none dmd-block d-lg-block' >Select Date</Form.Label>
                                        <Form.Control className='m-sm-1 m-md-0 m-lg-0 input' 
                                        value={date.toLocaleDateString('en-CA')} onChange={onSetDate} style={{width:'-webkit-fill-available'}} 
                                        type="date" name="dob" placeholder="Date of test"
                                        //  value={resultDate}
                                        //   onChange={(e)=>{setresultDate(e.target.value)}}
                                           />
                                    </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group controlId="time">
                                        {/* <Form.Label>Select Date</Form.Label> */}
                                        <Form.Label className='d-none dmd-block d-lg-block' >Select Time</Form.Label>

                                        <Form.Control value={time} className='m-sm-1 m-md-0 m-lg-0 input'
                                         style={{width:'-webkit-fill-available'}} type="time" name="dob"
                                          placeholder="Time of test" 
                                          onChange={onSetTime}
                                        //   onChange={(e)=>{setresultTime(e.target.value)}} 
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    {/* <FloatingLabel
                                        controlId="floatingInput"
                                        label="Reading"
                                        className="mb-3 "
                                    >
                                        <Form.Control className='readings' type="number" placeholder="Type Reading" />
                                    </FloatingLabel> */}
                                    <Form.Label className='mt-2' ><h2>Enter Reading</h2></Form.Label>
                                    <Form.Control  onChange={(e)=>{setresult(e.target.value)}} className='readings' type="number"  min="0"  maxlength = "4" max="3000"  placeholder="00" />
                                </Col>



                                    <Container className='mt-3'>
                                        <Row>
                                            <Col>
                                                <Button variant="primary" className='button'>Clear</Button>
                                            </Col>
                                            <Col>
                                                <Button variant="primary" className='button'  onClick={()=>console.log(reading)}>Save</Button>
                                            </Col>
                                        </Row>
                                    </Container>
                            </Row>
                        </Container>
                    </Col>
                    <Col xs={10} md={3} className='box m-3'>
                        <Row>
                            <Col className='fs-5 mb-2'>Notes</Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                onChange={e=>{setnotes(e.target.value)}}
                                style={{ height: '250px' }}
                                />
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col>
                                You can store notes with readings.
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </Container>
            
            
            <Container className='mt-5 mb-5'>
                <Row style={{disply:'flex', justifyContent:'center'}}>
                    <Col xs={10} md={10} className='box'>
                        <Col><h1>Intructions</h1></Col>
                        <p>To make proper entries in records please follow following instructions</p>
                        <ListGroup as="ol" style={{textAlign: 'left'}} numbered>
                            <ListGroup.Item as="li" >Check for the record name before adding test results.</ListGroup.Item>
                            <ListGroup.Item as="li">Choose the correct type. by default random will be taken as choice.</ListGroup.Item>
                            <ListGroup.Item as="li">Enter correct test results date and time. time is optional choice.</ListGroup.Item>
                            <ListGroup.Item as="li">Adding a note with reading can be helpful while reading data.</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </AddComp>


      );
}

export default ReadingAdd
const AddComp = styled.div`
    width: -webkit-fill-available;
    padding: 30px;
    background: url(${cover1});
    background-size: auto;
    background-repeat: no-repeat;
    @media (max-width: 940px) {
        padding: 5px 0px;
        padding-top: 2em;
    .input{
    width:-webkit-fill-available !important;
    margin: 5px 0px !important;
  }
  }
  
  .box{
        background: white;
    padding: 15px;
    border-radius: 13px;
    box-shadow: 0 0 11px 1px #bfadadab;
    }
    .readings{
        height: 2em;
    font-size: 8em;
    text-align: center;
    width: -webkit-fill-available;
    margin: 10px auto;
    }
    .button{
        width:8em
    }
    @media (max-width: 940px) {
        .button{
        width:5.5em
    }
    .readings{
    font-size: 6em;
    margin: 10px auto;
    }
  }
`