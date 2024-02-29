import React from "react";
import { useLocation } from "react-router-dom";

const Driver = () => {
  const location = useLocation();
  const { driver } = location.state || {};

  if (!driver) {
    return <div>No hay información del piloto</div>;
  }

  return (
    <div className="flex p-8 bg-black mx-auto max-w-screen-xl mt-8 text-white border border-gray-600">
      <div className="md:flex">
        <div className="md:mr-8 md:w-1/2">
          <img
            src={process.env.PUBLIC_URL + driver.driverPhoto}
            alt="driverPhoto"
            className="h-96 w-96 object-cover rounded-lg mb-4"
            style={{
              objectPosition: "center 20%",
            }}
          />
          <div className="mb-4">
            <div className="flex">
              <h2 className="text-5xl font-bold mb-2">{`${driver.carNumber}`}</h2>
              <img
                src={driver.countryFlag}
                alt="countryFlag"
                className="w-12 h-12 inline-flex ml-4 rounded-xl"
              />
            </div>
            <h2 className="font-bold text-4xl mb-2 mt-2">{`${driver.driverFirstName} ${driver.driverLastName}`}</h2>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Información del Piloto</h2>
            <img
              src={process.env.PUBLIC_URL + driver.carPhoto}
              alt="car"
              className="w-full h-full"
            />

            <ul className="mt-4">
              <li>
                <span className="font-bold">Equipo:</span>{" "}
                <span className="font-serif">{driver.team}</span>
              </li>
              <li>
                <span className="font-bold">Nacionalidad:</span>{" "}
                <span className="font-serif">{driver.driverNationality}</span>
              </li>
              <li>
                <span className="font-bold">Podios:</span>{" "}
                <span className="font-serif">{driver.driverPodiums}</span>
              </li>
              <li>
                <span className="font-bold">Puntos:</span>{" "}
                <span className="font-serif">{driver.driverTotalPoints}</span>
              </li>
              <li>
                <span className="font-bold">Grands Prix comenzados:</span>{" "}
                <span className="font-serif">
                  {driver.driverGrandPrixEntered}
                </span>
              </li>
              <li>
                <span className="font-bold">Campeonatos Mundiales:</span>{" "}
                <span className="font-serif">
                  {driver.driverChampionship || "N/A"}
                </span>
              </li>
              <li>
                <span className="font-bold">Posicion mas alta de Carrera:</span>{" "}
                <span className="font-serif">
                  {driver.driverHighestRaceFinish}{" "}
                  {`(x${driver.driverHighestRaceFinishTimes})`}
                </span>
              </li>
              <li>
                <span className="font-bold">
                  Posicion mas alta de Parrilla:
                </span>{" "}
                <span className="font-serif">
                  {driver.driverHighestGridPosition}
                </span>
              </li>
              <li>
                <span className="font-bold">Fecha de Nacimiento:</span>{" "}
                <span className="font-serif">{driver.driverDob}</span>
              </li>
              <li>
                <span className="font-bold">Lugar de Nacimiento:</span>{" "}
                <span className="font-serif">{driver.driverPob}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Driver;
