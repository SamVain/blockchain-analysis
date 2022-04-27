import React from "react";
import './App.css';
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from './pages';
import DataView from './pages/dataview';
import LiveView from './pages/liveview';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/dataview" exact element={<DataView/>} />
        <Route path="/liveview" exact element={<LiveView/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
      </Routes>
    </>
  );
}

export default App;