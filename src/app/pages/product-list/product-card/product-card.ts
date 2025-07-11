import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.models';
import { PrimaryButton } from "../../../components/primary-button/primary-button";
import { CartService } from '../../../services/cart';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [PrimaryButton],
  template: `
    <div class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative">
      <div class = "mx-auto">
        <img src="{{product().image}}" alt="product image" class="w-[200px] h-[100px] object-contain" />
        <div class="flex flex-col mt-2">
           <span class="text-md font-bold">{{product().title}}</span>
           <span class="text-sm">{{ '$' + product().price}}</span>
           <app-primary-button label="Add to Cart" class="mt-3" (btnClicked)="cartService.addToCart(product())"/>
        </div>
        <span class="absolute top-2 right-3 teext-sm  font-bold bg-white text-black px-2 rounded-full"
        [class]="product().stock ? 'text-green-500' : 'text-red-500'"
        >
        @if (product().stock) {
          {{ product().stock }} left
        } @else { 
          Out of Stock
         }
        </span>
        </div>
      </div>`,
  styleUrl: './product-card.scss'
})
export class ProductCard {

  cartService = inject(CartService);
  product = input.required<Product>();
}
