import { LogsService } from 'src/app/services/logs.service';
import { Component } from '@angular/core';
import { IAviso } from 'src/app/interfaces/IAviso';
import { IMusica } from 'src/app/interfaces/IMusica';
import { MusicaService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})

export class ListarComponent {
  usuarios: IMusica[];
  aviso: IAviso;

  nome!: string;
  artista!: string;
  genero!: string;
  indexEdicao!: number;

  constructor(private logsService: LogsService, private musicasService: MusicaService, private router: Router) {

    this.usuarios = musicasService.usuarios;
    this.aviso = musicasService.aviso;

  }

  redirecionar(rota: string) {
    this.router.navigate([rota]);
  }

  removeUser(index: number) {
    const modificado: string[] = [];
    const usuarioDeletado = this.musicasService.getUser(index);
    modificado.push(`Musica: ${usuarioDeletado.nome} - ${usuarioDeletado.artista}. foi deletado.`)
    this.musicasService.removeUser(index);
    this.alterarStatus(`Musica ${usuarioDeletado.nome} ${usuarioDeletado.artista} deletado com sucesso!`, true, "danger")
    console.log(modificado);
    this.adicionarLogs(modificado, 'Deletado');
    setTimeout(() => {
      this.alterarStatus('', false, 'danger');
    }, 5000);
  }

  alterarStatus(message: string, status: boolean, type: string) {
    this.musicasService.alterarStatus(message, status, type);
    this.aviso = this.musicasService.aviso;
  }

  clearDados() {
    this.nome = '';
    this.artista = '';
    this.genero = '';
  }

  edicao(index: number) {
    const usuarioEdicao = this.musicasService.getUser(index);
    this.nome = usuarioEdicao.nome;
    this.artista = usuarioEdicao.artista;
    this.genero = usuarioEdicao.genero;
    this.indexEdicao = index;
  }

  editarUser() {
    const musicaAtual: IMusica = this.musicasService.getUser(this.indexEdicao);
    const modificado: string[] = this.verificarMusica(musicaAtual);

    this.musicasService.editUser(
      this.nome,
      this.artista,
      this.genero,
      this.indexEdicao
    );
    this.adicionarLogs(modificado, 'Editado');
    this.alterarStatus(`Musica ${this.nome} ${this.artista} atualizado com sucesso!`, true, 'warning');
    this.clearDados();
    setTimeout(() => {
      this.alterarStatus('', false, 'warning');
    }, 5000);
  }

  obterHoraAtual(): string {
    const dataAtual = new Date();
    const hora = this.formatarNumero(dataAtual.getHours());
    const minutos = this.formatarNumero(dataAtual.getMinutes());
    const segundos = this.formatarNumero(dataAtual.getSeconds());
    return `${hora}:${minutos}:${segundos}`;
  }

  obterDataAtual(): string {
    const dataAtual = new Date();
    const dia = this.formatarNumero(dataAtual.getDate());
    const mes = this.formatarNumero(dataAtual.getMonth() + 1);
    const ano = dataAtual.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  formatarNumero(numero: number): string {
    return numero < 10 ? `0${numero}` : `${numero}`;
  }

  adicionarLogs(modificado: string[], tipo: string) {
    this.logsService.adicionarLogs(this.obterHoraAtual(), this.obterDataAtual(), modificado, tipo);
  }

  verificarMusica(usl: IMusica): string[] {
    const modificacoes: string[] = [];
    if (usl.nome != this.nome)
      modificacoes.push("Alterou o nome da musica: " + usl.nome + " para " + this.nome);
    if (usl.artista != this.artista)
      modificacoes.push("Alterou o artista de " + usl.nome + " para " + this.artista);
    if (usl.genero != this.genero)
      modificacoes.push("Alterou o gênero de " + usl.nome + " para " + this.genero );

    return modificacoes;
  }
}

