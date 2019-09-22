import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { 
    path: 'people/list', 
    loadChildren: './people/list/list.module#ListPageModule'
  },
  { 
    path: 'planets/list', 
    loadChildren: './planets/list/list.module#ListPageModule'
  },
  { 
    path: 'films/list', 
    loadChildren: './films/list/list.module#ListPageModule'
  },
  { 
    path: 'starships/list', 
    loadChildren: './starships/list/list.module#ListPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
