export const getParticipantScore = (
    tournament: Record<string, any>,
    participantData?: Record<string, any>
) => {
    const participant: Record<string, any> = {
        name: tournament.champion,
        tierIrl: participantData ? participantData.tierIrl : 0,
        tierA: participantData ? participantData.tierA : 0,
        tierB: participantData ? participantData.tierB : 0,
        tierC: participantData ? participantData.tierC : 0,
        points: participantData ? participantData.points : 0,
    };

    let points = 0;

    switch (tournament.tier) {
        case "Irl":
            participant.tierIrl = participant.tierIrl + 1;
            points = 7;
            break;
        case "A":
            participant.tierA = participant.tierA + 1;
            points = 5;
            break;
        case "B":
            participant.tierB = participant.tierB + 1;
            points = 3;
            break;
        case "C":
            participant.tierC = participant.tierC + 1;
            points = 1;
            break;
        default:
            break;
    }

    participant.points = participant.points + points;

    return participant;
};

export const getSubChampionshipPoints = (
    tournament: Record<string, any>,
    participantData?: Record<string, any>
) => {
    const participant: Record<string, any> = {
        name: tournament.runnerUp,
        tierIrl: participantData ? participantData.tierIrl : 0,
        tierA: participantData ? participantData.tierA : 0,
        tierB: participantData ? participantData.tierB : 0,
        tierC: participantData ? participantData.tierC : 0,
        points: participantData ? participantData.points : 0,
    };

    let points = 0;

    switch (tournament.tier) {
        case "Irl":
            points = 3.5;
            break;
        case "A":
            points = 2.5;
            break;
        case "B":
            points = 1.5;
            break;
        case "C":
            points = 0.5;
            break;
        default:
            break;
    }

    participant.points = participant.points + points;

    return participant;
};

export const setParticipantScores = (
    tournaments: any[] | undefined
): Array<any> => {
    let participantSummary: Array<any> = [];

    tournaments?.forEach((tournament) => {
        // Championship points

        if (
            tournament.champion.length > 1 &&
            tournament.champion.toLowerCase() !== "cpu"
        ) {
            const participantData = participantSummary.find(
                (participant: any) => participant.name === tournament.champion
            );

            if (participantData) {
                participantSummary = participantSummary.filter(
                    (participant: any) =>
                        participant.name !== tournament.champion
                );
            }

            participantSummary.push(
                getParticipantScore(tournament, participantData)
            );
        }

        //Sub Championship points
        if (
            tournament.runnerUp.length > 1 &&
            tournament.runnerUp.toLowerCase() !== "cpu"
        ) {
            const participantData = participantSummary.find(
                (participant: any) => participant.name === tournament.runnerUp
            );

            if (participantData) {
                participantSummary = participantSummary.filter(
                    (participant: any) =>
                        participant.name !== tournament.runnerUp
                );
            }

            participantSummary.push(
                getSubChampionshipPoints(tournament, participantData)
            );
        }
    });

    return participantSummary;
};
