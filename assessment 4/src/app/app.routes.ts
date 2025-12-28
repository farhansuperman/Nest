import { Routes } from '@angular/router';
import { Product } from './pages/product/product';
import { Contactus } from './pages/contactus/contactus';
import { SingleviewList } from './singleview-list/singleview-list';
import { Home } from './pages/home/home';
import { Categories } from './pages/categories/categories';
import { Deals } from './pages/deals/deals';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'products',
    component: Product
  },
  {
    path: 'categories',
    component:Categories
  },
  {
    path: 'deals', 
    component:Deals
  },
  {
    path: 'contactus',
    component: Contactus
  },
  {
    path: 'singleview/:titleid',
    component:SingleviewList
  }
];
