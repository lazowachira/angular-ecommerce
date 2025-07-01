import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart';
import { CartItem } from "./cart-item/cart-item";

@Component({
  selector: 'app-cart',
  imports: [CartItem],
  template: `<div class="flex flex-col gap-4 p-6">
      <h2 class="text-2xl font-bold">Shopping Cart</h2>
      @for (item of cartService.cart(); track item.id)  {
     <app-cart-item [item]="item" />
      }
      </div>`,
  styleUrl: './cart.scss'
})
export class Cart {

  cartService = inject(CartService);
}
