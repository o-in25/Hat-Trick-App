import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {PlayerProfileComponent} from "./player-profile.component";
import {SharedModule} from "../../modules/shared/shared.module";


const routes: Routes = [
    {
        path: '',
        component: null
    }
];


@NgModule({
    // here
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: []
})
export class PlayerProfileModule {}
