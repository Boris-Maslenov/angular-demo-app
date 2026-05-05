import { Routes } from '@angular/router';
import { MainPageComponent } from '../pages/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'forms',
    loadComponent: () =>
      import('../pages/forms/forms.component').then(
        (m) => m.FormsPageComponent,
      ),
  },
  {
    path: 'api',
    loadComponent: () =>
      import('../pages/api/api.component').then((m) => m.ApiPageComponent),
  },
  {
    path: 'redux',
    loadComponent: () =>
      import('../pages/redux/redux.component').then(
        (m) => m.ReduxPageComponent,
      ),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('../pages/products/produts.component').then((m) => m.ProductsPage),
  },
  {
    path: 'product',
    loadComponent: () =>
      import('../pages/products/produts.component').then((m) => m.ProductsPage),
    canActivate: [() => false],
  },
  {
    path: 'something',
    loadComponent: () =>
      import('../pages/something/something.component').then(
        (m) => m.SomethingPage,
      ),
  },
];
