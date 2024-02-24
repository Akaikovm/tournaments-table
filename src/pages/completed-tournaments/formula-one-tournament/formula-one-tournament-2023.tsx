import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { TitleBar } from "components/ui/titleBar";
import Rules from "./components/rules";
import Drivers from "./components/drivers";
import Calendar from "./components/calendar";
import Results from "./components/results";
import Standings from "./components/standings";

const Formula1Tournament2023 = () => {
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
        <TitleBar title="Formula 1 2023" />
      </div>
      {/* Desktop tabs */}
      <Tabs id="custom-animation" value="reglas" className="hidden md:block">
        <TabsHeader
          className="text-red-700 cursor-pointer bg-gray-800"
          indicatorProps={{
            style: {
              backgroundColor: "bg-slate-500",
              opacity: "0.1",
            },
          }}
        >
          <Tab onClick={() => handleTabClick(0)} value={"reglas"}>
            Reglas
          </Tab>
          <Tab onClick={() => handleTabClick(1)} value={"pilotos"}>
            Pilotos
          </Tab>
          <Tab onClick={() => handleTabClick(2)} value={"calendario"}>
            Calendario
          </Tab>
          <Tab onClick={() => handleTabClick(3)} value={"resultados"}>
            Resultados
          </Tab>
          <Tab onClick={() => handleTabClick(4)} value={"estadisticas"}>
            Estadisticas
          </Tab>
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          <TabPanel value={"reglas"}>{activeTab === 0 && <Rules />}</TabPanel>
          <TabPanel value={"pilotos"}>
            {activeTab === 1 && <Drivers />}
          </TabPanel>
          <TabPanel value={"calendario"}>
            {activeTab === 2 && <Calendar />}
          </TabPanel>
          <TabPanel value={"resultados"}>
            {activeTab === 3 && <Results />}
          </TabPanel>
          <TabPanel value={"estadisticas"}>
            {activeTab === 4 && <Standings />}
          </TabPanel>
        </TabsBody>
      </Tabs>
      {/* Responsive */}
      <div className="block sm:hidden overflow-hidden text-white">
        <select
          className="bg-black mt-4 w-full border-black-300 border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-700 focus:border-red-700 sm:text-sm"
          value={activeTab}
          onChange={(event) => handleTabChangeResponsive(event)}
        >
          <option value={0}>Reglas</option>
          <option value={1}>Pilotos</option>
          <option value={2}>Calendario</option>
          <option value={3}>Resultados</option>
          <option value={4}>Estadisticas</option>
        </select>
        <div>{activeTab === 0 && <Rules />}</div>
        <div>{activeTab === 1 && <Drivers />}</div>
        <div>{activeTab === 2 && <Calendar />}</div>
        <div>{activeTab === 3 && <Results />}</div>
        <div>{activeTab === 4 && <Standings />}</div>
      </div>
    </>
  );
};

export default Formula1Tournament2023;
