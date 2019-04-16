import {Defense, FieldGoals, FreeThrows, Miscellaneous, Offense, Player, Rebounds, SocialMediaAccounts} from "./player";

export class HomeVenue {
    id: number;
    name: string;
}


export class TeamColorsHex {
    hex: string;
}

export class DetailedTeam {
    id: number;
    city: string;
    name: string;
    abbreviation: string;
    homeVenue: HomeVenue;
    teamColoursHex: TeamColorsHex;
    socialMediaAccounts: SocialMediaAccounts[];
    officialImageSrc: string;
}

export class Standings {
    wins: number;
    loses: number;
    winPct: number;
    gamesBack: number;
}

export class TeamStats {
    gamesPlayed: number;
    fieldGoals: FieldGoals;
    freeThrows: FreeThrows;
    rebounds: Rebounds;
    offense: Offense;
    defense: Defense;
    miscellaneous: Miscellaneous;
    standings: Standings;
}

export class Team {
    lastUpdatedOn: String;
    team: DetailedTeam;
    stats: TeamStats;
    test: Player[];

}