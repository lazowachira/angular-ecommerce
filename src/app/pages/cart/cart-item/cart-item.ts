import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.models';
import { Button } from "../../../components/button/button";
import { CartService } from '../../../services/cart';

@Component({
  selector: 'app-cart-item',
  imports: [Button],
  template: `
    <div
      class="bg-white shadow-md border rounded-xl p-6 flex gap-4 items-center"
    >
      <img [src]="item().image" class="w-[50px] h-[50px] object-contain" />
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ item().title }}</span>
        <span class="text-sm"> {{ '$' + item().price }}</span>
      </div>
      <div class="flex-1"></div>
      <app-button
        label="Remove"
        (btnClicked)="cartService.removeFromCart(item())"
      />
    </div>
  `,
  styles: ``,
})
export class CartItem {
  item = input.required<Product>();

  cartService = inject(CartService);
}