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
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastProvider } from "react-toast-notifications";
import LiveTournaments from "pages/live-tournaments/live-tournaments";
import CompletedTournaments from "pages/completed-tournaments/completed-tournaments";
import Formula1Tournament2023 from "pages/completed-tournaments/formula-one-tournament/formula-one-tournament-2023";
import Formula1Tournament2024 from "pages/live-tournaments/formula-one-tournament/formula-one-tournament-2024";
import Driver from "pages/live-tournaments/formula-one-tournament/components/driver";
import EuroCupAndAmericasCupTournament2024 from "pages/live-tournaments/euro-cup-and-americas-cup-pools/euro-cup-and-americas-cup-tournament-2024";
import "./App.css";

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
    <div className="App relative min-h-screen text-white">
      {/* Animated ambient mesh background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 -left-40 h-[60vh] w-[60vh] rounded-full bg-amber-500/15 blur-3xl animate-float" />
        <div
          className="absolute -bottom-32 -right-32 h-[55vh] w-[55vh] rounded-full bg-orange-500/15 blur-3xl animate-float"
          style={{ animationDelay: "1.2s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 h-[40vh] w-[40vh] rounded-full bg-rose-500/12 blur-3xl animate-float"
          style={{ animationDelay: "2.4s" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:22px_22px] opacity-40" />
      </div>

      <QueryClientProvider client={queryClient}>
        <ToastProvider placement="bottom-left" autoDismissTimeout={5000}>
          <Provider>
            <Helmet defaultTitle="PGG's Tournament Series" />
            <Router>
              <Navbar />
              <main className="pt-2 pb-24 md:pb-12">
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
                  <Route path="/live-tournaments" element={<LiveTournaments />} />
                  <Route
                    path="/completed-tournaments"
                    element={<CompletedTournaments />}
                  />
                  <Route
                    path="/formula-1-2023"
                    element={<Formula1Tournament2023 />}
                  />
                  <Route
                    path="/formula-1-2024"
                    element={<Formula1Tournament2024 />}
                  />
                  <Route path="/driver/:name" element={<Driver />} />
                  <Route
                    path="/americas-and-euro-cup-2024"
                    element={<EuroCupAndAmericasCupTournament2024 />}
                  />
                </Routes>
              </main>
            </Router>
          </Provider>
        </ToastProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
