// Importa módulos necessários do Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Importa módulos do próprio aplicativo
import { AppRoutingModule } from './app-routing.module';

// Importa o componente principal (raiz) do aplicativo
import { AppComponent } from './app.component';

// Decorador @NgModule: Define um módulo Angular
@NgModule({
  // Declaração de componentes, diretivas e pipes pertencentes a este módulo
  declarations: [
    AppComponent
  ],

  // Importa módulos necessários para este módulo
  imports: [
    BrowserModule,      // Módulo fundamental que fornece recursos essenciais para a execução em um navegador
    AppRoutingModule,   // Módulo de configuração de rotas
    FormsModule          // Módulo para trabalhar com formulários e binding de dados bidirecional
  ],

  // Componente principal (raiz) que será inicializado quando a aplicação for iniciada
  bootstrap: [AppComponent]
})
export class AppModule { }
