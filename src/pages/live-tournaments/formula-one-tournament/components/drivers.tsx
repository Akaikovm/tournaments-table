import React from "react";
import { drivers2024 } from "domain/data/drivers/constant";
import { useNavigate } from "react-router-dom";

const teamGradient = (team: string) => {
  const t = team.toLowerCase();
  if (t.includes("ferrari")) return "from-rose-500/40 via-rose-600/20 to-rose-400/10";
  if (t.includes("mclaren")) return "from-amber-500/40 via-orange-500/20 to-amber-400/10";
  if (t.includes("mercedes")) return "from-cyan-400/40 via-teal-400/20 to-cyan-300/10";
  if (t.includes("red bull")) return "from-blue-500/40 via-indigo-600/20 to-blue-400/10";
  return "from-amber-500/30 via-orange-500/20 to-rose-500/10";
};

const Drivers = () => {
  const navigate = useNavigate();

  const handleDriverClick = (driver: any) => {
    navigate(`/driver/${driver.driverFirstName}-${driver.driverLastName}`, {
      state: { driver },
    });
  };

  return (
    <div className="text-white">
      <div className="flex items-end justify-between mb-5">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
            Roster
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            <span className="gradient-text">F1 Drivers 2024</span>
          </h2>
        </div>
        <div className="hidden sm:block text-xs text-white/50">
          {drivers2024.length} pilotos
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {drivers2024.map((driver) => (
          <button
            key={driver.id}
            type="button"
            onClick={() => handleDriverClick(driver)}
            className="group relative overflow-hidden rounded-3xl glass gradient-border p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
          >
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br ${teamGradient(
                driver.team
              )} blur-3xl opacity-80 group-hover:opacity-100 transition-opacity`}
            />
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  {driver.driverFirstName}
                </p>
                <p className="font-display text-xl font-bold text-white uppercase tracking-tight">
                  {driver.driverLastName}
                </p>
              </div>
              <img
                src={driver.countryFlag}
                alt="countryFlag"
                className="w-9 h-9 rounded-lg ring-1 ring-white/15 object-cover"
              />
            </div>
            <div className="relative mt-4 flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/50">
                  Team
                </p>
                <p className="text-sm font-semibold text-white/85">
                  {driver.team}
                </p>
              </div>
              <p className="text-5xl sm:text-6xl font-display font-bold gradient-text leading-none">
                {driver.carNumber}
              </p>
            </div>
            <div className="relative mt-5 aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06]">
              <img
                src={process.env.PUBLIC_URL + driver.driverPhoto}
                alt="driverPhoto"
                className="h-full w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Drivers;
