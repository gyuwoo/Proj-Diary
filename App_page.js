import { Routes, Route } from "react-router-dom";
import Read from './pages/Read'
import Home from "./pages/Home";
import Effects from "./pages/Effects"
import React from "react";

function App (){

  return (
    <div>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/read" element={<Read></Read>}/>
          <Route path="/effects" element={<Effects></Effects>}/>
        </Routes>
    </div>
  );
};

export default App;

