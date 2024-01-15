// Importa módulos do Angular necessários para configuração de rotas
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa o componente LogsComponent, que será utilizado em uma das rotas
import { LogsComponent } from './components/logs/logs.component';

// Define as rotas da aplicação
const routes: Routes = [
  // Rota vazia (rota inicial): redireciona para o módulo de login
  { path: '', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },

  // Rota '/home': redireciona para o módulo de listar
  { path: 'home', loadChildren: () => import('./components/listar/listar.module').then(m => m.ListarModule) },

  // Rota '/logs': redireciona para o módulo de logs
  { path: 'logs', loadChildren: () => import('./components/logs/logs.module').then(m => m.LogsModule) }

  // Comentado: Rota '/logs' sem lazy loading (carregamento preguiçoso)
  // {path:"logs", component:LogsComponent}
];

// Módulo de configuração de rotas
@NgModule({
  // Configuração das rotas para o aplicativo
  imports: [RouterModule.forRoot(routes)],

  // Exporta o módulo de rotas configurado para uso em outros módulos
  exports: [RouterModule]
})
export class AppRoutingModule { }