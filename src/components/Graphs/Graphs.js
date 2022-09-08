import React from 'react'
import styled from 'styled-components'
import { cover1 } from '../../assets';

const Graphs = () => {
  return (
    <GraphComp>
        <h1>functionalities adding soon</h1>
    </GraphComp>
  )
}

export default Graphs;

const GraphComp = styled.div`
     width: -webkit-fill-available;
    padding: 30px;
    background: url(${cover1});
    background-size: auto;
    background-repeat: no-repeat;
    @media (max-width: 940px) {
        padding: 5px 0px;
  }

`