import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {WelcomePage, Profile ,ReadingAdd ,
  RecordList,Graphs,Footer,NavBar,RoutineTable,ChartList,RandomTable,
  RandomPieChart,Signup,Login, LandingPage} from './components';


function App() {
  return (
<BrowserRouter>
       <div className="App">
       {/* <NavBar/> */}
       <Routes>
         <Route path="/" element={<><LandingPage/></>}></Route>
        </Routes>
       <Routes>
          <Route path="/login" element={<><Login/></>} />
          <Route path="/signup" element={<><Signup/></>} />
       </Routes>
        <Routes>
         <Route path="/welcome" element={<><NavBar/><WelcomePage/></>}></Route>
        </Routes>
        <Routes>
         <Route path="/routine_record/" element={<><NavBar/><h1>Blood Sugar Report</h1><RoutineTable/><ChartList/></>}></Route>
        </Routes>
        <Routes>
         <Route path="/random_record/" element={<><NavBar/><h1>Random Blood Sugar Report</h1><RandomTable/><RandomPieChart/></>}></Route>
        </Routes>
        <Routes>
         <Route path="/profile/" element={<><NavBar/><Profile/></>}></Route>
        </Routes>
        <Routes>
         <Route path="/addreadings/" element={<><NavBar/><ReadingAdd/></>}></Route>
        </Routes>
        <Routes>
         <Route path="/listrecords/" element={<><NavBar/><RecordList/></>}></Route>
        </Routes>
        <Routes>
         <Route path="/graphs/" element={<><NavBar/><Graphs/></>}></Route>
        </Routes>
       <Footer/>
      </div> 
    </BrowserRouter>
  );
}

export default App;
