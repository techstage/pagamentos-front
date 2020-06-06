import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  pagamentosURL = 'htt[://ec2-100-24-119-11.compute-1.amazonaws.com/pagamentos';
  constructor(private http: HttpClient){}

  listar(){
    return this.http.get<any[]>(`${this.pagamentosURL}`);
  }

}



