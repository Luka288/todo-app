import { Routes } from '@angular/router';
import { CanActivate, CanUserAuth } from './components/shared/services/auth-service.service';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component'),
        title: 'Todo | Home'
    },
    {
        path: 'auth',
        loadComponent: () => import('./components/auth-page/auth-page.component'),
        title: 'Todo | Authentication',
        canActivate: [CanUserAuth],
    },
    {
        path: 'profile',
        loadComponent: () => import('./components/profile/profile.component'),
        title: 'Todo | Profile',
        canActivate: [CanActivate],
    },
    {
        path: '**',
        loadComponent: () => import('./components/not-found/not-found.component'),
        title: 'Todo | Not Found'
    },
];
