import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { paginaPrincipalComponent } from './paginaPrincipal.component';
import { ModalesComponent } from './Component/Modales/modales/modales.component';
import { TituloComponent } from './Component/titulo/titulo/titulo.component';
import { ProcedimientosComponent } from './Component/Procedimientos/Procedimientos.component';
import { TablaProcedimientosComponent } from './Component/TablaProcedimientos/TablaProcedimientos.component';
import { TablaProcedimientoComponent } from './Component/TablaProcedimiento/TablaProcedimiento.component';

@NgModule({
  declarations: [paginaPrincipalComponent],
  exports: [paginaPrincipalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModalesComponent,
    TituloComponent,
    ProcedimientosComponent,
    TablaProcedimientosComponent,
    TablaProcedimientoComponent,
  ],
})
export class PaginaPrincipalModule {}
