import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent}
];


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ContainerModule { }
