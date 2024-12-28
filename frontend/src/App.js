import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import DashBord from "./components/DashBord";
import Img from "./logo.webp"
import './App.css'
function App() {
  return (
  <div className="bg-slate-900 h-screen w-screen">
   <img src={Img} alt="logo" className="w-60 m-0" />
    <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path='/'></Route>
        <Route element={<Registration/>} path='/register'/>
        <Route element={<DashBord/>} path='/dashbord/'/>
      </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
