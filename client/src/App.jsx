import React from "react";
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Carcard from "./Pages/Carcard";

const App =()=>{
  return(
    <div>
      <Routes>
        <Route path ="/" element={<Registration />}/>
        <Route path ="/home" element={<Home />}/>
        <Route path="/cars" element={<Carcard />}/>
      </Routes>
    </div>
  )
}
export default App;