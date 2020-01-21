
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { E3Component } from './e3.component';

import { SharedModule } from '../shared.module';
import { ShowTestComponent } from '../common/components/show-test/show-test.component';

export const routes = [
  { path: '', component: E3Component, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [E3Component],  
})
export class E3Module {}