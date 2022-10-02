import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {WelcomePage, Profile ,ReadingAdd ,
  RecordList,Graphs,Footer,NavBar,RoutineTable,RoutineChartList,RandomTable,
  RandomPieChart,Signup,Login, LandingPage, Random2, Routine2, ProfileEdit, ForgotPassword, PrivateRoute} from './components';
import Todo from './todo';
import RoutineComp from './components/TableComponents/RoutineComp';
import RandomComp from './components/TableComponents/RandomComp';
import { AuthProvider } from './context/AuthContext';
import LogRoute from './components/Authentication/LogRoute';


function App() {
  return (
<BrowserRouter>
       <div className="App">
        {/* <Todo/> */}
       {/* <NavBar/> */}<AuthProvider>
       <Routes>
         <Route path="/" element={<><LandingPage/></>}></Route>
         <Route path="/table" element={<><NavBar/><RoutineComp/></>}></Route>        
          <Route path="/login" element={<><LogRoute><Login/></LogRoute></>} />
          <Route path="/signup" element={<><LogRoute><Signup/></LogRoute></>} />
          <Route path="/forgot-password" element={<><LogRoute><ForgotPassword/></LogRoute></>} />
       

         <Route path="/welcome" element={<><PrivateRoute><NavBar/><WelcomePage/></PrivateRoute></>}></Route>
         <Route path="/routine_record/" element={<><PrivateRoute><NavBar/>
         {/* <h1>Blood Sugar Report</h1> */}
         <RoutineComp/>
         {/* <Routine2/> */}
         {/* <RoutineTable/> */}
         {/* <RoutineChartList/> */}
         </PrivateRoute>
         </>}></Route>
         <Route path="/random_record/" element={<><PrivateRoute><NavBar/>
         {/* <h1>Random Blood Sugar Report</h1><Random2/> */}
         {/* <RandomTable/> */}
         {/* <RandomPieChart/> */}
         <RandomComp/>
         </PrivateRoute></>}></Route>
         <Route path="/profile/" element={<><PrivateRoute><NavBar/><Profile/></PrivateRoute></>}></Route>
         <Route path="/addreadings/" element={<><PrivateRoute><NavBar/><ReadingAdd/></PrivateRoute></>}></Route>
         <Route path="/listrecords/" element={<><PrivateRoute><NavBar/><RecordList/></PrivateRoute></>}></Route>
         <Route path="/graphs/" element={<><PrivateRoute><NavBar/><Graphs/></PrivateRoute></>}></Route>
         <Route path="/profileedit/" element={<><PrivateRoute><NavBar/><ProfileEdit/></PrivateRoute></>}></Route>
        </Routes>
       <Footer/>
       </AuthProvider>
      </div> 
    </BrowserRouter>
  );
}

export default App;
