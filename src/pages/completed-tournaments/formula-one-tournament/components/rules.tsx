import React from "react";

const rules = [
  "Los puntos seran repartidos de la misma manera que en la formula 1.",
  "El formato de Clasificacion sera el mismo de la F1, pero solo una Q.",
  "La IA correra con un nivel de dificultad de 65.",
  "Las Carreras tendran una distancia de 50%.",
  "Las Carreras se correran en modo multijugador clasico porque tenemos jugadores Cross.",
  "Cualquier accidente de carrera podria ser estudiado y causar penalizacion luego de cada carrera.",
  "Luego de la 3era Vuelta cuando se active el DRS la carrera sera valida y no habra repeticiones.",
  "Los pilotos podran correr con las ayudas que quieran.",
  "Si por alguna razon se cancela el torneo, quedaran como campeon y subcampeon los pilotos en 1er y 2do lugar.",
  "Si el circuito es callejero se correra sin daños y si no se correra con daños reducidos.",
];

const Rules = () => {
  return (
    <div className="rounded-3xl glass gradient-border p-5 sm:p-6">
      <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
        Reglamento
      </div>
      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
        Reglas de la Temporada
      </h3>
      <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
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
  );
};

export default Rules;
