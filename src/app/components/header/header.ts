import { Component, signal } from '@angular/core';
import { PrimaryButton } from "../primary-button/primary-button";

@Component({
  selector: 'app-header',
  imports: [PrimaryButton],
  template: `<div class="bg-slate-100 px-4 py-3 shadow-md flex  items-center justify-between">
    <span class ="text-xl">{{ title() }}</span>
    <app-primary-button label="Cart" (btnClicked)="ShowButton()"/>
  </div>`,
  styleUrl: './header.scss'
})
export class Header {
 title = signal('Angular E-commerce');
  ShowButton() {
    console.log('Cart button clicked!');
  }
}
