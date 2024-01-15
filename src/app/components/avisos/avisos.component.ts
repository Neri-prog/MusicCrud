import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAviso } from 'src/app/interfaces/IAviso';
import { MusicaService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss']
})
export class AvisosComponent {
  aviso: IAviso;
  private avisoSubscription!: Subscription;

  constructor(private musicasService: MusicaService) {
    this.aviso = musicasService.aviso;

  }
  ngOnInit() {
    this.aviso = this.musicasService.aviso;
    this.avisoSubscription = this.musicasService.avisoAtualizado.subscribe(
      (novoAviso: IAviso) => {
        this.aviso = novoAviso;
      }
    );
  }

  alterarStatus(message: string, status: boolean, type: string) {
    this.musicasService.alterarStatus(message, status, type);
  }


  ngOnDestroy() {
    this.avisoSubscription.unsubscribe();
  }
}
