// Importa módulos necessários do Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importa o componente LoginComponent associado a este módulo
import { LoginComponent } from './login.component';

// Importa o módulo de roteamento específico para este módulo
import { LoginRoutingModule } from './login-routing.module';

// Decorador @NgModule: Define um módulo Angular
@NgModule({
  // Declaração de componentes, diretivas e pipes pertencentes a este módulo
  declarations: [
    LoginComponent
  ],

  // Importa módulos necessários para este módulo
  imports: [
    CommonModule,          // Módulo que fornece diretivas comuns, como *ngIf, *ngFor, etc.
    LoginRoutingModule,    // Módulo de configuração de rotas específico para este módulo
    FormsModule            // Módulo para trabalhar com formulários e binding de dados bidirecional
  ]
})
export class LoginModule { }
