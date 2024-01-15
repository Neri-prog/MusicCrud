// Importa módulos necessários do Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa o componente ListarComponent associado a este módulo de roteamento
import { ListarComponent } from './listar.component';

// Importa serviços necessários para este módulo de roteamento
import { LogsService } from 'src/app/services/logs.service';
import { MusicaService } from 'src/app/services/usuarios.service';

// Define as rotas para este módulo de roteamento
const routes: Routes = [
  {
    path: '',   // Caminho da URL associado a este componente (rota vazia)
    component: ListarComponent  // Componente associado a este caminho
  }
];

// Decorador @NgModule: Define um módulo Angular
@NgModule({
  // Importa módulo de roteamento configurado com as rotas definidas
  imports: [RouterModule.forChild(routes)],

  // Exporta o módulo de roteamento configurado para uso em outros módulos
  exports: [RouterModule],
})
export class ListarRoutingModule { }
