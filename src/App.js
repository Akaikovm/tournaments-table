import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataTable from "./components/pages/dataTable";
import Home from "./components/pages/home";
import Navbar from "./components/navBar/navBar";
import "./App.css";

function App() {
  return (
    <div>
      <Helmet defaultTitle="Torneos Amigos Giusti" />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tournaments" element={<DataTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
