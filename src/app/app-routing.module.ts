import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ProductoDetailsComponent } from './components/producto-details/producto-details.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UsuarioDetailsComponent } from './components/usuario-details/usuario-details.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ContUsuarioComponent } from './components/cont-usuario/cont-usuario.component';
import { ContAdminComponent } from './components/cont-admin/cont-admin.component';
import { ContModeradorComponent } from './components/cont-moderador/cont-moderador.component';






const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductoListComponent },
  { path: 'productos/:id', component: ProductoDetailsComponent },
  { path: 'addproductos', component: AddProductoComponent },
  { path: 'usuarios', component: UsuarioListComponent },
  { path: 'usuarios/:id', component: UsuarioDetailsComponent },
  { path: 'addusuarios', component: AddUsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'profile', component: PerfilComponent },
  { path: 'cont-user', component: ContUsuarioComponent },
  { path: 'cont-admin', component: ContAdminComponent },
  { path: 'cont-mod', component: ContModeradorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }