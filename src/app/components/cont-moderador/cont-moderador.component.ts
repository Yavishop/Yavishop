import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cont-moderador',
  templateUrl: './cont-moderador.component.html',
  styleUrls: ['./cont-moderador.component.css']
})
export class ContModeradorComponent implements OnInit {
  content?: string;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getModeradorTablero().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error con estado: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error con estado: ${err.status}`;
        }
      }
    });
  }
}
