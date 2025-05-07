import AutoPlayVideo from "./components/video";
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import Home from "./components/Home";
import WildLife from "./components/WildLife";
import SpiritualPlaces from "./components/SpiritualPlaces";
import TopUniversity from "./components/Universities/topUniversity";
import Navbar from "./components/Navbar";
import Park from "./components/park";
import Beaches from "./components/Beaches/Beaches";
import Hillyareas from "./components/Hillyareas/hillyareas";
import Footer from "./components/Footer";
import Topcities from "./components/TopCities/Topcities";
import IndividualPlaces from "./components/IndividualPlaces";
import Mainpage from "./components/Mainpage";
import {Login } from './components/Login'
import { SignUp } from "./components/SignUp";
const App = () => {
  return (
    <>
   
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path='/home/image0' element={<WildLife/>}></Route>
      <Route path='/home/image1' element={<SpiritualPlaces/>}></Route>
      <Route path='/home/image2' element={<Beaches/>}></Route>
      <Route path='/home/image3' element={<Hillyareas/>}></Route>
      <Route path='/home/image4' element={<Topcities/>}></Route>
      <Route path='/home/image5' element={<TopUniversity/>}></Route>
       <Route path='/park/:id' element={<Park/>}></Route>
       <Route path='/individual/:id' element={<IndividualPlaces/>}></Route>
      <Route path='/' element={<Mainpage/>} ></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      
    </Routes>
     <Footer/>

    </BrowserRouter>
    
    </>
  )
}

export default App