export class CurrentTeam {
    id: number;
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
    id: number;
    firstName: string;
    lastName: string;
    primaryPosition: string;
    jerseyNumber: number;
    currentTeam: CurrentTeam;
    currentRosterStatus: string;
    currentInjury: CurrentInjury;
    height: string;
    weight: number;
    birthDate: string;
    age: number;
    birthCity: string;
    birthCountry: string;
    rookie: boolean;
    highSchool: string;
    college: string;
    handedness: Handedness;
    officialImgSrc: string;
    socialMediaAccounts: [SocialMediaAccounts]
}

export class FieldGoals {
    fg2PtAtt: number;
    fg2PtAttPerGame: number;
    fg2PtMade: number;
    fg2PtMadePerGame: number;
    fg2PtPct: number;
    fg3PtAtt: number;
    fg3PtAttPerGame: number;
    fg3PtMade: number;
    fg3PtMadePerGame: number;
    fg3PtPct: number;
    fgAtt: number;
    fgAttPerGame: number;
    fgMade: number;
    fgMadePerGame: number;
    fgPct: number;
}

export class FreeThrows {
    ftAtt: number;
    ftAttPerGame: number;
    ftMade: number;
    ftMadePerGame: number;
    ftPct: number;
}

export class Rebounds {
    offReb: number;
    offRebPerGame: number;
    defReb: number;
    defRebPerGame: number;
    reb: number;
    rebPerGame: number;
}

export class Offense {
    ast: number;
    astPerGame: number;
    pts: number;
    ptsPerGame: number;
}

export class Defense {
    tov: number;
    tovPerGame: number;
    stl: number;
    stlPerGame: number;
    blk: number;
    blkPerGame: number;
    blkAgainst: number;
    blkAgainstPerGame: number;
}

export class Miscellaneous {
    fouls: number;
    foulsPerGame: number;
    foulsDrawn: number;
    foulsDrawnPerGame: number;
    foulPers: number;
    foulPersPerGame: number;
    foulPersDrawn: number;
    foulPersDrawnPerGame: number;
    foulTech: number;
    foulTechPerGame: number;
    foulTechDrawn : number;
    foulTechDrawnPerGame: number;
    foulFlag1: number;
    foulFlag1PerGame: number;
    foulFlag1Drawn: number;
    foulFlag1DrawnPerGame: number;
    foulFlag2: number;
    foulFlag2PerGame: number;
    foulFlag2Drawn: number;
    foulFlag2DrawnPerGame: number;
    ejections: number;
    plusMinus: number;
    plusMinusPerGame: number;
    minSeconds: number;
    minSecondsPerGame: number;
    gamesStarted: number;
}

export class Team {
    id: number;
    abbreviation: string;
}

export class Stats {
    gamesPlayed: number;
    fieldGoals: FieldGoals;
    freeThrows: FreeThrows;
    rebounds: Rebounds;
    offense: Offense;
    defense: Defense;
    miscellaneous: Miscellaneous;
    
}


// a new player
export class Player {
    lastUpdatedOn: String;
    player: Information;
    team: Object;
    stats: Stats;
}
