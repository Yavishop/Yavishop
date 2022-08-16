import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuario?: Usuario[];
  currentUsuario: Usuario = { };
  currentIndex = -1;
  nombre = '';

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.recuperarUsuarios();
  }
  recuperarUsuarios(): void {
    this.usuarioService.getAll()
      .subscribe({
        next: (data) => {
          this.usuario = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refrescarLista(): void {
    this.recuperarUsuarios();
    this.currentUsuario = {};
    this.currentIndex = -1;
  }
  setUsuarioActivo(tutorial: Usuario, index: number): void {
    this.currentUsuario = tutorial;
    this.currentIndex = index;
  }
  removerAllUsuarios(): void {
    this.usuarioService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refrescarLista();
        },
        error: (e) => console.error(e)
      });
  }
  buscarNombre(): void {
    this.currentUsuario = {};
    this.currentIndex = -1;

    this.usuarioService.findByNombre(this.nombre)
      .subscribe({
        next: (data) => {
          this.usuario = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}