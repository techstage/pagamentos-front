import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  pagamentosURL = 'http://demo.techstage.io/pagamentos';
  constructor(private http: HttpClient){}

  listar(){
    return this.http.get<any[]>(`${this.pagamentosURL}`);
  }

}



