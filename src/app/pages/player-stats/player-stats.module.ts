import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlayerStatsPage } from './player-stats.page';
import {PlayerProfileComponent} from "../../components/player-profile/player-profile.component";
import {ProgressCircleComponent} from "../../components/progress-circle/progress-circle.component";
import {SharedModule} from "../../modules/shared/shared.module";
import {AppModule} from "../../app.module";

const routes: Routes = [
  {
    path: '',
    component: PlayerStatsPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlayerStatsPage]
})
export class PlayerStatsPageModule {
  
}
