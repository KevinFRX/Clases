import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
export const routes: Routes = [
  {
    path: 'e0',
    loadChildren: './e0/e0.module#E0Module'
  },
  {
    path: 'e1',
    loadChildren: './e1/e1.module#E1Module'
  },
  {
    path: 'e2',
    loadChildren: './e2/e2.module#E2Module'
  },
  {
    path: 'e3',
    loadChildren: './e3/e3.module#E3Module'
  }, 
  {
    path: 'e4',
    loadChildren: './e4/e4.module#E4Module'
  }, 
  {
    path: 'e5',
    loadChildren: './e5/e5.module#E5Module'
  }, 
  {
    path: 'e6',
    loadChildren: './e6/e6.module#E6Module'
  }, 
  { path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '**',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }
];

export const AppRouter: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules, // <- comment this line for activate lazy load
  // useHash: true
});