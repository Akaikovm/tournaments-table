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

const Formula1Tournament = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="relative">
        <TitleBar title="Formula 1 2023" />
      </div>
      <Tabs id="custom-animation" value="reglas">
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
          <TabPanel value={"reglas"}>
            {activeTab === 0 ? <Rules /> : null}
          </TabPanel>
          <TabPanel value={"pilotos"}>
            {activeTab === 1 ? <Drivers /> : null}
          </TabPanel>
          <TabPanel value={"calendario"}>
            {activeTab === 2 ? <Calendar /> : null}
          </TabPanel>
          <TabPanel value={"resultados"}>
            {activeTab === 3 ? <Results /> : null}
          </TabPanel>
          <TabPanel value={"estadisticas"}>
            {activeTab === 4 ? <Standings /> : null}
          </TabPanel>
        </TabsBody>
      </Tabs>
    </>
  );
};

export default Formula1Tournament;
