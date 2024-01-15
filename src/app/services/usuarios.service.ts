import { Injectable } from '@angular/core';
import { IMusica } from '../interfaces/IMusica';
import { IAviso } from '../interfaces/IAviso';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MusicaService {

  usuarios: IMusica[] = [
    {
      nome: "boulevard of broken dreams",
      artista: "Green Day",
      genero: "Punk Rock",
    }
  ];

  aviso: IAviso = {
    message: '',
    status: false,
    type: '',
  };

  avisoAtualizado = new Subject<IAviso>();

  constructor() { }

  addUser(nome: string, artista: string, genero: string) {

    const usuarioNovo: IMusica = {
      nome: nome,
      artista: artista,
      genero: genero,
    };

    this.usuarios.push(usuarioNovo);
  }

  removeUser(index: number) {
    this.usuarios.splice(index, 1);
  }

  getUser(index: number): IMusica {
    return this.usuarios[index];
  }

  alterarStatus(message: string, status: boolean, type: string) {
    const novoAviso: IAviso = {
      message: message,
      status: status,
      type: type,
    };
    this.aviso = novoAviso;
    this.avisoAtualizado.next(novoAviso);
  }
  editUser(
    nomeEdicao: string,
    sobrenomeEdicao: string,
    idadeEdicao: string,
    index: number
  ) {
    const usuario: IMusica = {
      nome: nomeEdicao,
      artista: sobrenomeEdicao,
      genero: idadeEdicao,
    };

    this.usuarios[index] = usuario;
  }

}
