import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

const baseUrl = 'http://localhost:8080/api/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  buscarId(id: number) {
    throw new Error('Method not implemented.');
  }
  updateUsuario(usuario: Usuario) {
    throw new Error('Method not implemented.');
  }
  findAll() {
    throw new Error('Method not implemented.');
  }
  createUsuario(NuevaPersona: Usuario) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(baseUrl);
  }
  get(id: any): Observable<Usuario> {
    return this.http.get<Usuario>(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  deleteUsuario(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByNombre(nombre: any): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${baseUrl}?nombre=${nombre}`);
  }
}