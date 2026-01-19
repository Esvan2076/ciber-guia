import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
            },
            {
                path: 'extorsion',
                loadComponent: () => import('./pages/extorsion/extorsion').then(m => m.ExtorsionComponent)
            },
            {
                path: 'fraude',
                loadComponent: () => import('./pages/fraude/fraude').then(m => m.FraudeComponent)
            },
            {
                path: 'identidad',
                loadComponent: () => import('./pages/identidad/identidad').then(m => m.IdentidadComponent)
            },
            {
                path: 'ninos',
                loadComponent: () => import('./pages/ninos/ninos').then(m => m.NinosComponent)
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
