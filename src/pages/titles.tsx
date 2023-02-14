import React from "react";
import { tournaments } from "../domain/data/constant";

const numberOfTitles = (champion: string) => {
  if (champion !== "") {
    const number = tournaments.filter(
      (tournament) => tournament.champion === champion
    ).length;
    return number;
  }
};

const numberOfRunnerUp = (runnerUp: string) => {
  if (runnerUp !== "") {
    const number = tournaments.filter(
      (tournament) => tournament.runnerUp === runnerUp
    ).length;
    return number;
  }
};

const Titles = () => {
  return (
    <>
      <div className="mt-5 ml-10 text-xl">Numero de titulos</div>
      <div className="mt-10 ml-10">
        <div>
          Campeonatos
          <div>
            <div className="mt-4">
              {tournaments.map((tournament, index) => {
                return (
                  <div key={index}>
                    {tournament.champion}&nbsp;&nbsp;
                    {numberOfTitles(tournament.champion)}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          Sub Campeonatos
          <div>
            <div className="mt-4">
              {tournaments.map((tournament, index) => {
                return (
                  <div key={index}>
                    {tournament.runnerUp}&nbsp;&nbsp;
                    {numberOfRunnerUp(tournament.runnerUp)}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Titles;
