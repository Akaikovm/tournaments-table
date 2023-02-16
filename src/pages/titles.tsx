import React from "react";
import { tournaments } from "../domain/data/constant";
import Datatable from "react-data-table-component";
import { paginationOptions, titleColumns } from "../domain/table-data/constant";

const setParticipantScores = (): Array<any> => {
  let participantSummary: Array<any> = [];

  tournaments.forEach((tournament) => {
    if (tournament.champion.length > 1) {
      if (participantSummary.length > 1) {
        const participantData = participantSummary.find(
          (participant: any) => participant.name === tournament.champion
        );

        if (participantData) {
          participantSummary = participantSummary.filter(
            (participant: any) => participant.name !== tournament.champion
          );

          participantSummary.push(
            getParticipantScore(tournament, participantData)
          );
        } else {
          participantSummary.push(getParticipantScore(tournament));
        }
      } else {
        participantSummary.push(getParticipantScore(tournament));
      }
    }
  });

  return participantSummary;
};

const getParticipantScore = (tournament: any, participantData?: any) => {
  const participant: Record<string, any> = {
    name: tournament.champion,
    tierIrl: participantData ? participantData.tierIrl : 0,
    tierA: participantData ? participantData.tierA : 0,
    tierB: participantData ? participantData.tierB : 0,
    tierC: participantData ? participantData.tierC : 0,
  };

  switch (tournament.tier) {
    case "Irl":
      participant.tierIrl = participant.tierIrl + 1;
      break;
    case "A":
      participant.tierA = participant.tierA + 1;
      break;
    case "B":
      participant.tierB = participant.tierB + 1;
      break;
    case "C":
      participant.tierC = participant.tierC + 1;
      break;
    default:
      break;
  }

  const totalPoints =
    participant.tierIrl * 10 +
    participant.tierA * 5 +
    participant.tierB * 3 +
    participant.tierC * 1;

  participant.points = totalPoints;

  return participant;
};

const Titles = () => {
  return (
    <div className="mt-5">
      <Datatable
        columns={titleColumns as any}
        data={setParticipantScores()}
        title="Titulos"
        pagination
        paginationComponentOptions={paginationOptions}
        fixedHeader
        fixedHeaderScrollHeight="600"
        defaultSortAsc={false}
        defaultSortFieldId="points"
      />
    </div>
  );
};

export default Titles;
