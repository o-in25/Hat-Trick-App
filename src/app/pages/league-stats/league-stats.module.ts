  import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeagueStatsPage } from './league-stats.page';
  import {SharedModule} from "../../modules/shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: LeagueStatsPage
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
  declarations: [LeagueStatsPage]
})
export class LeagueStatsPageModule {}
