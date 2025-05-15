import { Routes } from '@angular/router';
import { FormRouteComponent } from './modulos/formulario/form-route/form-route.component';
import { TaskComponent } from './modulos/tareas/task/task.component';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./modulos/products/prodcts.routes').then((m) => m.productsRoutes)
  },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./authentication/authentication.routes').then((m) => m.authRoutes)
  // }
  // {
  //   path: 'rrhh',
  //   component: TaskListComponent,
  //   children: [
  //     {
  //       path: 'form-route',
  //       component: FormRouteComponent,
  //     },
  //     {
  //       path: 'new-form',
  //       component: TaskComponent,
  //     },
  //   ],
  // },
  // {
  //   path: 'administration',
  //   component: TaskFormComponent,
  //   children: [
  //     {
  //       path: 'users',
  //       component: FormRouteComponent,
  //     },
  //     {
  //       path: 'consult',
  //       component: TaskComponent,
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
