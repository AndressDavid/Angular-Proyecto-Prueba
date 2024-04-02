import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Iprocedimientos } from '../Procedimientos/interfaces/Iprocedimientos';

@Component({
  selector: 'app-tabla-procedimiento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './TablaProcedimiento.component.html',
  styleUrl: './TablaProcedimiento.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablaProcedimientoComponent {
  @Input() listaProcedimientos?: Iprocedimientos[] = [];
}
