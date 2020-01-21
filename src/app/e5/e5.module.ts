
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { E5Component } from './e5.component';

import { SharedModule } from '../shared.module';
import { ShowTestComponent } from '../common/components/show-test/show-test.component';

export const routes = [
  { path: '', component: E5Component, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [E5Component],  
})
export class E5Module {}