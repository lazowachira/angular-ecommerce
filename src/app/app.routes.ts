import { Routes } from '@angular/router';
import { ProductList } from './pages/product-list/product-list';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      component :ProductList 
    },
    {
      path: 'cart',
      component: Cart
    }
];
