import { ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'

import { LayoutModule } from '@angular/cdk/layout'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'

import { UtilLoggerModule } from '@seek-peer/util-logger'
import { PeerPlayerModule } from '@seek-peer/player'
import { PeerClientModule } from '@seek-peer/client'

import { CallComponent } from './call.component'

const routes: Routes = [{ path: '', component: CallComponent }]

@NgModule({
  declarations: [CallComponent],
  imports: [
    LayoutModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,
    MatDialogModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatFormFieldModule,

    PeerClientModule,
    PeerPlayerModule,

    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class CallModule {}
