import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentosListagemComponent } from './pagamentos-listagem.component';

describe('PagamentosListagemComponent', () => {
  let component: PagamentosListagemComponent;
  let fixture: ComponentFixture<PagamentosListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentosListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
