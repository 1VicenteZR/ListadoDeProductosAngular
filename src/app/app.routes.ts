import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent)
  },
   {
  path: 'pokemon',
  loadComponent: () => import('./pages/pokemon/pokemon').then(m => m.PokemonComponent)
}
];
