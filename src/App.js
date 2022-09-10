import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {WelcomePage, Profile ,ReadingAdd ,
  RecordList,Graphs,Footer,NavBar,RoutineTable,ChartList,RandomTable,
  RandomPieChart,Login,Signup} from './components';
import LOG from './LOG';
import LOG2 from './LOG2';
import SignUP2 from './SignUP2';

function App() {
  return (
<BrowserRouter>
       <div className="App">
       <NavBar/>
       {/* <LOG/>
       <LOG2/> */}
       <Routes>
          {/* <Route path="/signup" element={<><Signup/></>} />
          <Route path="/login" element={<><Login/></>} /> */}
          <Route path="/login" element={<><LOG/></>} />
          <Route path="/signup" element={<><SignUP2/></>} />
       </Routes>
        <Routes>
         <Route path="/" element={<WelcomePage/>}></Route>
        </Routes>
        <Routes>
         <Route path="/routine_record/" element={<><h1>Blood Sugar Report</h1><RoutineTable/><ChartList/></>}></Route>
        </Routes>
        <Routes>
         <Route path="/random_record/" element={<><h1>Random Blood Sugar Report</h1><RandomTable/><RandomPieChart/></>}></Route>
        </Routes>
        <Routes>
         <Route path="/profile/" element={<><Profile/></>}></Route>
        </Routes>
        <Routes>
         <Route path="/addreadings/" element={<><ReadingAdd/></>}></Route>
        </Routes>
        <Routes>
         <Route path="/listrecords/" element={<><RecordList/></>}></Route>
        </Routes>
        <Routes>
         <Route path="/graphs/" element={<><Graphs/></>}></Route>
        </Routes>
       <Footer/>
      </div> 
    </BrowserRouter>
  );
}

export default App;
