// Importa o módulo Component do Angular core
import { Component } from '@angular/core';

// Define um componente Angular com metadados
@Component({
  // Seletor CSS que será usado para renderizar o componente no HTML
  selector: 'app-root',

  // Caminho para o arquivo de template HTML associado a este componente
  templateUrl: './app.component.html',

  // Array de caminhos para arquivos de estilo (CSS, SASS, SCSS) associados a este componente
  styleUrls: ['./app.component.scss']
})

// Classe do componente Angular
export class AppComponent {
  // Propriedade 'title' associada a este componente, inicializada com o valor 'CRUD-Neri'
  title = 'CRUD-Neri';
}
