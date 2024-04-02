import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProcedimientosService {
  token: string = '6663c0b0-868f-49d7-9cfe-3ed3e86996f5';
  url: string = 'http://172.20.10.37:8081/shaio/';

  constructor(private http: HttpClient) {}
  obtenerListadoProcedimientos(filter: string): Observable<any> {
    return this.http.get(
      `${this.url}cups/list?token=${this.token}&filter=${filter}`
    );
  }
  obtenerTablaProcedimientos(filter: string): Observable<any> {
    return this.http.get(
      `${this.url}cups/list?token=${this.token}&filter=${filter}`
    );
  }
}
