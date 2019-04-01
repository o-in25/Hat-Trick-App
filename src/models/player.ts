export class CurrentTeam {
    id: Number;
    playingProbability: string
}

export class CurrentInjury {
    description: string;
    playingProbability: string;
}

export class Handedness {
    shoots: String;
}

export class SocialMediaAccounts {

}

export class MediaAccount {
    mediaType: string;
    value: string;
}

export class Information {
    id: Number;
    firstName: string;
    lastName: string;
    primaryPosition: string;
    jerseyNumber: Number;
    currentTeam: CurrentTeam;
    currentRosterStatus: string;
    currentInjury: CurrentInjury;
    height: string;
    weight: Number;
    birthDate: string;
    age: Number;
    birthCity: string;
    birthCountry: string;
    rookie: boolean;
    highSchool: string;
    college: string;
    handedness: Handedness;
    officialImgSrc: string;
    socialMediaAccounts: [SocialMediaAccounts]
}



// a new player
export class Player {
    lastUpdatedOn: String;
    player: Information;
    team: Object;
    stats: Object;
}
