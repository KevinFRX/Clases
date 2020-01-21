
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { E2Component } from './e2.component';

export const routes = [
  { path: '', component: E2Component, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [E2Component],  
})
export class E2Module {}