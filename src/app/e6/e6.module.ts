
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { E6Component } from './e6.component';

import { SharedModule } from '../shared.module';
import { ShowTestComponent } from '../common/components/show-test/show-test.component';

export const routes = [
  { path: '', component: E6Component, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [E6Component],  
})
export class E6Module {}