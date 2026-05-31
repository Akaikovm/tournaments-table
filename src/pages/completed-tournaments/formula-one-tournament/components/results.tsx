import React, { useState } from "react";
import { SegmentedTabs } from "components/ui/tabs";
import Bahrain from "./tracks/bahrain";
import SaudiArabia from "./tracks/saudi-arabia";
import Australia from "./tracks/australia";
import Azerbaijan from "./tracks/azerbaijan";
import Miami from "./tracks/miami";
import Imola from "./tracks/imola";
import Monaco from "./tracks/monaco";
import Spain from "./tracks/spain";
import Canada from "./tracks/canada";
import Austria from "./tracks/austria";
import GreatBritain from "./tracks/greatBritain";
import Hungary from "./tracks/hungary";
import Belgium from "./tracks/belgium";
import Netherlands from "./tracks/netherlands";
import Italy from "./tracks/italy";
import Singapore from "./tracks/singapore";
import Japan from "./tracks/japan";

const tabs = [
  { value: "barein", label: "Baréin" },
  { value: "arabiaSaudita", label: "Arabia Saudita" },
  { value: "australia", label: "Australia" },
  { value: "azerbaiyan", label: "Azerbaiyan" },
  { value: "miami", label: "Miami" },
  { value: "imola", label: "Emilia Romagna" },
  { value: "monaco", label: "Monaco" },
  { value: "españa", label: "España" },
  { value: "canada", label: "Canada" },
  { value: "austria", label: "Austria" },
  { value: "greatBritain", label: "Gran Bretaña" },
  { value: "hungria", label: "Hungria" },
  { value: "belgica", label: "Belgica" },
  { value: "holanda", label: "Holanda" },
  { value: "italia", label: "Italia" },
  { value: "singapore", label: "Singapore" },
  { value: "japan", label: "Japan" },
];

const components: Record<string, React.ComponentType> = {
  barein: Bahrain,
  arabiaSaudita: SaudiArabia,
  australia: Australia,
  azerbaiyan: Azerbaijan,
  miami: Miami,
  imola: Imola,
  monaco: Monaco,
  españa: Spain,
  canada: Canada,
  austria: Austria,
  greatBritain: GreatBritain,
  hungria: Hungary,
  belgica: Belgium,
  holanda: Netherlands,
  italia: Italy,
  singapore: Singapore,
  japan: Japan,
};

const Results = () => {
  const [active, setActive] = useState<string>("barein");
  const ActiveTrack = components[active];

  return (
    <div className="text-white">
      <div className="flex items-end justify-between mb-5">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
            Resultados
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            <span className="gradient-text">Resultados de la Temporada</span>
          </h2>
        </div>
      </div>
      <SegmentedTabs
        items={tabs}
        activeValue={active}
        onChange={setActive}
        className="mb-6"
      />
      <div className="animate-fade-in">{ActiveTrack ? <ActiveTrack /> : null}</div>
    </div>
  );
};

export default Results;
