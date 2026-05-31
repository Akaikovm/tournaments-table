import React, { useState } from "react";
import { TitleBar } from "components/ui/titleBar";
import { Container } from "components/ui/container";
import { SegmentedTabs } from "components/ui/tabs";
import Rules from "./components/rules";
import Drivers from "./components/drivers";
import Calendar from "./components/calendar";
import Results from "./components/results";
import Standings from "./components/standings";

const tabs = [
  { value: "reglas", label: "Reglas" },
  { value: "pilotos", label: "Pilotos" },
  { value: "calendario", label: "Calendario" },
  { value: "resultados", label: "Resultados" },
  { value: "estadisticas", label: "Estadisticas" },
];

const Formula1Tournament2023 = () => {
  const [activeTab, setActiveTab] = useState<string>("reglas");

  return (
    <>
      <TitleBar
        title="Formula 1 2023"
        subtitle="Temporada finalizada — explora reglas, pilotos, calendario y resultados."
      />
      <Container size="large">
        <SegmentedTabs
          items={tabs}
          activeValue={activeTab}
          onChange={setActiveTab}
          className="mb-6 sm:mb-8"
        />

        <div className="animate-fade-in">
          {activeTab === "reglas" && <Rules />}
          {activeTab === "pilotos" && <Drivers />}
          {activeTab === "calendario" && <Calendar />}
          {activeTab === "resultados" && <Results />}
          {activeTab === "estadisticas" && <Standings />}
        </div>
      </Container>
    </>
  );
};

export default Formula1Tournament2023;
