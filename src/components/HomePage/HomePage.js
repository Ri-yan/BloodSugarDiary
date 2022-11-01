import styled from 'styled-components'
import FeaturesCard from './FeaturesCard';
import { add_file,add_post,everyday,opened_tabs,
  random_thoughts,throw_away ,
 } from '../../assets';
 
const features=[{
  id:5,
  title:'List all records',
  cover:`${opened_tabs}`,
  disc:'view list of saved records.',
  link:'/listrecords'
 },{
  id:1,
  title:'Add a new Test result',
  cover:`${add_file}`,
  disc:'Add a new record in database.',
  link:'/addreadings'
 },
 {
  id:2,
  title:'Edit a record',
  cover:`${add_post}`,
  disc:'edit or update records.',
  link:'/listrecords'
 },
 {
  id:6,
  title:'Routine Records',
  cover:`${everyday}`,
  disc:'get complete insight of routine record',
  link:'/routine_record'
 },
 {
  id:3,
  title:'Delete a record',
  cover:`${throw_away}`,
  disc:'delete a record from database.',
  link:'/listrecords'
 },       
 {
  id:7,
  title:'Random Record',
  cover:`${random_thoughts}`,
  disc:'view rondom readings.',
  link:'/random_record'
 }]
const HomePage = () => {
   
    return (
        <WelcomeCom>
          <FeaturesCard features={features}/>
        </WelcomeCom>
      );
}

export default HomePage
const WelcomeCom = styled.div`
    width: -webkit-fill-available;
    
`