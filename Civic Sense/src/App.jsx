import React from "react"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import {Routes, Route} from "react-router-dom"
import Learn from "./components/Learn"
import Stories from "./components/Stories"
import TakePledge from "./components/TakePledge"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/learn"
          element={<Learn />}
        />
        <Route
          path="/stories"
          element={<Stories />}
        />
        <Route
          path="/takepledge"
          element={<TakePledge />}
        />
      </Routes>
    </>
  )
}

export default App
