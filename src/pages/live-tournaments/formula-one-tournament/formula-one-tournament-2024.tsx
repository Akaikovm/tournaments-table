import React, { useState } from "react";
import { TitleBar } from "components/ui/titleBar";
import { Container } from "components/ui/container";
import { SegmentedTabs } from "components/ui/tabs";
import Drivers from "./components/drivers";
import Calendar from "./components/calendar";
import Standings from "./components/standings";

const tabs = [
  { value: "pilotos", label: "Pilotos" },
  { value: "calendario", label: "Calendario" },
  { value: "estadisticas", label: "Estadisticas" },
];

const Formula1Tournament2024 = () => {
  const [activeTab, setActiveTab] = useState<string>("pilotos");

  return (
    <>
      <TitleBar
        title="Formula 1 2024"
        subtitle="Temporada finalizada: pilotos, calendario y campeonato."
      />
      <Container size="large">
        <SegmentedTabs
          items={tabs}
          activeValue={activeTab}
          onChange={setActiveTab}
          className="mb-6 sm:mb-8"
        />

        <div className="animate-fade-in">
          {activeTab === "pilotos" && <Drivers />}
          {activeTab === "calendario" && <Calendar />}
          {activeTab === "estadisticas" && <Standings />}
        </div>
      </Container>
    </>
  );
};

export default Formula1Tournament2024;
