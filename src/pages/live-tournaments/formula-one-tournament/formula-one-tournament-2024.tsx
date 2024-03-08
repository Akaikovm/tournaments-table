import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { TitleBar } from "components/ui/titleBar";
import Drivers from "./components/drivers";
import Calendar from "./components/calendar";

const Formula1Tournament2024 = () => {
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
        <TitleBar title="Formula 1 2024" />
      </div>
      {/* Desktop tabs */}
      <Tabs id="custom-animation" value="pilotos" className="hidden md:block">
        <TabsHeader
          className="text-red-700 cursor-pointer bg-gray-800 z-0"
          indicatorProps={{
            style: {
              backgroundColor: "bg-slate-500",
              opacity: "0.1",
            },
          }}
        >
          <Tab onClick={() => handleTabClick(0)} value={"pilotos"}>
            Pilotos
          </Tab>
          <Tab onClick={() => handleTabClick(1)} value={"calendario"}>
            Calendario
          </Tab>
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          <TabPanel value={"pilotos"}>
            {activeTab === 0 && <Drivers />}
          </TabPanel>
          <TabPanel value={"calendario"}>
            {activeTab === 1 && <Calendar />}
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
          <option value={0}>Pilotos</option>
          <option value={1}>Calendario</option>
        </select>
        <div>{activeTab === 0 && <Drivers />}</div>
        <div>{activeTab === 1 && <Calendar />}</div>
      </div>
    </>
  );
};

export default Formula1Tournament2024;
