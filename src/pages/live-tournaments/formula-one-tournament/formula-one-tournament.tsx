import React from "react";
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
  return (
    <>
      <div className="relative">
        <TitleBar title="Formula 1 2023" />
      </div>
      <Tabs id="custom-animation" value="reglas">
        <TabsHeader className="text-red-700 cursor-pointer bg-gray-800">
          <Tab value={"reglas"}>Reglas</Tab>
          <Tab value={"pilotos"}>Pilotos</Tab>
          <Tab value={"calendario"}>Calendario</Tab>
          <Tab value={"resultados"}>Resultados</Tab>
          <Tab value={"estadisticas"}>Estadisticas</Tab>
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          <TabPanel className="text-white" value={"reglas"}>
            <Rules />
          </TabPanel>
          <TabPanel className="text-white" value={"pilotos"}>
            <Drivers />
          </TabPanel>
          <TabPanel className="text-white" value={"calendario"}>
            <Calendar />
          </TabPanel>
          <TabPanel className="text-white text-2xl" value={"resultados"}>
            <Results />
          </TabPanel>
          <TabPanel className="text-white text-2xl" value={"estadisticas"}>
            <Standings />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </>
  );
};

export default Formula1Tournament;
