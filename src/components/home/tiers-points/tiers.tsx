import React from "react";

const tiers = [
  {
    code: "IRL",
    pts: 7,
    title: "In Real Life",
    desc: "Ping Pong, Wiffle, Futbol, Poker — torneos presenciales.",
    accent: "from-rose-500/30 via-amber-400/20 to-amber-300/10",
    badge: "from-rose-400 to-amber-300",
  },
  {
    code: "A",
    pts: 5,
    title: "Tier A",
    desc: "Videojuegos donde participamos todos los jugadores.",
    accent: "from-amber-500/30 via-orange-500/20 to-orange-400/10",
    badge: "from-amber-400 to-orange-400",
  },
  {
    code: "B",
    pts: 3,
    title: "Tier B",
    desc: "Torneos casuales: NBA / MLB y similares.",
    accent: "from-orange-500/25 via-rose-500/15 to-rose-400/10",
    badge: "from-orange-400 to-rose-400",
  },
  {
    code: "C",
    pts: 1,
    title: "Tier C",
    desc: "Torneos minimos donde al menos hay 2 personas.",
    accent: "from-emerald-400/25 via-amber-400/15 to-amber-300/10",
    badge: "from-emerald-400 to-amber-400",
  },
];

const Tiers = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
            Sistema de puntos
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            <span className="gradient-text">Tier Points</span>
          </h2>
        </div>
        <p className="text-sm text-white/60 max-w-md">
          Cada tier otorga puntos al campeon. Los subcampeones reciben la mitad
          de su tier.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tiers.map((t, i) => (
          <article
            key={t.code}
            className="group relative overflow-hidden rounded-3xl glass gradient-border p-5 transition-transform duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${t.accent} blur-2xl opacity-70 group-hover:opacity-100 transition-opacity`}
            />
            <div className="relative flex items-center justify-between">
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${t.badge} text-ink-950 font-display font-bold shadow-[0_8px_24px_rgba(0,0,0,0.35)]`}
              >
                {t.code}
              </span>
              <div className="text-right">
                <div className="text-3xl font-display font-bold text-white leading-none">
                  {t.pts}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-white/50">
                  PTS
                </div>
              </div>
            </div>
            <div className="relative mt-5">
              <h3 className="font-display font-semibold text-white">
                {t.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                {t.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Tiers;
