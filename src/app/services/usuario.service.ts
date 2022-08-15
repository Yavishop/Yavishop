import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

const baseUrl = 'http://localhost:8080/api/usuarios';
const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root',
})

export class UsuarioService {

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
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByNombre(nombre: any): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${baseUrl}?nombre=${nombre}`);
  }

  getContenidoPublico(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserTablero(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  
  getModeradorTablero(): Observable<any> {
    return this.http.get(API_URL + 'moderador', { responseType: 'text' });
  }

  getAdminTablero(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}