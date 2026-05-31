import React from "react";
import { TitleBar } from "components/ui/titleBar";
import { Container } from "components/ui/container";
import { Button } from "components/ui/button";
import { useNavigate } from "react-router-dom";

const LiveTournaments = () => {
  const navigate = useNavigate();

  return (
    <>
      <TitleBar
        title="Torneos En Vivo"
        subtitle="Actualmente no hay torneos activos. Echa un vistazo a los torneos finalizados."
      />
      <Container size="large">
        <div className="relative overflow-hidden rounded-3xl glass gradient-border p-8 sm:p-12 text-center animate-fade-in-up">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-amber-500/15 blur-3xl"
          />
          <div className="relative">
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-3xl">
              🏁
            </div>
            <h2 className="mt-5 font-display text-2xl sm:text-3xl font-bold text-white">
              Sin torneos en vivo
            </h2>
            <p className="mt-2 text-sm sm:text-base text-white/60 max-w-md mx-auto">
              Por el momento todos los torneos estan finalizados. Pronto
              anunciaremos la proxima temporada.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="primary"
                onClick={() => navigate("/completed-tournaments")}
              >
                Ver Torneos Completados
              </Button>
              <Button variant="secondary" onClick={() => navigate("/standings")}>
                Ver Estadisticas
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LiveTournaments;
