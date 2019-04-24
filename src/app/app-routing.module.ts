import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'player-stats', loadChildren: './pages/player-stats/player-stats.module#PlayerStatsPageModule' },
  { path: 'search', loadChildren: './pages/search/search.module#SearchPageModule' },
  { path: 'team-stats', loadChildren: './pages/team-stats/team-stats.module#TeamStatsPageModule' },
  { path: 'league-stats', loadChildren: './pages/league-stats/league-stats.module#LeagueStatsPageModule' },
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
