import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-details',
  templateUrl: './usuario-details.component.html',
  styleUrls: ['./usuario-details.component.css']
})
export class UsuarioDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentUsuario: Usuario = {
    nombre: '',
    apellido: '',
    cedula: '',
    email: '',
    password: '',
    estado: false
  };
  mensaje = '';
  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.mensaje = '';
      this.getUsuario(this.route.snapshot.params["id"]);
    }
  }
  getUsuario(id: string): void {
    this.usuarioService.get(id)
      .subscribe({
        next: (data) => {
          this.currentUsuario = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updateEstado(status: boolean): void {
    const data = {
      nombre: this.currentUsuario.nombre,
      apellido: this.currentUsuario.apellido,
      cedula: this.currentUsuario.cedula,
      email: this.currentUsuario.email,
      password: this.currentUsuario.password,
      estado: status
    };
    this.mensaje = '';
    this.usuarioService.update(this.currentUsuario.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentUsuario.estado = status;
          this.mensaje = res.message ? res.message : '¡El estado del usuario se actualizó con éxito!';
        },
        error: (e) => console.error(e)
      });
  }
  updateUsuario(): void {
    this.mensaje = '';
    this.usuarioService.update(this.currentUsuario.id, this.currentUsuario)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.mensaje = res.message ? res.message : '¡El Usuario seleccionado  se actualizó con éxito!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteUsuario(): void {
    this.usuarioService.delete(this.currentUsuario.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/usuario']);
        },
        error: (e) => console.error(e)
      });
  }
}