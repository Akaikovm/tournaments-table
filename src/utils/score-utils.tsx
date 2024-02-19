interface Participant {
  name: string;
  tierIrl: number;
  tierA: number;
  tierB: number;
  tierC: number;
  runnerUp: number;
  points: number;
}

interface Tournament {
  champion: string;
  runnerUp: string;
  tier: string;
}

export const getChampionshipPoints = (
  tournament: Tournament,
  participantData?: Participant
): Participant => {
  const participant: Participant = {
    name: tournament.champion,
    tierIrl: participantData?.tierIrl || 0,
    tierA: participantData?.tierA || 0,
    tierB: participantData?.tierB || 0,
    tierC: participantData?.tierC || 0,
    runnerUp: participantData?.runnerUp || 0,
    points: participantData?.points || 0,
  };

  switch (tournament.tier.trim()) {
    case "Irl":
      participant.tierIrl += 1;
      participant.points += 7;
      break;
    case "A":
      participant.tierA += 1;
      participant.points += 5;
      break;
    case "B":
      participant.tierB += 1;
      participant.points += 3;
      break;
    case "C":
      participant.tierC += 1;
      participant.points += 1;
      break;
    default:
      break;
  }

  return participant;
};

export const getSubChampionshipPoints = (
  tournament: Tournament,
  participantData?: Participant
): Participant => {
  const participant: Participant = {
    name: tournament.runnerUp,
    tierIrl: participantData?.tierIrl || 0,
    tierA: participantData?.tierA || 0,
    tierB: participantData?.tierB || 0,
    tierC: participantData?.tierC || 0,
    runnerUp: (participantData?.runnerUp || 0) + 1,
    points: participantData?.points || 0,
  };

  switch (tournament.tier.trim()) {
    case "Irl":
      participant.points += 3.5;
      break;
    case "A":
      participant.points += 2.5;
      break;
    case "B":
      participant.points += 1.5;
      break;
    case "C":
      participant.points += 0.5;
      break;
    default:
      break;
  }

  return participant;
};

export const setParticipantResults = (
  tournaments: Tournament[] | undefined
): Participant[] => {
  let participantSummary: Participant[] = [];

  tournaments?.forEach((tournament) => {
    const validName = (name: string) =>
      name.length > 1 && name.toLowerCase() !== "cpu";

    if (validName(tournament.champion)) {
      const participantData = participantSummary.find(
        (participant) => participant.name === tournament.champion
      );

      if (participantData) {
        participantSummary = participantSummary.filter(
          (participant) => participant.name !== tournament.champion
        );
      }
      participantSummary.push(
        getChampionshipPoints(tournament, participantData)
      );
    }

    if (validName(tournament.runnerUp)) {
      const participantData = participantSummary.find(
        (participant) => participant.name === tournament.runnerUp
      );
      if (participantData) {
        participantSummary = participantSummary.filter(
          (participant) => participant.name !== tournament.runnerUp
        );
      }
      participantSummary.push(
        getSubChampionshipPoints(tournament, participantData)
      );
    }
  });

  return participantSummary;
};
