import { Routes } from '@angular/router';
import { Weather } from './pages/weather/weather';
import { Unauthorized } from './pages/unauthorized/unauthorized';
import { autoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';
import { Callback } from './pages/callback/callback';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full',
  },
  {
    path: 'callback',
    component: Callback,
  },
  {
    path: 'weather',
    component: Weather,
    canActivate: [autoLoginPartialRoutesGuard],
  },
  {
    path: 'unauthorized',
    component: Unauthorized,
  },
  {
    path: '**',
    redirectTo: 'weather',
  },
];
