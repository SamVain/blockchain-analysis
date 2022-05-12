import React from "react";
import './App.css';import './App.css';
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from './pages';
import DataView from './pages/dataview';
import LiveView from './pages/liveview';
import Dashboard from './pages/dashboard';


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/dataview" exact element={<DataView/>} />
        <Route path="/liveview" exact element={<LiveView/>} />
      </Routes>
    </>
  );
}

export default App;