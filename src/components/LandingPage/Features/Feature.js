import { Container,Row,Col } from 'react-bootstrap'
import styled from 'styled-components'
import { wavy3,f1,f2,f3,f4,f5,f6 } from '../../../assets'

const Feature = () => {
  const feature=[
    {
        fName:'User Friendly Design',
        fImg:`${f1}`,
        fp1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
        fp2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
        fdir:''
  },
  {
    fName:'Clean Maintainable Records',
    fImg:`${f2}`,
    fp1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
    fp2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
    fdir:'-reverse'
},
{
  fName:'Direct Access',
  fImg:`${f3}`,
  fp1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
  fp2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
  fdir:''
},
{
fName:'Routine Test Table',
fImg:`${f4}`,
fp1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
fp2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
fdir:'-reverse'
},
{
  fName:'Routine Test Table',
  fImg:`${f5}`,
  fp1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
  fp2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
  fdir:''
},
{
fName:'Customizable Detailed Profile',
fImg:`${f6}`,
fp1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
fp2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
fdir:'-reverse'
},
{
fName:'Print Pdf of Reports',
fImg:'http://static1.squarespace.com/static/5f7f7efd51d63f47eee1cdcd/5f7f7ff15265a43e66d19ca0/5f8087e1aa2865548472d81b/1602290435681/SOM_SlowGIF.gif?format=1500w',
fp1:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
fp2:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam quia asperiores dolores minus temporibus quibusdam quis ad ipsa soluta. Officiis maxime totam unde facere architecto facilis illum nihil temporibus?',
fdir:''
}
]

  return (
    <FeaComp id='Features'>
      <Container>
        <Row>
            <Col className='underline'><h2>Features</h2></Col>
        </Row>
        <Row>
            <Col><p className='section-subtitle text-muted text-center px-lg-5 pt-4 font-secondary'>Just to ease the management and maintainance of file records we made it simple by digalising it.</p></Col>
        </Row>
        <Container className='mt-5'>
          {/* <Row className='fbox'>
            <Col>
              <h2 style={{textAlign:'justify'}}>Feature name</h2>
              <p style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut doloremque minima provident nulla? Illum 
                ipsam a ullam odio quidem placeat, omnis eius tempore, saepe pariatur veniam id corrupti aliquid ipsum.</p>
            </Col>
            <Col>
              <img src={f1} style={{width:'auto'}} alt="" />
            </Col>
          </Row> */}
          {
            feature.map((i,k)=>{
              return(
                <Row key={k} className={`fbox mb-3 d-flex flex-row-reverse${i.fdir}`}>
                  <Col>
                    <h2 className='f' style={{textAlign:'justify'}}>{i.fName}</h2>
                    <p style={{textAlign:'justify'}}>{i.fp1}</p>
                  </Col>
                  <Col>
                    <img src={i.fImg} alt="" />
                  </Col>
                </Row>
                // <Row key={k} >
                //   <Col><img src={i.fImg} alt="" /></Col>
                //   <Col className='text-start'>
                //   <h1>{i.fName}</h1>
                //   <p>{i.fp1}</p>
                //   <p>{i.fp2}</p>
                //   </Col>
                // </Row>
              )
            })
          }
          {/* {
            feature.map((i,k)=>{
              return(
                <Row key={k} className={`py-4 m-2 my-6 d-flex flex-row-reverse${i.fdir}`}>
                  <Col><img src={i.fImg} alt="" /></Col>
                  <Col className='text-start'>
                  <h1>{i.fName}</h1>
                  <p>{i.fp1}</p>
                  <p>{i.fp2}</p>
                  </Col>
                </Row>
              )
            })
          } */}
        </Container>
        </Container>
      </FeaComp>
  )
}

export default Feature

const FeaComp = styled.div`
padding-top: 8em;
width: -webkit-fill-available;
height: 100vh;
margin: auto;background: url(${wavy3});
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
        .form{
        width: -webkit-fill-available;
        img{
        height: 13rem;
        width: -webkit-fill-available;
      }
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

img{
  height: 15rem;
  width: auto;
}
.fbox{
  background: #f6f9ff;
  padding: 35px 40px;
  box-shadow: 0 0 20px 10px #b9e2f4;
}
.f{
  background: linear-gradient(var(--color), var(--color)) var(--position) / var(--width) var(--height) no-repeat;
    padding-bottom: 10px;
    font: bold 2rem sans-serif;
    font-variant-caps: petite-caps;
    color: #0042cf;
    text-shadow: -8px 6px 2px #dbedf7;

}
@media (max-width: 940px) {
        img{
        height: 12rem;
        width: -webkit-fill-available;
      }
      img{
        width: -webkit-fill-available;
        height: fit-content;
      }
  }

`