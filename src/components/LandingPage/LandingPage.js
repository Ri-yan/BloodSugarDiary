import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Feature from './Feature'
import LandingNavbar from './LandingNavbar'
import Services from './Services'
const LandingPage = () => {
  return (
    <Landing>
        <div className="land">
        <LandingNavbar/>
        <div className="home" id='Home'>
            <h1>Welcome To Blood Sugar Diary Web App</h1>
            <Link to={'/login'}>
                <Button variant="primary" className='mt-2' size="lg">
                Click To Login
                </Button>
            </Link>
          </div>
        </div>
        <Services/>
        <Feature/>
    </Landing>
  )
}

export default LandingPage

const Landing = styled.div`
 width: -webkit-fill-available;

.land{
 width: -webkit-fill-available;
 padding: 20px;
 background: url(https://i.imgur.com/73BxBuI.png);
    background-size: cover;
    background-position: center;
    }
.home{
    display: flex;
    width: -webkit-fill-available;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    /* padding-top: 2em; */
    align-content: center;
    justify-content: center;
    /* justify-content: center; */

    /* background: url(https://i.imgur.com/73BxBuI.png);
    background-size: cover;
    background-position: center;
    padding: 20px;
    margin: 10px auto; */
    min-height: 700px;
    
    }
`