import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modales',
  standalone: true,
  imports: [CommonModule],
  template: `<div *ngIf="devuelveInput()">Hola</div>
    <button class="btn btn-primary" type="button" (click)="showModal()">
      Click
    </button>`,
  styleUrl: './modales.component.css',
})
export class ModalesComponent {
  private inputInvisible: Boolean = false;
  showModal() {
    this.inputInvisible = !this.inputInvisible;
  }
  devuelveInput = () => this.inputInvisible;
}
