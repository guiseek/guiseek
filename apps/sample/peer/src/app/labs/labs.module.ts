import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatDialogModule } from '@angular/material/dialog'
import { MatMenuModule } from '@angular/material/menu'


import { LabsComponent } from './labs.component';
import { RestartIceComponent } from './restart-ice/restart-ice.component';
import { PeerPlayerModule } from '@seek-peer/player';


const routes: Routes = [
  {
    path: '',
    component: LabsComponent,
    children: [
      {
        path: 'ice-restart',
        component: RestartIceComponent
      }
    ]
  }
];

@NgModule({
  declarations: [LabsComponent, RestartIceComponent],
  imports: [
    CommonModule,

    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    PeerPlayerModule,
    RouterModule.forChild(routes)
  ]
})
export class LabsModule { }
