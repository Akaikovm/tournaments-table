import React from "react";
import { drivers2024 } from "domain/data/drivers/constant";
import { useNavigate } from "react-router-dom";

const Drivers = () => {
  const navigate = useNavigate();

  const handleDriverClick = (driver: any) => {
    navigate(`/driver/${driver.driverFirstName}-${driver.driverLastName}`, {
      state: { driver },
    });
  };

  return (
    <div className="text-white mt-4">
      <div className="flex w-full max-w-screen-xs md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <h1 className="pl-3 text-2xl font-bold">F1 Drivers 2024</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4 mt-4 w-full justify-center mx-auto max-w-screen-xs md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-xl cursor-pointer">
        {drivers2024.map((driver) => (
          <div
            onClick={() => handleDriverClick(driver)}
            className="bg-white rounded-lg shadow-lg p-4 mb-4 transition-transform transform hover:scale-105 mx-20 md:mx-0"
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm text-gray-800 uppercase">
                  {driver.driverFirstName}
                </p>
                <p className="font-bold  text-black uppercase">
                  {driver.driverLastName}
                </p>
              </div>
              <img
                src={driver.countryFlag}
                alt="countryFlag"
                className="w-10 h-10 rounded-xl"
              />
            </div>
            <hr className="border-t my-2" />
            <div>
              <p className="text-sm text-black">{driver.team}</p>
            </div>
            <p className="text-6xl font-bold text-black">{driver.carNumber}</p>
            <img
              src={process.env.PUBLIC_URL + driver.driverPhoto}
              alt="driverPhoto"
              className="h-40 object-cover mt-2 mx-auto xl:ml-32 rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drivers;
