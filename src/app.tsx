import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataTable from "./pages/dataTable";
import Home from "./pages/home";
import Titles from "./pages/titles";
import Navbar from "./components/navBar/navBar";
import "./App.css";

function App() {
  return (
    <div>
      <Helmet defaultTitle="PGG's Tournament Series" />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tournaments-table" element={<DataTable />} />
          <Route path="/titles" element={<Titles />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
