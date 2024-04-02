import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>{{ titulo }}</h1>`,
  styleUrl: './titulo.component.css',
})
export class TituloComponent {
  @Input() titulo = '';
}
