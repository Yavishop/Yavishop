import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cont-admin',
  templateUrl: './cont-admin.component.html',
  styleUrls: ['./cont-admin.component.css']
})
export class ContAdminComponent implements OnInit {

  content?: string

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getAdminTablero().subscribe({
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
