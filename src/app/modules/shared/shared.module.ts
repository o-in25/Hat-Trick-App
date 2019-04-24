import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlayerProfileComponent} from "../../components/player-profile/player-profile.component";
import {ProgressCircleComponent} from "../../components/progress-circle/progress-circle.component";
import {IonicModule} from "@ionic/angular";
import {TeamProfileComponent} from "../../components/team-profile/team-profile.component";
import { RosterPlayerComponent } from 'src/app/components/roster-player/roster-player.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [
        PlayerProfileComponent, ProgressCircleComponent, TeamProfileComponent, RosterPlayerComponent
    ],
    exports: [
        PlayerProfileComponent, ProgressCircleComponent, TeamProfileComponent, RosterPlayerComponent
    ]
})
export class SharedModule {

}
