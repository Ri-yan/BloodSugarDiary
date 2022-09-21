import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {WelcomePage, Profile ,ReadingAdd ,
  RecordList,Graphs,Footer,NavBar,RoutineTable,RoutineChartList,RandomTable,
  RandomPieChart,Signup,Login, LandingPage, Random2, Routine2, ProfileEdit, ForgotPassword} from './components';
import Todo from './todo';
import RoutineComp from './components/TableComponents/RoutineComp';
import RandomComp from './components/TableComponents/RandomComp';



function App() {
  return (
<BrowserRouter>
       <div className="App">
        {/* <Todo/> */}
       {/* <NavBar/> */}
       <Routes>
         <Route path="/" element={<><LandingPage/></>}></Route>
         <Route path="/table" element={<><NavBar/><RoutineComp/></>}></Route>

        </Routes>
       <Routes>
          <Route path="/login" element={<><Login/></>} />
          <Route path="/signup" element={<><Signup/></>} />
          <Route path="/forgot-password" element={<><ForgotPassword/></>} />
       </Routes>
        <Routes>
         <Route path="/welcome" element={<><NavBar/><WelcomePage/></>}></Route>
        </Routes>
        <Routes>
         <Route path="/routine_record/" element={<><NavBar/>
         {/* <h1>Blood Sugar Report</h1> */}
         <RoutineComp/>
         {/* <Routine2/> */}
         {/* <RoutineTable/> */}
         {/* <RoutineChartList/> */}
         </>}></Route>
        </Routes>
        <Routes>
         <Route path="/random_record/" element={<><NavBar/>
         {/* <h1>Random Blood Sugar Report</h1><Random2/> */}
         {/* <RandomTable/> */}
         {/* <RandomPieChart/> */}
         <RandomComp/>
         </>}></Route>
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
        <Routes>
         <Route path="/profileedit/" element={<><NavBar/><ProfileEdit/></>}></Route>
        </Routes>
       <Footer/>
      </div> 
    </BrowserRouter>
  );
}

export default App;
