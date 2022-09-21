import React from 'react'
import Form from 'react-bootstrap/Form';
import styled from 'styled-components'
import { cover1, cover2, coverrev } from '../../assets';
import RandomPieChart from '../RandomTable/RandomPieChart';
import RoutineChartList from '../RoutineTable/RoutineCharts/RoutineChartList';
import Random2 from './Random2/Random2';

const RandomComp = () => {
  return (
    <RoutineCom>
        <div className="cont">
            <h1>Random Records Section</h1>
            <form className="form">
                    <Form.Select size="md" style={{width:'fit-content'}}>
                    <option>Select a file</option>
                    <option>File 1</option>
                    <option>File 2</option>
                    <option>File 3</option>
                    <option>File 4</option>
                    <option>File 5</option>
                    <option>File 6</option>
                </Form.Select>
                <button type="submit" className="btn btn-primary btn-md-md btn-lg-lg my-auto up mx-2">Load</button>   
            </form>
            <Random2/>
            <RandomPieChart/>
        </div>
              
        
    </RoutineCom>
  )
}

export default RandomComp;

const RoutineCom = styled.div`
    width: -webkit-fill-available;
    padding-top: 2rem;
    background: url(${coverrev});
    background-size: cover;
    background-position: center;
    .cont{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1em 2em;
        margin: auto;
    }
    .form{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1em 2em;
        margin: auto;
        margin-bottom: 3rem;
    }
    @media (max-width: 780px) {
       .cont,.for{
        padding: 2em 0.5em;
       }
        }
`