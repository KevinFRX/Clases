
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { E1Component } from './e1.component';

import { SharedModule } from '../shared.module';
import { ShowTestComponent } from '../common/components/show-test/show-test.component';

export const routes = [
  { path: '', component: E1Component, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [E1Component],  
})
export class E1Module {}