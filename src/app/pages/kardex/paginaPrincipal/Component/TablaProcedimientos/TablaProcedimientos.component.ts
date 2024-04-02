import { Iprocedimientos } from './../Procedimientos/interfaces/Iprocedimientos';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProcedimientosService } from '../Procedimientos/services/procedimientos.service';

@Component({
  selector: 'app-tabla-procedimientos',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  styleUrl: './TablaProcedimientos.component.css',
})
export class TablaProcedimientosComponent {
  private tablaInvisible: Boolean = false;
  showTabla() {
    this.tablaInvisible = !this.tablaInvisible;
  }
  devuelveTabla = () => this.tablaInvisible;

  public listadoProcedimientos: Iprocedimientos[] = [];
  constructor(public procedimientoService: ProcedimientosService) {}

  obtenerTablaProcedimientos() {
    this.procedimientoService.obtenerListadoProcedimientos('SEPTO').subscribe(
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
        console.table(this.listadoProcedimientos);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
