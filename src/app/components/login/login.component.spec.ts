// Importa módulos necessários para teste do Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importa o componente LoginComponent que será testado
import { LoginComponent } from './login.component';

// Descreve uma suíte de testes para o componente LoginComponent
describe('LoginComponent', () => {
  let component: LoginComponent;                // Variável para armazenar a instância do componente
  let fixture: ComponentFixture<LoginComponent>; // Variável para armazenar o componente encapsulado em um ComponentFixture

  // Função a ser executada antes de cada teste
  beforeEach(() => {
    // Configuração do TestBed para o módulo de teste, declarando o componente LoginComponent
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    });

    // Cria uma instância do componente e do ComponentFixture
    fixture = TestBed.createComponent(LoginComponent);

    // Obtém a instância do componente a partir do ComponentFixture
    component = fixture.componentInstance;

    // Detecta mudanças no componente. É necessário para garantir que a visualização esteja atualizada antes dos testes.
    fixture.detectChanges();
  });

  // Teste: Deve criar o componente
  it('should create', () => {
    // Verifica se a instância do componente foi criada com sucesso
    expect(component).toBeTruthy();
  });
});
