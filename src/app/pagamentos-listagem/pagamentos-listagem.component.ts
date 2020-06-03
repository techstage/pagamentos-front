import { Component, OnInit } from '@angular/core';
import { PagamentoService } from '../pagamento.service';

@Component({
  selector: 'app-pagamentos-listagem',
  templateUrl: './pagamentos-listagem.component.html',
  styleUrls: ['./pagamentos-listagem.component.css']
})
export class PagamentosListagemComponent implements OnInit {

  pagamentos: Array<any>;

  constructor(private pagamentoService: PagamentoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.pagamentoService.listar().subscribe(dados => this.pagamentos = dados);
  }

}
