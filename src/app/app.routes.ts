import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component'),
        title: 'Todo | Home'
    },
    {
        path: 'auth',
        loadComponent: () => import('./components/auth-page/auth-page.component'),
        title: 'Todo | Authentication'
    },
    {
        path: 'profile',
        loadComponent: () => import('./components/profile/profile.component'),
        title: 'Todo | Profile'
    },
    {
        path: '**',
        loadComponent: () => import('./components/not-found/not-found.component'),
        title: 'Todo | Not Found'
    },
];
