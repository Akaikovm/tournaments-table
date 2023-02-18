import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";

const Slider = () => {
  return (
    <>
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-red-500 font-bold p-2">QUIEN VA A MEAR A QUIEN?</p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Juega con nosotros.
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              Quieres ser el mas
            </p>
            <Typed
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
              strings={["PRO", "GUEVO", "MION"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            Ven y participa ahora en la PGG's Tournament Series
          </p>
          <Link
            to={{ pathname: `/tournaments-table` }}
            className="bg-red-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
          >
            Ver Torneos
          </Link>
        </div>
      </div>
    </>
  );
};

export default Slider;
