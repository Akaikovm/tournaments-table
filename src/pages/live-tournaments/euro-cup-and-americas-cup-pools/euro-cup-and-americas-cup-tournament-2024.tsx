import React, { useState } from "react";
import { TitleBar } from "components/ui/titleBar";
import { Container } from "components/ui/container";
import { SegmentedTabs } from "components/ui/tabs";
import Pool from "./components/pool";
import AmericasAndEuroTournamentTable from "./components/americas-and-euro-tournament-table";

const tabs = [
  { value: "quiniela", label: "Quiniela" },
  { value: "resultados", label: "Resultados" },
];

const EuroCupAndAmericasCupTournament2024 = () => {
  const [activeTab, setActiveTab] = useState<string>("resultados");

  return (
    <>
      <TitleBar
        title="Quiniela Copa America / Eurocopa 2024"
        subtitle="Predice los resultados y compite por el primer lugar de la pool."
      />
      <Container size="large">
        <SegmentedTabs
          items={tabs}
          activeValue={activeTab}
          onChange={setActiveTab}
          className="mb-6"
        />

        <div className="animate-fade-in">
          {activeTab === "quiniela" && <Pool />}
          {activeTab === "resultados" && <AmericasAndEuroTournamentTable />}
        </div>
      </Container>
    </>
  );
};

export default EuroCupAndAmericasCupTournament2024;
