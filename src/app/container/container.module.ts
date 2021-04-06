import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import {ChartistModule} from 'ng-chartist';

import { RegisterComponent } from './register/register.component';
import { LookUpComponent } from './look-up/look-up.component';
import { VisualizeComponent } from './visualize/visualize.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'lookup', component: LookUpComponent},
  {path: 'visualize', component: VisualizeComponent}
];


@NgModule({
  declarations: [RegisterComponent, LookUpComponent, VisualizeComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
    FormsModule,
    ChartsModule,
    ChartistModule
  ]
})
export class ContainerModule { }
