import { Component,inject, signal } from '@angular/core';
import { PrimaryButton } from "../primary-button/primary-button";
import { CartService } from '../../services/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton, RouterLink],
  template: `<div class="bg-slate-100 px-4 py-3 shadow-md flex  items-center justify-between">
    <button class ="text-xl font-bold" routerLink="/" >{{ title() }}</button>
    <app-primary-button [label]="'Cart  ' + cartService.cart().length + '' "
    routerLink="/cart"
    />
  </div>`,
  styleUrl: './header.scss'
})
export class Header {
 title = signal('My Store');


  cartService =inject(CartService);
}
