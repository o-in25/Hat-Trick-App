import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeamStatsPage } from './team-stats.page';
import {SharedModule} from "../../modules/shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: TeamStatsPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
  declarations: [TeamStatsPage]
})
export class TeamStatsPageModule {}
