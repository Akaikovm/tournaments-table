import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Titles from "./pages/titles";
import Navbar from "./components/navBar/navBar";
import TournamentsTable from "./pages/tournaments-table";
import TournamentDetails from "pages/tournament-details";
import Provider from "components/context/provider";
import "./App.css";

function App() {
  return (
    <div>
      <Provider>
        <Helmet defaultTitle="PGG's Tournament Series" />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tournaments-table" element={<TournamentsTable />} />
            <Route path="/titles" element={<Titles />} />
            <Route path="/tournament-details" element={<TournamentDetails />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
