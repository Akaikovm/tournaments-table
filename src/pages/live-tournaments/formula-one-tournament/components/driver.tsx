import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TitleBar } from "components/ui/titleBar";
import { Container } from "components/ui/container";
import { Button } from "components/ui/button";

const Driver = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { driver } = location.state || {};

  if (!driver) {
    return (
      <>
        <TitleBar title="Piloto" subtitle="No encontrado" />
        <Container size="large">
          <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.02] p-10 text-center">
            <div className="text-base text-white/70">
              No hay informacion del piloto
            </div>
            <div className="mt-4">
              <Button variant="primary" onClick={() => navigate(-1)}>
                Volver
              </Button>
            </div>
          </div>
        </Container>
      </>
    );
  }

  const stats: { label: string; value: any }[] = [
    { label: "Equipo", value: driver.team },
    { label: "Nacionalidad", value: driver.driverNationality },
    { label: "Podios", value: driver.driverPodiums },
    { label: "Puntos totales", value: driver.driverTotalPoints },
    { label: "GP comenzados", value: driver.driverGrandPrixEntered },
    { label: "Campeonatos", value: driver.driverChampionship || "N/A" },
    {
      label: "Mejor carrera",
      value: `${driver.driverHighestRaceFinish} (x${driver.driverHighestRaceFinishTimes})`,
    },
    { label: "Mejor parrilla", value: driver.driverHighestGridPosition },
    { label: "Fecha nacimiento", value: driver.driverDob },
    { label: "Lugar nacimiento", value: driver.driverPob },
  ];

  return (
    <>
      <TitleBar
        title={`${driver.driverFirstName} ${driver.driverLastName}`}
        subtitle={`#${driver.carNumber} · ${driver.team} · ${driver.driverNationality}`}
        action={
          <Button variant="secondary" onClick={() => navigate(-1)}>
            ← Volver
          </Button>
        }
      />

      <Container size="large">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 animate-fade-in-up">
          {/* Hero card */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-3xl glass gradient-border p-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gradient-to-br from-amber-500/30 via-orange-500/20 to-rose-500/15 blur-3xl"
            />
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  {driver.team}
                </p>
                <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold text-white leading-none">
                  #{driver.carNumber}
                </h2>
              </div>
              <img
                src={driver.countryFlag}
                alt="countryFlag"
                className="w-12 h-12 rounded-xl ring-1 ring-white/15 object-cover"
              />
            </div>

            <div className="relative mt-5 h-72 sm:h-80 rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] flex items-end justify-center">
              <img
                src={process.env.PUBLIC_URL + driver.driverPhoto}
                alt="driverPhoto"
                className="h-full w-auto max-w-full object-contain"
              />
            </div>

            <div className="relative mt-5 flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  {driver.driverFirstName}
                </p>
                <p className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                  {driver.driverLastName}
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-display font-bold gradient-text leading-none">
                  {driver.driverTotalPoints}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-white/50">
                  PTS
                </div>
              </div>
            </div>
          </div>

          {/* Right details */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Car */}
            <div className="relative overflow-hidden rounded-3xl glass gradient-border p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
                Monoplaza
              </div>
              <div className="mt-2 h-44 sm:h-56 rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06]">
                <img
                  src={process.env.PUBLIC_URL + driver.carPhoto}
                  alt="car"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Stats grid */}
            <div className="rounded-3xl glass gradient-border p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
                Informacion del Piloto
              </div>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-white/[0.04] border border-white/[0.06] px-3 py-2.5"
                  >
                    <div className="text-[10px] uppercase tracking-wider text-white/40">
                      {s.label}
                    </div>
                    <div className="mt-0.5 text-sm text-white/90 font-semibold truncate">
                      {s.value ?? "—"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Driver;
