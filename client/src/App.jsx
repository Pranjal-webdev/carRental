import React from "react";
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";

const App =()=>{
  return(
    <div>
      <Routes>
        <Route path ="/" element={<Home />}/>
      </Routes>
    </div>
  )
}
export default App;