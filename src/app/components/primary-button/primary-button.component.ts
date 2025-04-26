import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button (click)="btnClicked.emit()" class="bg-blue-500 text-white w-full  border py-2 px-5 rounded-xl shadow-md hover:opacity-90 ">
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class PrimaryButtonComponent {
  label = input('');

  btnClicked = output();

}


