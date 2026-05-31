import React from "react";
import { Link } from "react-router-dom";
import Tiers from "components/home/tiers-points/tiers";
import Rules from "../components/home/tournament-rules/rules";
import Slider from "components/home/slider/slider";

const quickLinks = [
  {
    to: "/tournaments-table",
    title: "Torneos",
    desc: "Lista completa de torneos registrados.",
    icon: "🏆",
  },
  {
    to: "/titles",
    title: "Titulos",
    desc: "Ranking de campeones por tier.",
    icon: "👑",
  },
  {
    to: "/standings",
    title: "Estadisticas",
    desc: "Tabla de puntos totales acumulados.",
    icon: "📊",
  },
  {
    to: "/live-tournaments",
    title: "En Vivo",
    desc: "F1 2024 y Quiniela Eurocopa.",
    icon: "🔴",
  },
];

const Home = () => {
  return (
    <>
      <Slider />
      <Rules />
      <Tiers />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((q, i) => (
            <Link
              key={q.to}
              to={q.to}
              className="group relative overflow-hidden rounded-3xl glass gradient-border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="text-2xl">{q.icon}</div>
              <h3 className="mt-3 font-display font-semibold text-white">
                {q.title}
              </h3>
              <p className="mt-1 text-sm text-white/60">{q.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-200">
                Explorar
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
