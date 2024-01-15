// Importa módulos necessários do Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa o componente LoginComponent, associado a este módulo de roteamento
import { LoginComponent } from './login.component';

// Define as rotas para este módulo de login
const routes: Routes = [
  // Rota vazia (''): quando o caminho da URL está vazio, o componente associado é o LoginComponent
  { path: '', component: LoginComponent }
];

// Decorador @NgModule: Define um módulo Angular
@NgModule({
  // Importa módulo de roteamento configurado com as rotas definidas
  imports: [RouterModule.forChild(routes)],

  // Exporta o módulo de roteamento configurado para uso em outros módulos
  exports: [RouterModule]
})
export class LoginRoutingModule { }
