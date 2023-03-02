import React from "react";

const Drivers = () => {
  return (
    <div className="text-white">
      <h1 className="pl-3 text-2xl">Pilotos Inscritos</h1>
      <ul className="list-disc list-inside pl-3 mt-4">
        <li>
          <span className="relative right-2">Jose Marquez - Ferrari</span>
        </li>
        <li>
          <span className="relative right-2">Andres Giusti - McLaren</span>
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
          <span className="relative right-2">Angel Martin - Aston Martin</span>
        </li>
        <li>
          <span className="relative right-2">Carlos Giusti - Alpine</span>
        </li>
        <li>
          <span className="relative right-2">Luis Garcia - Red Bull</span>
        </li>
      </ul>
    </div>
  );
};

export default Drivers;
