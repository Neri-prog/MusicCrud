import { Injectable } from '@angular/core';
import { MusicaService } from './usuarios.service';
import { ILog } from '../interfaces/ILog';
import { AppModule } from '../app.module';

@Injectable({
  providedIn: AppModule
})
export class LogsService {

  logs: ILog[] = [];

  constructor() { }

  adicionarLogs(
    hora: string,
    data: string,
    modificado: string[],
    tipo: string
  ) {
    const logNova: ILog = {
      hora: hora,
      data: data,
      modificado: modificado,
      tipo: tipo
    }
    this.logs.push(logNova);
  }

  limpar() {
    this.logs = [];
  }
}
