import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { TitleBar } from "components/ui/titleBar";
import Pool from "./components/pool";

const EuroCupAndAmericasCupTournament2024 = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleTabChangeResponsive = (event: any) => {
    const value = parseInt(event.target.value, 10);
    setActiveTab(value);
  };

  return (
    <>
      <div className="relative">
        <TitleBar title="Quiniela Copa America / Eurocopa 2024" />
      </div>
      {/* Desktop tabs */}
      <Tabs id="custom-animation" value="quiniela" className="hidden md:block">
        <TabsHeader
          className="text-red-700 cursor-pointer bg-gray-800 z-0"
          indicatorProps={{
            style: {
              backgroundColor: "bg-slate-500",
              opacity: "0.1",
            },
          }}
        >
          <Tab onClick={() => handleTabClick(0)} value={"quiniela"}>
            Quiniela
          </Tab>
          <Tab onClick={() => handleTabClick(1)} value={"resultados"}>
            Resultados
          </Tab>
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          <TabPanel value={"quiniela"}>{activeTab === 0 && <Pool />}</TabPanel>
          <TabPanel value={"resultados"}>
            {activeTab === 1 && (
              <span className="text-white">No hay resultados</span>
            )}
          </TabPanel>
        </TabsBody>
      </Tabs>
      {/* Responsive */}
      <div className="block md:hidden overflow-hidden text-white">
        <select
          className="bg-black mt-4 w-full border-black-300 border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-700 focus:border-red-700 sm:text-sm"
          value={activeTab}
          onChange={(event) => handleTabChangeResponsive(event)}
        >
          <option value={0}>Quiniela</option>
          <option value={1}>Resultados</option>
        </select>
        <div>{activeTab === 0 && <Pool />}</div>
        <div>
          {activeTab === 1 && (
            <span className="text-white">No hay resultados</span>
          )}
        </div>
      </div>
    </>
  );
};

export default EuroCupAndAmericasCupTournament2024;
