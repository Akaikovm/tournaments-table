import React from "react";

const drivers: { name: string; team: string }[] = [
  { name: "Jose Marquez", team: "Ferrari" },
  { name: "Andres Giusti", team: "McLaren" },
  { name: "Sebastian Villamizar", team: "Ferrari" },
  { name: "Jose Luis Peñaranda", team: "Red Bull" },
  { name: "Angel Martin", team: "Red Bull" },
  { name: "Carlos Giusti", team: "McLaren" },
  { name: "Luis Garcia", team: "Red Bull" },
];

const teamColor = (team: string) => {
  const t = team.toLowerCase();
  if (t.includes("ferrari")) return "from-rose-500/40 to-rose-300/10 text-rose-200 border-rose-400/40";
  if (t.includes("mclaren")) return "from-amber-500/40 to-amber-300/10 text-amber-200 border-amber-400/40";
  if (t.includes("red bull")) return "from-blue-500/40 to-blue-300/10 text-blue-200 border-blue-400/40";
  if (t.includes("mercedes")) return "from-cyan-400/40 to-cyan-200/10 text-cyan-200 border-cyan-300/40";
  return "from-brand-500/30 to-brand-300/10 text-brand-200 border-brand-400/40";
};

const Drivers = () => {
  return (
    <div className="text-white">
      <div className="flex items-end justify-between mb-5">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
            Roster 2023
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            <span className="gradient-text">Pilotos Inscritos</span>
          </h2>
        </div>
        <div className="hidden sm:block text-xs text-white/50">
          {drivers.length} pilotos
        </div>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {drivers.map((d, i) => (
          <li
            key={d.name}
            className="relative overflow-hidden rounded-2xl glass gradient-border p-4 flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.06] font-display font-bold text-white/85">
                {i + 1}
              </span>
              <span className="font-semibold text-white">{d.name}</span>
            </div>
            <span
              className={`inline-flex items-center rounded-full bg-gradient-to-r ${teamColor(
                d.team
              )} border px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-bold`}
            >
              {d.team}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drivers;
