import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private userioService: UsuarioService) { }

  ngOnInit(): void {
    this.userioService.getContenidoPublico().subscribe({
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
