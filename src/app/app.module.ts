import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagamentosListagemComponent } from './pagamentos-listagem/pagamentos-listagem.component';
import { PagamentoService } from './pagamento.service';

@NgModule({
  declarations: [
    AppComponent,
    PagamentosListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ PagamentoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
