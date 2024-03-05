import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
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

const Results = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleTabChangeResponsive = (event: any) => {
    const value = parseInt(event.target.value, 10);
    setActiveTab(value);
  };

  return (
    <div className="text-white">
      <h1 className="text-2xl text-center mt-4">Resultados de la temporada</h1>
      <div className="mt-4">
        {/* Desktop tabs */}
        <Tabs id="custom-animation" value="barein" className="hidden md:block">
          <TabsHeader
            className="text-red-700 cursor-pointer bg-gray-800"
            indicatorProps={{
              style: {
                backgroundColor: "bg-slate-500",
                opacity: "0.1",
              },
            }}
          >
            <Tab onClick={() => handleTabClick(0)} value={"barein"}>
              Baréin
            </Tab>
            <Tab onClick={() => handleTabClick(1)} value={"arabiaSaudita"}>
              Arabia Saudita
            </Tab>
            <Tab onClick={() => handleTabClick(2)} value={"australia"}>
              Australia
            </Tab>
            <Tab onClick={() => handleTabClick(3)} value={"azerbaiyan"}>
              Azerbaiyan
            </Tab>
            <Tab onClick={() => handleTabClick(4)} value={"miami"}>
              Miami
            </Tab>
            <Tab onClick={() => handleTabClick(5)} value={"imola"}>
              Emilia Romagna
            </Tab>
            <Tab onClick={() => handleTabClick(6)} value={"monaco"}>
              Monaco
            </Tab>
            <Tab onClick={() => handleTabClick(7)} value={"españa"}>
              España
            </Tab>
            <Tab onClick={() => handleTabClick(8)} value={"canada"}>
              Canada
            </Tab>
            <Tab onClick={() => handleTabClick(9)} value={"austria"}>
              Austria
            </Tab>
            <Tab onClick={() => handleTabClick(10)} value={"greatBritain"}>
              Gran Bretaña
            </Tab>
            <Tab onClick={() => handleTabClick(11)} value={"hungria"}>
              Hungria
            </Tab>
            <Tab onClick={() => handleTabClick(12)} value={"belgica"}>
              Belgica
            </Tab>
            <Tab onClick={() => handleTabClick(13)} value={"holanda"}>
              Holanda
            </Tab>
            <Tab onClick={() => handleTabClick(14)} value={"italia"}>
              Italia
            </Tab>
            <Tab onClick={() => handleTabClick(15)} value={"singapore"}>
              Singapore
            </Tab>
            <Tab onClick={() => handleTabClick(16)} value={"japan"}>
              Japan
            </Tab>
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            <TabPanel value={"barein"}>
              {activeTab === 0 && <Bahrain />}
            </TabPanel>
            <TabPanel value={"arabiaSaudita"}>
              {activeTab === 1 && <SaudiArabia />}
            </TabPanel>
            <TabPanel value={"australia"}>
              {activeTab === 2 && <Australia />}
            </TabPanel>
            <TabPanel value={"azerbaiyan"}>
              {activeTab === 3 && <Azerbaijan />}
            </TabPanel>
            <TabPanel value={"miami"}>{activeTab === 4 && <Miami />}</TabPanel>
            <TabPanel value={"imola"}>{activeTab === 5 && <Imola />}</TabPanel>
            <TabPanel value={"monaco"}>
              {activeTab === 6 && <Monaco />}
            </TabPanel>
            <TabPanel value={"españa"}>{activeTab === 7 && <Spain />}</TabPanel>
            <TabPanel value={"canada"}>
              {activeTab === 8 && <Canada />}
            </TabPanel>
            <TabPanel value={"austria"}>
              {activeTab === 9 && <Austria />}
            </TabPanel>
            <TabPanel value={"greatBritain"}>
              {activeTab === 10 && <GreatBritain />}
            </TabPanel>
            <TabPanel value={"hungria"}>
              {activeTab === 11 && <Hungary />}
            </TabPanel>
            <TabPanel value={"belgica"}>
              {activeTab === 12 && <Belgium />}
            </TabPanel>
            <TabPanel value={"holanda"}>
              {activeTab === 13 && <Netherlands />}
            </TabPanel>
            <TabPanel value={"italia"}>
              {activeTab === 14 && <Italy />}
            </TabPanel>
            <TabPanel value={"singapore"}>
              {activeTab === 15 && <Singapore />}
            </TabPanel>
            <TabPanel value={"japan"}>{activeTab === 16 && <Japan />}</TabPanel>
          </TabsBody>
        </Tabs>
        {/* Responsive */}
        <div className="block md:hidden overflow-hidden">
          <select
            className="bg-black mt-4 w-full border-black-300 border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-700 focus:border-red-700 sm:text-sm"
            value={activeTab}
            onChange={(event) => handleTabChangeResponsive(event)}
          >
            <option value={0}>Bahrain</option>
            <option value={1}>Arabia Saudita</option>
            <option value={2}>Australia</option>
            <option value={3}>Azerbaiyan</option>
            <option value={4}>Miami</option>
            <option value={5}>Emilia Romagna</option>
            <option value={6}>Monaco</option>
            <option value={7}>España</option>
            <option value={8}>Canada</option>
            <option value={9}>Austria</option>
            <option value={10}>Gran Bretaña</option>
            <option value={11}>Hungria</option>
            <option value={12}>Belgica</option>
            <option value={13}>Holanda</option>
            <option value={14}>Italia</option>
            <option value={15}>Singapore</option>
            <option value={16}>Japan</option>
          </select>
          <div>{activeTab === 0 && <Bahrain />}</div>
          <div>{activeTab === 1 && <SaudiArabia />}</div>
          <div>{activeTab === 2 && <Australia />}</div>
          <div>{activeTab === 3 && <Azerbaijan />}</div>
          <div>{activeTab === 4 && <Miami />}</div>
          <div>{activeTab === 5 && <Imola />}</div>
          <div>{activeTab === 6 && <Monaco />}</div>
          <div>{activeTab === 7 && <Spain />}</div>
          <div>{activeTab === 8 && <Canada />}</div>
          <div>{activeTab === 9 && <Austria />}</div>
          <div>{activeTab === 10 && <GreatBritain />}</div>
          <div>{activeTab === 11 && <Hungary />}</div>
          <div>{activeTab === 12 && <Belgium />}</div>
          <div>{activeTab === 13 && <Netherlands />}</div>
          <div>{activeTab === 14 && <Italy />}</div>
          <div>{activeTab === 15 && <Singapore />}</div>
          <div>{activeTab === 16 && <Japan />}</div>
        </div>
      </div>
    </div>
  );
};

export default Results;
