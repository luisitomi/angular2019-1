import { Routes } from '@angular/router';
import { FormRouteComponent } from './form-route/form-route.component';
import { TaskComponent } from './task/task.component';

export const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./authentication/authentication.routes').then((m) => m.authRoutes)
  // }
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: 'form-route',
  //       component: FormRouteComponent,
  //     },
  //     {
  //       path: 'new-form',
  //       component: TaskListComponent,
  //     },
  //   ],
  // },
  {
    path: 'form-route',
    component: FormRouteComponent,
  },
  {
    path: 'new-form',
    component: TaskComponent,
  },
  {
    path: '**',
    redirectTo: 'new-form',
    pathMatch: 'full',
  },
];
