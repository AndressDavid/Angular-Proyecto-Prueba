import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalModule } from './paginaPrincipal/paginaPrincipal.module';
import { ModalesComponent } from './paginaPrincipal/Component/Modales/modales/modales.component';
import { TituloComponent } from './paginaPrincipal/Component/titulo/titulo/titulo.component';
import { paginaPrincipalComponent } from './paginaPrincipal/paginaPrincipal.component';
import { TablaProcedimientosComponent } from './paginaPrincipal/Component/TablaProcedimientos/TablaProcedimientos.component';

@NgModule({
  imports: [
    CommonModule,
    PaginaPrincipalModule,
    ModalesComponent,
    TituloComponent,
    TablaProcedimientosComponent,
  ],
  declarations: [],
  exports: [paginaPrincipalComponent],
})
export class KardexModule {}
