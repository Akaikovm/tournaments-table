import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { TitleBar } from "components/ui/titleBar";

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
            <ul className="list-disc list-inside pl-3">
              <li>
                <span className="relative right-2">
                  Los puntos seran repartidos de la misma manera que en la
                  formula 1.
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  El formato de Clasificacion sera el mismo de la F1.
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  la IA correra con un nivel de dificultad de 65.
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  Las Carreras tendran una distancia de 25%.
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  De no poderse crear el modo liga desde el juego por tener
                  usuarios crossplay el torneo sera jugado en modo carrera
                  amistosa con las normativas correspondientes.
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  Cualquier accidente de carrera podria ser estudiado y causar
                  penalizacion para dicho piloto luego de cada carrera.
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  Luego de la 3era Vuelta cuando se active el DRS la carrera
                  sera tomada como valida y no habra repeticiones.
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  Los pilotos podran correr con las ayudas que quieran.
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  Si por alguna razon se cancela el torneo, quedaran como
                  campeon y subcampeon los pilotos que de momento esten en 1er y
                  2do lugar.
                </span>
              </li>
            </ul>
          </TabPanel>
          <TabPanel className="text-white" value={"pilotos"}>
            <h1 className="pl-3 text-2xl">Pilotos Inscritos</h1>
            <ul className="list-disc list-inside pl-3 mt-4">
              <li>
                <span className="relative right-2">Jose Marquez - Ferrari</span>
              </li>
              <li>
                <span className="relative right-2">
                  Andres Giusti - McLaren
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  Sebastian Villamizar - Ferrari
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  Jose Luis Peñaranda - Red Bull
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  Angel Martin - Aston Martin
                </span>
              </li>
              <li>
                <span className="relative right-2">Carlos Giusti - Alpine</span>
              </li>
              <li>
                <span className="relative right-2">Luis Garcia - Red Bull</span>
              </li>
            </ul>
          </TabPanel>
          <TabPanel className="text-white" value={"calendario"}>
            <ul className="list-disc list-inside pl-3 mt-4">
              <li>
                <span className="relative right-2">GP De Baréin 5 Marzo</span>
              </li>
              <li>
                <span className="relative right-2">
                  GP De Arabia Saudita 19 Marzo
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  GP De Australia 2 Abril
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  GP De Azerbaiyan 30 Abril
                </span>
              </li>
              <li>
                <span className="relative right-2">GP De Miami 7 Mayo</span>
              </li>
              <li>
                <span className="relative right-2">
                  GP De Emilia-Romagna 21 Mayo
                </span>
              </li>
              <li>
                <span className="relative right-2">GP De Monaco 28 Mayo</span>
              </li>
              <li>
                <span className="relative right-2">GP De España 4 Junio</span>
              </li>
              <li>
                <span className="relative right-2">GP De Canada 18 Junio</span>
              </li>
              <li>
                <span className="relative right-2">GP De Austria 2 Julio</span>
              </li>
              <li>
                <span className="relative right-2">
                  GP De Gran Bretaña 9 Julio
                </span>
              </li>
              <li>
                <span className="relative right-2">GP De Hungria 23 Julio</span>
              </li>
            </ul>
          </TabPanel>
          <TabPanel className="text-white text-2xl" value={"resultados"}>
            <h1> No hay resultados para mostrar</h1>
          </TabPanel>
          <TabPanel className="text-white text-2xl" value={"estadisticas"}>
            <h1> No hay estadisticas para mostrar</h1>
          </TabPanel>
        </TabsBody>
      </Tabs>
    </>
  );
};

export default Formula1Tournament;
