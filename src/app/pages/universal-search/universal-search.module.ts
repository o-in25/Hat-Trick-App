import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UniversalSearchPage } from './universal-search.page';
import {PlayerStatsPageModule} from "../player-stats/player-stats.module";

const routes: Routes = [
  {
    path: '',
    component: UniversalSearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UniversalSearchPage]
})
export class UniversalSearchPageModule {}
