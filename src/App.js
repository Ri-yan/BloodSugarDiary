import './App.css';
import Table from './RoutineTable/Table';
import ChartList from './Charts/ChartList';
import RandomTable from './RandomTable/RandomTable';
import RandomPieChart from './RandomTable/RandomPieChart';
import NavBar from './Navigation/NavBar';
import { Footer } from './Footer/Footer';
import WelcomePage from './Welcome/WelcomePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
//     <div className="App">
// <NavBar/>

// <WelcomePage/>
//       <h1>Random Blood Sugar Report</h1>
//       <RandomTable/>
//       <RandomPieChart/>
//       <h1>Blood Sugar Report</h1>
//       <Table/>
//       <ChartList/>
//       <Footer/>
      
//     </div>
<BrowserRouter>
       <div className="App">
       <NavBar/>
        <Routes>
         <Route path="/" element={<WelcomePage/>}></Route>
        </Routes>
        <Routes>
         <Route path="/routine_record/" element={<><h1>Blood Sugar Report</h1><Table/><ChartList/></>}></Route>
        </Routes>
        <Routes>
         <Route path="/random_record/" element={<><h1>Random Blood Sugar Report</h1><RandomTable/><RandomPieChart/></>}></Route>
        </Routes>
       <Footer/>
      </div> 
    </BrowserRouter>
  );
}

export default App;
