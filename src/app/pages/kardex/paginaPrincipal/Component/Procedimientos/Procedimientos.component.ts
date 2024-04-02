import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { ProcedimientosService } from './services/procedimientos.service';
import { Iprocedimientos } from './interfaces/Iprocedimientos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-procedimientos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `<button
    class="btn btn-primary"
    type="button"
    (click)="obtenerProcedimientos()"
  >
    Obtener procedimientos
  </button>`,
  styleUrl: './Procedimientos.component.css',
  templateUrl: './Procedimiento.component.html',
})
export class ProcedimientosComponent {
  public listadoProcedimientos: Iprocedimientos[] = [];
  public fielValue: string = '';
  @Output() OutListadoProcedimientos: EventEmitter<Iprocedimientos[]> =
    new EventEmitter();

  constructor(public procedimientoService: ProcedimientosService) {}

  obtenerProcedimientos() {
    if (this.fielValue == '') return;
    this.procedimientoService
      .obtenerListadoProcedimientos(this.fielValue)
      .subscribe(
        (respuesta) => {
          const { data } = respuesta;
          console.log(data);
          data.forEach(({ codcup, descup }: any) => {
            const procedimiento = {
              cup: codcup,
              description: descup,
            };
            this.listadoProcedimientos.push(procedimiento);
          });
          // console.table(this.listadoProcedimientos);
          this.OutListadoProcedimientos.emit(this.listadoProcedimientos);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
