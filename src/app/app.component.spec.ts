// Importa módulos do Angular necessários para teste
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Importa o componente AppComponent, que será testado
import { AppComponent } from './app.component';

// Descreve uma suíte de testes para o componente AppComponent
describe('AppComponent', () => {

  // Configuração a ser executada antes de cada teste
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],     // Importa o módulo de teste para roteadores
    declarations: [AppComponent]         // Declara o componente a ser testado
  }));

  // Teste: Deve criar a instância do componente com sucesso
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);  // Cria uma instância do componente
    const app = fixture.componentInstance;                   // Obtém a instância do componente
    expect(app).toBeTruthy();                               // Verifica se a instância foi criada com sucesso
  });

  // Teste: Deve ter o título 'UsuariosCRUD'
  it(`should have as title 'UsuariosCRUD'`, () => {
    const fixture = TestBed.createComponent(AppComponent);  // Cria uma instância do componente
    const app = fixture.componentInstance;                   // Obtém a instância do componente
    expect(app.title).toEqual('UsuariosCRUD');              // Verifica se o título é 'UsuariosCRUD'
  });

  // Teste: Deve renderizar o título no HTML
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);  // Cria uma instância do componente
    fixture.detectChanges();                                // Detecta as alterações no componente
    const compiled = fixture.nativeElement as HTMLElement;  // Obtém o HTML compilado
    // Verifica se o elemento com a classe '.content span' contém o texto esperado
    expect(compiled.querySelector('.content span')?.textContent).toContain('UsuariosCRUD app is running!');
  });
});