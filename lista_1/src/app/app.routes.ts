import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboards',
        pathMatch: 'full'

    },
    {
        path: '',
        children: [
            {
                path: 'dashboards',
                loadComponent: () => import('./features/task-list-component/task-list-component').then(m => m.TaskListComponent)
            },
            {
                path: 'about',
                loadComponent: () => import('./shareds/about/about').then(m => m.About)
            },
            {
                path: 'task/:id',
                loadComponent: () => import('./shareds/task-page/task-page').then(m => m.TaskPage)
            },
            {
                path: 'users',
                loadComponent: () => import('./features/users-page/users-page').then(m => m.UsersPage)
            }
        ]
    }

];