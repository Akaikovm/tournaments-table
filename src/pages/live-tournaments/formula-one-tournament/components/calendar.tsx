import React, { useState } from "react";
import { tracks2024 } from "domain/data/tracks/constant";
import ReactCardFlip from "react-card-flip";

interface FlippedCards {
  [key: string]: boolean;
}

const Calendar = () => {
  const [flippedCards, setFlippedCards] = useState<FlippedCards>({});

  const handleCardClick = (track: any) => {
    setFlippedCards({
      ...flippedCards,
      [track.id]: !flippedCards[track.id],
    });
  };

  return (
    <div className="text-white mt-4">
      <div className="flex w-full max-w-screen-xs md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <h1 className="pl-3 text-2xl font-bold">F1 Schedule 2024</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4 mt-4 w-full justify-center mx-auto max-w-screen-xs md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-xl cursor-pointer">
        {tracks2024.map((track) => (
          <ReactCardFlip
            key={track.id}
            isFlipped={flippedCards[track.id] || false}
            flipDirection="horizontal"
          >
            {/* Front of the card */}
            <div
              onClick={() => handleCardClick(track)}
              className="card-container mx-20 md:mx-0"
            >
              <div className="front bg-white rounded-lg shadow-lg p-4 mb-4 transition-transform transform hover:scale-105 relative cursor-pointer">
                {track.trackResults.length && (
                  <img
                    src={process.env.PUBLIC_URL + track.trackCompleted}
                    alt="raceFlag"
                    className="w-full h-6 rounded-lg"
                  />
                )}
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-sm text-red-700 uppercase">
                      Ronda {track.id}
                    </p>
                    <p className="text-2xl text-black uppercase">
                      {track.trackDate}
                    </p>
                    <p className="font-bold bg-black text-white uppercase rounded-lg">
                      <div className="text-center">{track.trackMonth}</div>
                    </p>
                  </div>
                  <img
                    src={track.countryFlag}
                    alt="countryFlag"
                    className="w-10 h-10 rounded-xl"
                  />
                </div>
                <hr className="border-t my-2" />
                <div>
                  <p className="text-md text-black font-bold">
                    {track.trackCountry}
                  </p>
                </div>
                <p className="text-xs text-black font-normal tracking-wider leading-4">
                  {track.trackName}
                </p>
                <img
                  src={process.env.PUBLIC_URL + track.trackImage}
                  alt="trackImage"
                  className="h-30 object-cover mt-4 mb-4"
                />
              </div>
            </div>

            {/* Back of the card */}
            <div
              onClick={() => handleCardClick(track)}
              className="card-container mx-20 md:mx-0"
            >
              <div className="front bg-white rounded-lg shadow-lg p-4 mb-4 transition-transform transform hover:scale-105 relative cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-sm text-red-700 uppercase">
                      Resultados Ronda {track.id}
                    </p>
                    <p className="text-sm text-gray-800 uppercase mt-1">
                      {track.trackCountry}
                    </p>
                  </div>
                  <img
                    src={track.countryFlag}
                    alt="countryFlag"
                    className="w-10 h-10 rounded-xl"
                  />
                </div>
                <hr className="border-t my-2" />
                {track.trackResults.length ? (
                  <div className="h-72 mt-5 overflow-auto">
                    <div className="flex gap-4">
                      <p className="text-xs font-bold text-gray-800 mt-2 text-center w-1/5">
                        Pos
                      </p>
                      <p className="text-xs font-bold text-gray-800 mt-2 text-center w-2/5">
                        Piloto
                      </p>
                      <p className="text-xs font-bold text-gray-800 mt-2 text-center w-2/5">
                        Equipo
                      </p>
                      <p className="text-xs font-bold text-gray-800 mt-2 text-center w-1/5">
                        Puntos
                      </p>
                    </div>
                    {track.trackResults.map((result: any, index) => (
                      <div
                        className={`flex gap-4 ${
                          index !== track.trackResults.length - 1
                            ? "border-b border-gray-300"
                            : ""
                        } ${
                          result.fastestLap
                            ? "text-fuchsia-500"
                            : "text-gray-800"
                        }`}
                        key={result.position}
                      >
                        <p className="text-xs mt-2 text-center w-1/5">
                          {result.position}
                        </p>
                        <p className="text-xs mt-2 text-center w-2/5">
                          {result.driverFirstName} {result.driverLastName}
                        </p>
                        <p className="text-xs mt-2 text-center w-2/5">
                          {result.driverTeam}
                        </p>
                        <p className="text-xs mt-2 text-center w-1/5">
                          {result.driverPoints}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-800 h-72 mt-5 text-center">
                    No hay resultados de carrera
                  </div>
                )}
              </div>
            </div>
          </ReactCardFlip>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
