import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Titles from "./pages/titles";
import Navbar from "./components/ui/navBar/navBar";
import TournamentsTable from "./pages/tournaments-table";
import TournamentDetails from "pages/tournament-details";
import Provider from "components/context/provider";
import Standings from "pages/standings";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastProvider } from "react-toast-notifications";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      staleTime: 300000,
      retry: (counter, error) => {
        return !(
          Object.values(error as Error)[2]?.status === 404 || counter === 2
        );
      },
    },
  },
});

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ToastProvider placement="bottom-left" autoDismissTimeout={5000}>
          <Provider>
            <Helmet defaultTitle="PGG's Tournament Series" />
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/tournaments-table"
                  element={<TournamentsTable />}
                />
                <Route path="/titles" element={<Titles />} />
                <Route path="/standings" element={<Standings />} />
                <Route
                  path="/tournament-details"
                  element={<TournamentDetails />}
                />
              </Routes>
            </Router>
          </Provider>
        </ToastProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
