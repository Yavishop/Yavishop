import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { ProductoDetailsComponent } from './components/producto-details/producto-details.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { HomeComponent } from './components/home/home.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { UsuarioDetailsComponent } from './components/usuario-details/usuario-details.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroComponent } from './components/registro/registro.component';

import { httpInterceptorProviders } from './helpers/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AddProductoComponent,
    ProductoDetailsComponent,
    ProductoListComponent,
    HomeComponent,
    AddUsuarioComponent,
    UsuarioDetailsComponent,
    UsuarioListComponent,
    LoginComponent,
    PerfilComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
