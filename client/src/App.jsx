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
import Cars from "./Pages/Admin/Cars";
import AddCar from "./Pages/Admin/AddCar";
import Booking from "./Pages/Admin/Booking";
import Users from "./Pages/Admin/Users";
import MyBookings from "./Pages/MyBooking";
import NoResults from "./Pages/NoResults";
import Feedback from "./Pages/Feedback";
import About from "./Pages/About";
import NavbarLayout from "./Components/NavbarLayout";


const App = () => {

  return (

    <div>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feedback" element={<Feedback />} />

        <Route element={<Layout />}>

          <Route path="/no-results" element={<NoResults />} />
          <Route path="/my-bookings" element={<MyBookings />} />

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

          <Route path="cars" element={<Cars />} />

          <Route path="add-car" element={<AddCar />} />

          <Route path="add-car/:id" element={<AddCar />} />

          <Route path="booking" element={<Booking />} />

          <Route path="users" element={<Users />} />

          <Route path="feedback" element={<Feedback />} />

        </Route>

        <Route element={<NavbarLayout />}>

           <Route path="/about" element={<About />} />

        </Route>

      </Routes>
    </div>
  )
}
export default App;