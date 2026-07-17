import React from "react";
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Carcard from "./Pages/Carcard";
import Bigcar from "./Pages/Bigcar";
import Layout from "./Components/Layout";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Success from "./Pages/Success";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import Dashboard from "./Pages/Admin/Dashboard";
import AdminProtectedRoute from "./Components/AdminProtectedRoute";
import AdminLayout from "./Components/AdminLayout";

const App = () => {

  return (

    <div>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />

        <Route element={<Layout />}>

          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cars"
            element={
              <ProtectedRoute>
                <Carcard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cardetail/:id"
            element={
              <ProtectedRoute>
                <Bigcar />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          <Route
            path="/success"
            element={
              <ProtectedRoute>
                <Success />
              </ProtectedRoute>
            }
          />

        </Route>

        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminLayout />
            </AdminProtectedRoute>
          }
        >

          <Route index element={<Dashboard />} />

        </Route>

      </Routes>
    </div>
  )
}
export default App;