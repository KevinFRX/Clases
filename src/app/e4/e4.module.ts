
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { E4Component } from './e4.component';

import { SharedModule } from '../shared.module';
import { ShowTestComponent } from '../common/components/show-test/show-test.component';

export const routes = [
  { path: '', component: E4Component, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [E4Component],  
})
export class E4Module {}