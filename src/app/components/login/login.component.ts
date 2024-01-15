// Importa módulos necessários do Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Define um componente Angular chamado LoginComponent
@Component({
  // Seletor CSS que será usado para renderizar o componente no HTML
  selector: 'app-login',

  // Caminho para o arquivo de template HTML associado a este componente
  templateUrl: './login.component.html',

  // Array de caminhos para arquivos de estilo (CSS, SASS, SCSS) associados a este componente
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // Construtor do componente, recebe uma instância do serviço Router por injeção de dependência
  constructor(private router: Router) {
  }

  // Método para redirecionar para uma rota específica
  redirecionar(rota: string) {
    // Utiliza o serviço Router para navegar até a rota especificada
    // this.router.navigateByUrl(rota);

    // Alternativamente, utiliza o método navigate para navegar até a rota especificada
    this.router.navigate([rota]);
  }
}
