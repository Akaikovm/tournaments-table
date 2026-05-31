import React from "react";

const races = [
  { name: "GP de Baréin", date: "5 Marzo", flag: "🇧🇭" },
  { name: "GP de Arabia Saudita", date: "19 Marzo", flag: "🇸🇦" },
  { name: "GP de Australia", date: "2 Abril", flag: "🇦🇺" },
  { name: "GP de Azerbaiyan", date: "30 Abril", flag: "🇦🇿" },
  { name: "GP de Miami", date: "7 Mayo", flag: "🇺🇸" },
  { name: "GP de Emilia-Romagna", date: "21 Mayo", flag: "🇮🇹" },
  { name: "GP de Monaco", date: "28 Mayo", flag: "🇲🇨" },
  { name: "GP de España", date: "4 Junio", flag: "🇪🇸" },
  { name: "GP de Canada", date: "18 Junio", flag: "🇨🇦" },
  { name: "GP de Austria", date: "2 Julio", flag: "🇦🇹" },
  { name: "GP de Gran Bretaña", date: "9 Julio", flag: "🇬🇧" },
  { name: "GP de Hungria", date: "23 Julio", flag: "🇭🇺" },
  { name: "GP de Belgica", date: "30 Julio", flag: "🇧🇪" },
  { name: "GP de Holanda", date: "27 Agosto", flag: "🇳🇱" },
  { name: "GP de Italia", date: "3 Septiembre", flag: "🇮🇹" },
  { name: "GP de Singapur", date: "17 Septiembre", flag: "🇸🇬" },
  { name: "GP de Japon", date: "24 Septiembre", flag: "🇯🇵" },
];

const Calendar = () => {
  return (
    <div className="text-white">
      <div className="flex items-end justify-between mb-5">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
            Schedule 2023
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            <span className="gradient-text">Calendario F1 2023</span>
          </h2>
        </div>
        <div className="hidden sm:block text-xs text-white/50">
          {races.length} carreras
        </div>
      </div>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {races.map((r, i) => (
          <li
            key={r.name}
            className="relative flex items-center gap-3 rounded-2xl glass gradient-border p-4"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 border border-brand-400/30 font-display font-bold text-brand-200">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xl">{r.flag}</span>
                <span className="font-semibold text-white truncate">
                  {r.name}
                </span>
              </div>
              <div className="text-xs text-white/55">{r.date}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Calendar;
