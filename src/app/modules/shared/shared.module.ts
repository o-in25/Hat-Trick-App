import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlayerProfileComponent} from "../../components/player-profile/player-profile.component";
import {ProgressCircleComponent} from "../../components/progress-circle/progress-circle.component";
import {IonicModule} from "@ionic/angular";

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [
        PlayerProfileComponent, ProgressCircleComponent
    ],
    exports: [
        PlayerProfileComponent, ProgressCircleComponent
    ]
})
export class SharedModule {}
