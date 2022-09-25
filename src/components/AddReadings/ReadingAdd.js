import { Col, Container, Row,Button,ListGroup } from 'react-bootstrap';
import styled from 'styled-components'
import { cover1 } from '../../assets';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState,useRef,useEffect } from 'react';
const ReadingAdd = () => {
   const recordRef = useRef()
   const readingTypeRef = useRef()
   const resultRef = useRef()
   const testDateRef = useRef()
   const testTimeRef = useRef()
   const notesRef = useRef()
  
   let defaultDate = new Date()
   defaultDate.setDate(defaultDate.getDate() + 3)

   let currentTime = defaultDate.toString().substring(16,21);

   const [resultDate, setDate] = useState(defaultDate.toLocaleDateString('en-CA'))
   const [resultTime, setTime] = useState(currentTime)
   
   const onSetResultTime = (event) => {
    setTime(event.target.value)
}
   const onSetResultDate = (event) => {
       setDate(event.target.value)
   }

   const onClear=(e)=>{
    readingTypeRef.current.value='Select Type'
    recordRef.current.value='Select Record'
    resultRef.current.value=''
    notesRef.current.value=''
    setDate(defaultDate.toLocaleDateString('en-CA'));
    setTime(currentTime);

   }

   const onResultSubmit=(e)=>{
    e.preventDefault();
    const result={
        readingType:`${readingTypeRef.current.value}`,
        recordName:`${recordRef.current.value}`,
        result:`${resultRef.current.value}`,
        testDate:`${testDateRef.current.value}`,
        testTime:`${testTimeRef.current.value}`,
        testNotes:`${notesRef.current.value}`
    }
    try {
        if(result.readingType==='Select Type'){
            alert("please Select Type")
        }else if(result.recordName==='Select Record'){
            alert("please Select Record")
        }
        else if(result.result===''){
            alert("please Enter the test Result.")
        }else{
            alert("Result Added")
            console.log(result)
            onClear();
        }
    } catch (er) {
        console.log(e.message)
    }
   
   }
   
   

    const [records, setRecords] = useState([])
    const shouldLog = useRef(true)

    useEffect(() => {
        if(shouldLog.current){
            shouldLog.current=false;
        fetch('data/TotalRecords.json').then(res => res.json()).then(d => setRecords(d.data));
}}, []); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <AddComp>

        <Form onSubmit={onResultSubmit}>
            <Container>
                <Row style={{disply:'flex', justifyContent:'center'}}>
                    <Col xs={10} md={8} className='box'>
                        <Container>
                            <Row>
                                <Col>
                                <Form.Label  className='d-none dmd-block d-lg-block '>Select Record</Form.Label>
                                    <Form.Select style={{width:'11em'}} className='m-sm-1 m-md-0 m-lg-0 input fs-6'  ref={recordRef} aria-label="Default select example" required>
                                    <option className='fs-6'>Select Record</option>
                                    {
                                       records.map((i,k)=>{
                                            return <option className='fs-6' key={k} value={i.recordName}>{i.recordName}</option>
                                        })
                                    }
                                    <option value="File 1">File 1</option>
                                    <option value="File 2">File 2</option>
                                    <option value="File 3">File 2</option>
                                    <option value="File 4">File 3</option>
                                    <option value="File 5">File 4</option>
                                    <option value="File 6">File 5</option>
                                    </Form.Select>
                                </Col>
                                <Col>
                                <Form.Label  className='d-none dmd-block d-lg-block'>Select Type</Form.Label>
                                    <Form.Select ref={readingTypeRef}  className='m-sm-1 m-md-0 m-lg-0 input' style={{width:'-webkit-fill-available'}} aria-label="Default select example" required>
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
                                    <Form.Group controlId="testdob">
                                        <Form.Label className='d-none dmd-block d-lg-block' >Select Date</Form.Label>
                                        <Form.Control className='m-sm-1 m-md-0 m-lg-0 input' 
                                        ref={testDateRef}
                                        value={resultDate} onChange={onSetResultDate} style={{width:'-webkit-fill-available'}} 
                                        type="date" name="testdob" placeholder="Date of test"
                                           />
                                    </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group controlId="testtime">
                                        <Form.Label className='d-none dmd-block d-lg-block' >Select Time</Form.Label>
                                        <Form.Control  className='m-sm-1 m-md-0 m-lg-0 input'
                                         style={{width:'-webkit-fill-available'}} type="time" name="testtime"
                                         value={resultTime}
                                          placeholder="Time of test" 
                                          ref={testTimeRef}
                                          onChange={onSetResultTime}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Label className='mt-2' ><h2>Enter Reading</h2></Form.Label>
                                    <Form.Control ref={resultRef}  className='readings' type="number"  min="0"  maxLength = "4" max="3000"  placeholder="00" />
                                </Col>



                                    <Container className='mt-3'>
                                        <Row>
                                            <Col>
                                                <Button variant="primary" onClick={()=>onClear()} className='button'>Clear</Button>
                                            </Col>
                                            <Col>
                                                <Button variant="primary" className='button' type='submit' >Save</Button>
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
                                ref={notesRef}
                                placeholder="Leave a comment here"
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
            </Form>
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
  @media (max-width: 1080px) {
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