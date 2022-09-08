import styled from 'styled-components'
import { cover1 } from '../../assets';
import App from './Prime/src/App';

const RecordList = () => {
  return (
    <ListComp>
        <div>RecordList</div>
        <App/>
    </ListComp>
  )
}

export default RecordList
const ListComp = styled.div`
     width: -webkit-fill-available;
    padding: 30px;
    background: url(${cover1});
    background-size: auto;
    background-repeat: no-repeat;
    @media (max-width: 940px) {
        padding: 5px 0px;
  }

`