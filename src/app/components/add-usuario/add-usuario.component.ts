import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent  {

  usuario: Usuario = {
    nombre: '',
    apellido: '',
    cedula: '',
    correo: '',
    password: '',
    estado: false,
    usuarioId: undefined
  };
  submitted = false;

  constructor(private usuarioService: UsuarioService) { }

  saveUsuario(): void {
    const data = {
      nombre: this.usuario.nombre,
      apellido: this.usuario.apellido,
      cedula: this.usuario.cedula,
      correo: this.usuario.correo,
      password: this.usuario.password,

    };
    this.usuarioService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newUsuario(): void {
    this.submitted = false;
    this.usuario = {
      nombre: '',
      apellido: '',
      cedula: '',
      correo: '',
      password: '',
      estado: false,
      usuarioId: undefined
    };
  }

}
