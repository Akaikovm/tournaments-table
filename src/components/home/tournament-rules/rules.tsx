import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const rules = [
  "Todo torneo pre-tabla no sera valido para la tabla pero puede ser recordado.",
  "Para ser valido el torneo debe involucrar a mas de 1 persona del grupo.",
  "Si el torneo no incluye CPU, cualquier nivel de dificultad puede ser usado en el juego (caso de que sea videojuego).",
  "Todo torneo debe tener el mismo nivel de dificultad y/o modo de juego para todos los jugadores involucrados.",
  "El nivel de dificultad y/o modo de juego sera pactado entre los jugadores antes de empezar el torneo.",
  "Los torneos pueden ser empezados con 2 personas si los otros 2 no quieren participar.",
  "Todo torneo suspendido dara como campeon y subcampeon a los 2 primeros lugares hasta el momento de la cancelacion.",
  "Para un torneo de NBA/NFL/FIFA/NHL/MLB los involucrados deben dar validez previo torneo.",
  "Si un jugador no tiene el mismo nivel de dificultad/modo y llega a ganar, el titulo sera del segundo lugar.",
  "Si alguno hace trampa sera descalificado y el titulo sera del segundo lugar.",
  "Los subcampeones tambien ganaran puntos para la tabla, la mitad del campeon segun el tier.",
];

const Rules = () => {
  const [open, setOpen] = useState(true);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
      <div className="rounded-3xl glass gradient-border overflow-hidden animate-fade-in-up">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-brand-gradient text-white font-display font-bold shadow-[0_8px_24px_rgba(99,102,241,0.45)]">
              §
            </span>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
                Da Rules
              </div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-white">
                Reglamento de la Serie
              </h2>
            </div>
          </div>
          <FiChevronDown
            className={`h-5 w-5 text-white/60 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`grid transition-all duration-500 ease-out ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-5 sm:px-6 pb-6 sm:pb-7">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {rules.map((rule, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3.5 hover:bg-white/[0.04] transition-colors"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-500/15 border border-brand-400/30 text-[11px] font-bold text-brand-200">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-white/80">
                      {rule}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
