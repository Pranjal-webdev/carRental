import React from "react";
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Carcard from "./Pages/Carcard";
import Bigcar from "./Pages/Bigcar";
import Layout from "./Components/Layout";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration />} />
        
        <Route element={<Layout />}>

          <Route path="/home" element={<Home />} />

          <Route path="/cars" element={<Carcard />} />

          <Route path="/cardetail/:id" element={<Bigcar />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/checkout" element={<Checkout />} />
          
        </Route>

      </Routes>
    </div>
  )
}
export default App;