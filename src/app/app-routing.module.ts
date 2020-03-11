import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', //component: HomeComponent
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'item/:name/:subname/:idname',
    loadChildren: () => import('./modules/item/item.module').then( m => m.ItemModule)
  },
  {
    path: 'items/:name/:id/:idname',
    loadChildren: () => import('./modules/items/items.module').then( m => m.ItemsModule)
  },
  {
    path: 'foto/:id',
    loadChildren: () => import('./modules/foto/foto.module').then( m => m.FotoModule)
  },/*,
  {
    path: '**',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
