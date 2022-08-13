import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cont-usuario',
  templateUrl: './cont-usuario.component.html',
  styleUrls: ['./cont-usuario.component.css']
})
export class ContUsuarioComponent implements OnInit {
  content?: string;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUserTablero().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error con el estado: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error con el estado: ${err.status}`;
        }
      }
    });
  }
}
