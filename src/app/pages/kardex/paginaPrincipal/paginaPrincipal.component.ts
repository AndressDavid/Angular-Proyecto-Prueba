import { Component, OnInit } from '@angular/core';
import { ProcedimientosService } from './Component/Procedimientos/services/procedimientos.service';
import { Iprocedimientos } from './Component/Procedimientos/interfaces/Iprocedimientos';

@Component({
  selector: 'app-paginaPrincipal',
  templateUrl: './paginaPrincipal.component.html',
  styleUrls: ['./paginaPrincipal.component.css'],
})
export class paginaPrincipalComponent {
  public titulo: string = 'Titulo del componente 1';
  public fieldValor = 'Valor de prueba';
  InputVisible: Boolean = false;
  public listaProcedimientos: Iprocedimientos[] = [];



  public onGetListProcedimiento(listaProcedimientos: Iprocedimientos[]) {
    this.listaProcedimientos = listaProcedimientos;
    // console.log(listaProcedimientos);
  }
  HizoClick(): void {
    console.log('Hizo Click');
    console.log(this.fieldValor);
  }
}
