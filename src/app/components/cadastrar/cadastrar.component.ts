import { Router } from '@angular/router';
import { MusicaService } from './../../services/usuarios.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent {

  nome!: string;
  artista!: string;
  genero!: string;

  constructor(private musicasService: MusicaService, private router: Router) {
  }

  addUser() {
    this.musicasService.addUser(this.nome, this.artista, this.genero);
    this.musicasService.alterarStatus(`Música:" ${this.nome} - ${this.artista}" adicionado com sucesso!`, true, 'success')
    this.clearDados();
    setTimeout(() => {
      this.musicasService.alterarStatus('', false, 'success');
    }, 5000);
  }

  clearDados() {
    this.nome = '';
    this.artista = '';
    this.genero = '';
  }

  redirecionar(rota: string) {
    this.router.navigate([rota]);
  }


}
